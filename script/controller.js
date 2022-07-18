import * as model from "./model.js";
import home from "./view/home.js";
import preview from "./view/preview.js";
import seeAll from "./view/seeAll.js";
import search from "./view/search.js";
import header from "./view/header.js";

const controlHome = async function () {
  try {
    const hash = window.location.hash.slice(1);

    // If HASH esxist with value in URL -> Check value and create content
    if (hash) {
      switch (true) {
        // if hash contain see-all item e.g(#movie/top_rated?p=1, #tv/popular?p=21)
        case hash.includes("movie/top_rated") ||
          hash.includes("movie/popular?p=") ||
          hash.includes("movie/now_playing") ||
          hash.includes("movie/upcoming?p=") ||
          hash.includes("tv/top_rated?p=") ||
          hash.includes("tv/on_the_air?p=") ||
          hash.includes("tv/popular?p="):
          const page = hash.split("?p=")[1];
          const link = hash.split("?p=")[0];
          const data = await model.getAll(link, page);
          seeAll.render(data, link);
          break;

        // if hash contain certain id movie or series e.g(#mov-123, #ser-456)
        case hash.includes("mov") || hash.includes("ser"):
          const [type, id] = hash.split("-");
          controlPreview(type, id);
          break;
      }
      return;
    }

    // If dosent exist any HASH Load home page

    // 1) Get home page data
    await model.getHomeData();

    // 2) Render home page
    home.render(model.state.tops);
  } catch (err) {
    // An error occurs -> render message
    home.renderError();
    console.log(err);
  }
};

const controlPreview = async function (type, id) {
  try {
    // 1) Get media info
    if (type === "mov") {
      await model.getMovieInfo(id);
    } else {
      await model.getSeriesInfo(id);
    }
    // 2) Render data
    preview.render(model.state.media);
  } catch (err) {
    // An error occurs -> render message
    preview.renderError();
  }
};

const controlSearch = async function (query) {
  try {
    // 1) Get search data from api
    await model.getSearchInfo(query);
    // 2) Render data
    search.render(model.state.search);

    // listener: when click position out of the resultList -> clear and hide it result list
    search.addHandlerToCloseResultList();
  } catch (err) {
    // An error occurs -> render message
    search.renderError();
  }
};
const init = async function () {
  home.addHandlerRender(controlHome);
  search.addHandlerSearchInput(controlSearch);
  header.addHandlerMenuBtns();
};

init();
