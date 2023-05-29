"use strict";

const app = () => {
  const bodyOverlay = document.querySelector(".overlay");
  const mobileNavLinks = document.querySelector(".nav__links");
  const mobileNavMenuIcon = document.querySelector(".nav__menuicon");
  const mobileNavMenuCloseIcon = document.querySelector(
    ".nav__menuicon--close"
  );

  /** Scroll Handler Functions **/
  const handleNavOpenScroll = () => {
    window.addEventListener("scroll", closeMobileNavLinks);
    console.log("ran");
  };
  const removeScrollEventListener = () => {
    window.removeEventListener("scroll", closeMobileNavLinks);
    console.log("removed");
  };

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
    handleNavOpenScroll();
  };
  const closeMobileNavLinks = () => {
    mobileNavLinks.classList.remove("open");
    hideBodyOverlay();
    removeScrollEventListener();
  };

  /** event listeners **/
  mobileNavMenuIcon.addEventListener("click", openMobileNavLinks);
  mobileNavMenuCloseIcon.addEventListener("click", closeMobileNavLinks);
};

app();
