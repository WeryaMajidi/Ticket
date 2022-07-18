export default class View {
  _data;

  render(data) {
    // Data not exist
    if (!data) {
      return;
    }

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    this._scrollTop();
  }

  _scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
    <div>
      <ion-icon name="warning-outline"></ion-icon>
    </div>
    <p>${message}</p>
  </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
