"use strict";

const app = () => {
  const bodyOverlay = document.querySelector(".overlay");
  const mobileNavLinks = document.querySelector(".nav__links");
  const mobileNavMenuIcon = document.querySelector(".nav__menuicon");
  const mobileNavMenuCloseIcon = document.querySelector(
    ".nav__menuicon--close"
  );

  /** show/hide body overlay **/
  const showBodyOverlay = () => {
    bodyOverlay.classList.add("overlay__visible");
  };
  const hideBodyOverlay = () => {
    bodyOverlay.classList.remove("overlay__visible");
  };

  /** open/close links functions **/
  const openMobileNavLinks = () => {
    mobileNavLinks.classList.add("open");
    showBodyOverlay();
  };
  const closeMobileNavLinks = () => {
    mobileNavLinks.classList.remove("open");
    hideBodyOverlay();
  };

  /** event listeners **/
  mobileNavMenuIcon.addEventListener("click", openMobileNavLinks);
  mobileNavMenuCloseIcon.addEventListener("click", closeMobileNavLinks);
};

app();
