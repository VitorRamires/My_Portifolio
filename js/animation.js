const stars = document.querySelectorAll(".banner-animation span");
const delayElements = document.querySelectorAll(".delay");
const projectScreen = document.querySelector(".tela-projeto");

const expCard = document.querySelectorAll(".exp-card");
const expDescription = document.querySelectorAll(".exp-descricao");

const menuLinks = document.querySelectorAll("header a");
const allSections = document.querySelectorAll("section");

const hamburguerBtn = document.querySelector(".hamburguer");
const closeBtn = document.querySelector(".close");
const btnMenuMobile = document.querySelector(".btn-menu-mobile");
const menuMobile = document.querySelector(".menu-links-mobile");

stars.forEach((star) => {
  let positionX = Math.floor(Math.random() * 100);
  let positionY = Math.floor(Math.random() * 100);

  star.style.left = `${positionX}%`;
  star.style.top = `${positionY}%`;
});

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let getSection = document.querySelector(link.getAttribute("href"));
    let getDistance = getSection.offsetTop;

    if (getSection.classList.contains("tecnologias")) {
      getDistance = getSection.offsetTop - 400;
    } else {
      getDistance = getSection.offsetTop;
    }
    menuMobile.classList.remove("active-menu");
    closeBtn.classList.remove("menu-mobile-action");
    hamburguerBtn.classList.add("menu-mobile-action");
    window.scroll({
      top: getDistance,
      bottom: 0,
      behavior: "smooth",
    });
  });
});

function removeClass() {
  menuLinks.forEach((menu) => {
    menu.classList.remove("active-link");
  });
}

const classLinkAdd = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let actualLink = document.querySelector(
        `.menu-links a[href="#${entry.target.id}"]`
      );
      removeClass();
      actualLink.classList.add("active-link");
    }
  });
};

const options = {
  threshold: 0.35,
};

const observer = new IntersectionObserver(classLinkAdd, options);

allSections.forEach((section) => {
  observer.observe(section);
});

btnMenuMobile.addEventListener("click", () => {
  if (menuMobile.classList.contains("active-menu")) {
    menuMobile.classList.remove("active-menu");
    hamburguerBtn.classList.add("menu-mobile-action");
    closeBtn.classList.remove("menu-mobile-action");
  } else {
    menuMobile.classList.add("active-menu");
    hamburguerBtn.classList.remove("menu-mobile-action");
    closeBtn.classList.add("menu-mobile-action");
  }
});
