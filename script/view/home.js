import View from "./view.js";
import { W500_IMG, ORIGINAL_IMG } from "../config.js";

class Home extends View {
  _parentElement = document.querySelector(".main");
  _errorMessage = "Something went wrong. please use VPN and try again";

  /**
   *
   * @param {object} data: data for generate HOME markup
   * @returns {undefined}
   */
  render(data) {
    // Data not exist
    if (!data) {
      return;
    }

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    // create object for SwiperJS
    this._sliderDeclaration();
    this._scrollTop();
  }

  _generateMarkup() {
    return `
      ${this._generateSliderMarkup(this._data[0].slice(0, 5), "mov")}
          
          <!-- Trending Movies -->
          <section class="trending-movies">
            <div class="row">
              <h2 class="heading-secondary">Trending Movies</h2>
              <a href="#movie/popular?p=1" class="btn">See all</a>
            </div>
            ${this._generateCarouselMarkup(this._data[0].slice(5), "mov")}
          </section>

          <!-- UpComing-Movies -->
          <section class="trending-movies">
            <div class="row">
              <h2 class="heading-secondary">Upcoming Movies</h2>
              <a href="#movie/upcoming?p=1" class="btn">See all</a>
            </div>
            ${this._generateCarouselMarkup(this._data[1].slice(0, 6), "mov")}
          </section>

          <!-- Trending Series -->
          <section class="trending-series">
            <div class="row">
              <h2 class="heading-secondary">Trending Series</h2>
              <a href="#tv/popular?p=1" class="btn">See all</a>
            </div>
            ${this._generateCarouselMarkup(this._data[2].slice(0, 6), "ser")}
          </section>
        </main>
    `;
  }

  /**
   *
   * @param {object} data : data for generate Slider markup
   * @param {string} type : type of objects e.g(mov)
   * @returns {string} markup: html markup for slider
   */
  _generateSliderMarkup(data, type = "mov") {
    // Add slider markup
    let sliderMarkup = `<div class="slider">
                        <div class="swiper">
                          <div class="swiper-wrapper">`;
    // Add slides markup
    data.forEach((slide) => {
      const title =
        slide.title.length <= 30
          ? slide.title
          : slide.title.substring(0, 32) + "...";
      sliderMarkup += `<div class="swiper-slide">
      <a href="#${type}-${slide.id}" class="slide">
        <img src="${ORIGINAL_IMG}/${slide.backdrop_path}" alt="poster" class="slide__img" />
        <h3 class="slide__title">${title}</h3>
        <span class="slide__rate">
          <ion-icon name="star-outline"></ion-icon>
          <span><strong>${slide.vote_average}</strong>/10</span>
        </span>
      </a>
    </div>
      `;
    });

    // Close slider markup
    sliderMarkup += `</div>
    <div class="swiper-button-prev slide__nav-btn"></div>
    <div class="swiper-button-next slide__nav-btn"></div>
    </div>
  </div>`;
    return sliderMarkup;
  }

  _sliderDeclaration() {
    const swiper = new Swiper(".swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2300,
      },
      gragCursor: "true",
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });
  }

  /**
   *
   * @param {object} data : data for generate carousel markup
   * @param {string} type : type of objects e.g(mov, ser)
   * @returns {string} markup: html markup for carousel
   */
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
            card.overview.substring(0, 230) + " . . . "
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

  /**
   *
   * @param {function} handler: function in controll.js, it run when page load or HASh change
   * @return {undefined}
   */
  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
}

export default new Home();
