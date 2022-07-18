import ajax, { AJAX } from "./helper";
import { OMDB_KEY,OMDB_URL,TMDB_KEY,TMDB_URL,W500_IMG,ORGINAL_IMG } from "./config";

export const state = {
  media: {},
  search: {
    query: "",
    results: [],
  },
  tops: [],
};

/**
 * GET popular movies,upcoming movies and popular series and save datas in state.tops
 */
export const getHomeData = async function () {
  try {
    const tops = ["movie/popular", "movie/upcoming", "tv/popular"];

    for (let i = 0; i < tops.length; i++) {
      
      const data = await AJAX(`${TMDB_URL}${tops[i]}?api_key=${TMDB_KEY}&language=en-US&page=1`);
      state.tops.push(data.results.slice(0, 11));
    }
  } catch (err) {
    throw err;
  }
};

/**
 *
 * @param {integer} id : movie ID e.g(43125)
 * @returns {undefined}
 * GET movie information (from TMDB and OMDB API) by id and save data in state.media
 */
export const getMovieInfo = async function (id) {
  try {

    const tmdbData = await AJAX(`${TMDB_URL}movie/${id}?api_key=${TMDB_KEY}&language=en-US`);

    const omdbData = await AJAX(`${OMDB_URL}/?i=${tmdbData.imdb_id}&apikey=${OMDB_KEY}`);
  
    const similars = await AJAX(`${TMDB_URL}movie/${id}/similar?api_key=${TMDB_KEY}&language=en-US`);

    state.media = createMovieObject(tmdbData, omdbData);

    // Add similars movies to media object
    state.media.similars = createSimilarsList(similars.results.slice(0, 6));
  } catch (err) {
    throw err;
  }
};

/**
 *
 * @param {integer} id : series ID e.g(43125)
 * @returns {undefined}
 * GET series information (only from TMDB API) by id and save data in state.media
 */
export const getSeriesInfo = async function (id) {
  try {
    const tmdbData = await AJAX(`${TMDB_URL}tv/${id}?api_key=${TMDB_KEY}&language=en-US`);

    const similars = await AJAX(`${TMDB_URL}tv/${id}/similar?api_key=${TMDB_KEY}&language=en-US`);

    state.media = createSeriesObject(tmdbData);

    // Add similars movies to media object
    state.media.similars = createSimilarsList(similars.results.slice(0, 6));
  } catch (err) {
    throw err;
  }
};

/**
 *
 * @param {object} tmdbData : datas come from TMDB API
 * @param {object} omdbData : tmdbData : datas come from OMDB API
 * @returns {object} Generate customize object with datas come from two API
 */
const createMovieObject = function (tmdbData, omdbData) {
  state.media = {};

  const genres = [];

  tmdbData.genres.forEach((gen) => {genres.push(gen.name);});
  
  const title = tmdbData.title !== undefined ? tmdbData.title : tmdbData.name;

  const rsDate = tmdbData.release_date !== undefined? tmdbData.release_date: tmdbData.first_air_date;

  let rottenTomatoes = omdbData.Ratings.filter((item) => item.Source === "Rotten Tomatoes");

  rottenTomatoes = rottenTomatoes.length!==0 ? rottenTomatoes[0].Value : '-';

  const imdb = omdbData.imdbRating !== "N/A" ? omdbData.imdbRating : tmdbData.vote_average;

  const boxOffice = omdbData.BoxOffice !== "N/A" ? omdbData.BoxOffice : '-';
  return {
    background: tmdbData.backdrop_path,
    poster: tmdbData.poster_path,
    title: title,
    runtime: tmdbData.runtime !== undefined ? tmdbData.runtime : " - ",
    language: tmdbData.original_language,
    genres: genres,
    releaseDate: rsDate,
    overview: tmdbData.overview,
    type: "mov",
    rottenTomatoesRating: rottenTomatoes,
    imdbRating: imdb,
    director: omdbData.Director,
    writer: omdbData.Writer,
    boxOffice: boxOffice,
  };
};

/**
 *
 * @param {object} tmdbData : datas come from TMDB API
 * @returns {object} Generate customize object with datas come from TMDB API
 */
const createSeriesObject = function (tmdbData) {
  state.media = {};
  const genres = [];
 
  tmdbData.genres.forEach((gen) => {genres.push(gen.name);});
  const title = tmdbData.title !== undefined ? tmdbData.title : tmdbData.name;

  const rsDate = tmdbData.release_date !== undefined? tmdbData.release_date: tmdbData.first_air_date;

  return {
    background: tmdbData.backdrop_path,
    poster: tmdbData.poster_path,
    title: title,
   
    runtime: tmdbData.episode_run_time[0]!== undefined ? tmdbData.episode_run_time[0]: " - ",
    language: tmdbData.original_language,
    genres: genres,
    releaseDate: rsDate,
    overview: tmdbData.overview,
    type: "ser",
    imdbRating: tmdbData.vote_average,
    seasones: tmdbData.number_of_seasons,
    episodes: tmdbData.number_of_episodes,
    writer: tmdbData.created_by[0] ? tmdbData.created_by[0].name : "-",
  };
};

/**
 *
 * @param {array} similars : array of objects
 * @returns {undefined}
 * Create customize objects with similars and return array
 */

const createSimilarsList = function (similarItems) {
  const similars = [];
  similarItems.forEach((item) => {
    const title = item.title !== undefined ? item.title : item.name;
    similars.push({
      poster_path: item.poster_path,
      title: title,
      id: item.id,
      vote_average: item.vote_average.toFixed(1),
      overview: item.overview,
    });
  });
  return similars;
};

/**
 *
 * @param {string} link: e.g(movie/top_rated, movie/popular, movie/now_playing"), movie/upcoming)
 * @param {integer} page: page number e.g(20)
 * @returns {promise} promise
 */
export const getAll = function (link, page) {
  try {
    
    return  AJAX(`${TMDB_URL}${link}?api_key=${TMDB_KEY}&language=en-US&page=${page}`);
  } catch (err) {
    throw err;
  }
};

/**
 *
 * @param {string} query: name of movie or series e.g(Batman)
 * @return {undefined}
 * create customize objects and push thats in state.search.results array
 */
export const getSearchInfo = async function (query) {
  try {
    state.search.query = query;
    state.search.results = [];
   
    const data = await AJAX(`${TMDB_URL}search/multi?api_key=${TMDB_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
    
    // filter results by type : movie or tv
    const results = data.results.filter(item=>item.media_type==='movie'||item.media_type==='tv').slice(0, 6);
  
    
    // create array of customize objects. with top 6 search results
    results.forEach((res) => {
      const title = res.title !== undefined ? res.title : res.name;
   
      const rsDate = res.release_date !== undefined ? res.release_date : res.first_air_date;
      state.search.results.push({
        title: title,
        vote: res.vote_average,
        release_date: rsDate,
        id: res.id,
        type: res.media_type,
        poster: res.poster_path,
      });
    });
    console.log(state.search);
  } catch (err) {
    throw err;
  }
};
