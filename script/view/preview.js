import View from "./view.js";
import { W500_IMG, ORIGINAL_IMG } from "../config.js";

class Preview extends View {
  _parentElement = document.querySelector(".main");
  _errorMessage = "Something went wrong please try again later!!";

  _generateMarkup() {
    const background = ORIGINAL_IMG + "/" + this._data.background;

    return `
    <section class="preview">
            <div class="preview__background" style="background-image: linear-gradient( to right, rgba(0, 0, 0, 0.47) , rgba(0, 0, 0, 0.47)),url('${background}');"></div>
            <div class="preview__poster">
              <img src="${W500_IMG}/${this._data.poster}" alt="Poster ${
      this._data.title
    }" />
            </div>
            <!-- info -->
            <div class="preview__info">
              <div class="info__heading">
                <h2 class="info__title">${this._data.title}</h2>
                </a>
              </div>
              <ul class="info__data">
                ${this._generateInfoMarkup()}
              </ul>
              <ul class="info__genres">
              ${this._generateGenres(this._data.genres)} 
              </ul>
            </div>
            <div class="preview__story">
              <h3 class="story-line">Story line</h3>
              <p class="story-overview">${this._data.overview}</p>
            </div>
            <div class="similar pad-bt-md">
              <h3 class="heading-tertiary">Similar movies</h3>
             ${this._generateCarouselMarkup(
               this._data.similars,
               this._data.type
             )}
            </div>
          </section>
    `;
  }

  _generateCarouselMarkup(data, type) {
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
    return `<div class="carousel">${cards}</div>`;
  }

  _generateInfoMarkup() {
    if (this._data.type === "mov") {
      return `<li class="info__data-item">
      <ion-icon name="time-outline"></ion-icon>
      Runtime :
      <span class="duration">${this._data.runtime} min</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="globe-outline"></ion-icon>
      Language :
      <span class="country">${this._data.language}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="calendar-outline"></ion-icon>
      Relased :
      <span class="date">${this._data.releaseDate}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="cash-outline"></ion-icon>
      Box office :
      <span class="rated">${this._data.boxOffice}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="videocam-outline"></ion-icon>
      Director :
      <span class="rated">${this._splitNames(this._data.director)}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="document-text-outline"></ion-icon>
      Writer :
      <span class="rated">${this._splitNames(this._data.writer)}</span>
    </li>
    <li class="info__data-item">
      <img src="./img/imdb.svg" class="rate-logo--imdb" />
      <span class="rated">${this._data.imdbRating} / 10</span>
    </li>
    <li class="info__data-item">
      <img src="./img/rotten.svg" class="rate-logo--rotten" />
      <span class="rated">${this._data.rottenTomatoesRating}</span>
    </li>`;
    } else {
      return `<li class="info__data-item">
      <ion-icon name="time-outline"></ion-icon>
      Runtime :
      <span class="duration">${this._data.runtime} min</span>
    </li>
    <li class="info__data-item">
    <ion-icon name="folder-outline"></ion-icon>
      seasons :
      <span class="country">${this._data.seasones}</span>
    </li>
    <li class="info__data-item">
    <ion-icon name="recording-outline"></ion-icon>
      episodes :
      <span class="country">${this._data.episodes}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="globe-outline"></ion-icon>
      Language :
      <span class="country">${this._data.language}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="calendar-outline"></ion-icon>
      Relased :
      <span class="date">${this._data.releaseDate}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="document-text-outline"></ion-icon>
      Writer :
      <span class="rated">${this._data.writer}</span>
    </li>
    <li class="info__data-item">
      <img src="./img/imdb.svg" class="rate-logo--imdb" />
      <span class="rated">${this._data.imdbRating} / 10</span>
    </li>`;
    }
  }
  _generateGenres(genres) {
    let html = "";
    genres.forEach((gen) => {
      html += `<li class="info__genres-item">${gen}</li>`;
    });
    return html;
  }

  _generateSimilars(similars) {
    let html = "";
    similars.forEach((movie) => {
      html += `
      <a href="#${this._data.type}-${movie.id}" class="card">
        <img src="${W500_IMG}/${movie.poster}" alt="Poster ${movie.title}" class="card__img" />
        <h4 class="card__title">${movie.title}</h4>
      </a>
      `;
    });
    return html;
  }
  _splitNames(str) {
    if (!str.includes(",")) {
      return str;
    }
    let names = str.split(",");
    return (names[0] + ", " + names[1]).substring(0, 33) + ". . .";
  }
}
export default new Preview();
