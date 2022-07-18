class Header {
  openBtn = document.querySelector(".nav__btn--open");
  closeBtn = document.querySelector(".nav__btn--close");
  nav = document.querySelector(".nav__list");

  addHandlerMenuBtns() {
    // open btn
    this.openBtn.addEventListener("click", () => {
      document.querySelector(".nav__list").classList.add("visible");
    });

    // close btn
    this.closeBtn.addEventListener("click", () => {
      document.querySelector(".nav__list").classList.remove("visible");
    });

    // listerner for menu items
    this.nav.addEventListener("click", (e) => {
      if (e.target.closest(".clickable")) {
        document.querySelector(".nav__list").classList.remove("visible");
      }
    });
  }

  showMenu() {}
  hideMenu() {}
}

export default new Header();
