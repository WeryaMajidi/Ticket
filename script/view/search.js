import View from "./view.js";
import { W500_IMG, ORIGINAL_IMG } from "../config.js";

class Search extends View {
  _parentElement = document.querySelector(".result__list");
  _searchInput = document.querySelector(".search__input");
  _searchBtn = document.querySelector(".search__button");
  _form = document.querySelector(".search");
  _errorMessage = "Something went wrong please try again later!!";

  addHandlerSearchInput(handler) {
    let timeOut;
    this._searchInput.addEventListener("input", () => {
      clearTimeout(timeOut);
      timeOut = setTimeout(this._search.bind(this, handler), 1100);
    });

    // prevent default: when user press ENTER-KEY page dosent refresh
    this._form.addEventListener("submit", (e) => e.preventDefault());
  }

  _search(handler) {
    // 0) Get search query from input
    const query = this._searchInput.value;
    if (query === "") {
      return;
    }
    // 1) Visible result list
    this._parentElement.classList.remove("hidden");
    // 2) render Spinner
    this.renderSpinner();
    // 3) request to API
    handler(query);
    // 4) render results in 'render' method
  }

  renderSpinner() {
    const markup = `
    <li class="result__item">
     <div class="spinner">
      <img src="img/load.png" alt="loading icon" />
     </div>
    </li>
    `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  render(data) {
    if (!data) {
      return;
    }

    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    // add listener to result items
    this._resultItemsListerner();
  }

  _generateMarkup() {
    if (this._data.results.length === 0) {
      // If Not Found
      return `
      <li class="result__item">
        <p class="result__not-found">Not Found !!</p>
      </li>
      `;
    }

    let markup = "";
    this._data.results.forEach((res) => {
     
      const reDate = (res.release_date === undefined || res.release_date === null ) ? "" : res.release_date.substring(0, 4);
     
      const poster = (res.poster === undefined || res.poster === null) ? "./img/ticket.png" : `${W500_IMG}${res.poster}`;

      let link = res.type === "movie" ? "#mov-" : "#ser-";

      link += `${res.id}`;
      markup += `
      <li class="result__item">
        <a href="${link}" class="result__link">
                <img
                  class="result__item-img"
                  src='${poster}'
                  alt="Poster ${res.title}"
                />
              <p class="result__item-title">${res.title} - ${reDate}</p>
              <div class="result__item-rate">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>${res.vote !== undefined ? res.vote : "-"}</span>
              </div>
        </a>
      </li>
      `;
    });

    return markup;
  }

  renderError(message = this._errorMessage) {
    const markup = `
    <li class="result__item">
    <div class="error">
    <div>
      <ion-icon name="warning-outline"></ion-icon>
    </div>
    <p>${message}</p>
  </div>
  </li>
    `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerToCloseResultList() {
    // if user click point out of the result list -> reset result list and hide
    window.addEventListener("click", this._resetSearchSection.bind(this));
  }

  _resultItemsListerner() {
    // if user select one of the results -> reset result list and hide and go to preview page
   
    this._parentElement.addEventListener("click",this._resetSearchSection.bind(this));
  }

  _resetSearchSection(e) {
    // user click on one of the result-list link 'OR' some point out of the result list-> reset search section and hide
   
    if ( e.target.closest(".result__link") || !e.target.closest(".result__list") ) {
      // clear result list
      this._parentElement.innerHTML = "";
      // Hide result list
      this._parentElement.classList.add("hidden");
      // clear input
      this._searchInput.value='';
    }
  }
}

export default new Search();
