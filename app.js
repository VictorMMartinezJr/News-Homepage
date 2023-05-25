"use strict";

const app = () => {
  /**** Nav ****/
  const mobileNavLinks = document.querySelector(".nav__links");
  const mobileNavMenuIcon = document.querySelector(".nav__menuicon");
  const mobileNavMenuCloseIcon = document.querySelector(
    ".nav__menuicon--close"
  );

  /** open/close links functions **/
  const openMobileNavLinks = () => {
    mobileNavLinks.classList.add("open");
  };
  const closeMobileNavLinks = () => {
    mobileNavLinks.classList.remove("open");
  };

  /** event listeners **/
  mobileNavMenuIcon.addEventListener("click", openMobileNavLinks);
  mobileNavMenuCloseIcon.addEventListener("click", closeMobileNavLinks);

  /**** Nav end ****/
};

app();
