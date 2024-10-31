const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const btnMenuMobile = document.querySelector(".btn-menu-mobile");
const menuMobile = document.querySelector(".menu-links-mobile");

btnMenuMobile.addEventListener("click", () => {
  if (menuMobile.classList.contains("active-menu")) {
    menuMobile.classList.remove("active-menu");
    hamburgerBtn.classList.add("menu-mobile-action");
    closeBtn.classList.remove("menu-mobile-action");
  } else {
    menuMobile.classList.add("active-menu");
    hamburgerBtn.classList.remove("menu-mobile-action");
    closeBtn.classList.add("menu-mobile-action");
  }
});
