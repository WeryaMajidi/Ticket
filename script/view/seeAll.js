import View from "./view.js";
import { W500_IMG, ORIGINAL_IMG } from "../config.js";

class SeeAll extends View {
  _parentElement = document.querySelector(".main");
  _errorMessage = "Something went wrong please try again later!!";

  render(data, link) {
    // Data not exist
    if (!data) {
      return;
    }

    this._data = data;
    this._link = link;
    this._title = this._generateTitle(link);
    this._type = this._generateType(link);

    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    this._scrollTop();
  }

  _generateMarkup() {
    return `
      <div class="row">
      <h2 class="heading-secondary">${this._title}</h2>
      </div>
      <div class="see-all">
      ${this._generateCards(this._data.results, this._type)}
      </div>
      <div class="pagination">
      <ul class="pagination__list">
      ${
       
        this._generatePaginationItem(this._link,this._data.page,this._data.total_pages)
      }
      </ul>
    </div>
  
    `;
  }

  _generateCards(data, type) {
    let cards = "";
    data.forEach((card) => {
      const title = card.title !== undefined ? card.title : card.name;
      cards += `
        <a class="card" href="#${type}-${card.id}">
          <img src="${W500_IMG}${
        card.poster_path
      }" alt="poster ${title}" class="card__img" />
          <h4 class="card__title">${title}</h4>
         <div class="card__more-info">
          <span>${title}</span>
          <p class="card__story-line">${
            card.overview.substring(0, 180) + " . . . "
          }</p>
          <span class="card__rate">
           <ion-icon name="star-outline"></ion-icon>
            <span><strong>${card.vote_average}</strong> /10</span>
           </span>
        </div>
    </a>`;
    });
    return cards;
  }

  /**
   *
   * @param {string} link:  e.g(movie/popular)
   * @returns {string} title : e.g(Trending Movies)
   */
  _generateTitle(link) {
    let title;

    switch (link) {
      case "movie/popular":
        title = "Trending Movies";
        break;
      case "movie/upcoming":
        title = "Upcoming Movies";
        break;
      case "movie/now_playing":
        title = "Now playing Movies";
        break;
      case "movie/top_rated":
        title = "Top rated Movies";
        break;
      case "tv/popular":
        title = "Trending Series";
        break;
      case "tv/top_rated":
        title = "Top rated Series";
        break;
      case "tv/on_the_air":
        title = "On the air Series";
        break;
    }
    return title;
  }

  /**
   *
   * @param {string} link:  e.g(movie/popular)
   * @returns {string} string : e.g(mov)
   */
  _generateType(link) {
    if (
      link === "movie/popular" ||
      link === "movie/upcoming" ||
      link === "movie/now_playing" ||
      link === "movie/top_rated"
    ) {
      return "mov";
    } else {
      return "ser";
    }
  }

  /**
   *
   * @param {string} link: link of see all page we create pagination links with this e.g(movie/popular)
   * @param {integer} currPage: current page e.g(1)
   * @param {integer} totalPage:  number og total pages e.g(263)
   * @returns
   */
  _generatePaginationItem(link, currPage, totalPage) {
    let markup = "";
    let start = currPage - 1;
    let end = currPage + 3;

    if (currPage === 1) {
      start = currPage;
      end = currPage + 4;
    }

    if (end >= totalPage) {
      end = totalPage;
      start = end - 5;
    }

    if (currPage !== 1) {
      markup += `<li class="pagination__item pagination__prev-btn">
        <a href="#${link}?p=${currPage - 1}">
        <ion-icon name="chevron-back-outline"></ion-icon></a>
      </li>`;
    }

    for (let i = start; i <= end; i++) {
      let activeClass = "";
      if (currPage === i) {
        activeClass = "active";
      } else {
        activeClass = "";
      }
      markup += `<li class="pagination__item ${activeClass}"><a href="#${link}?p=${i}">${i}</a></li>`;
    }

    if (currPage !== totalPage) {
      markup += `<li class="pagination__item pagination__next-btn">
              <a href="#${link}?p=${currPage + 1}">
              <ion-icon name="chevron-forward-outline">
              </ion-icon></a></li>`;
    }

    return markup;
  }
}
export default new SeeAll();
