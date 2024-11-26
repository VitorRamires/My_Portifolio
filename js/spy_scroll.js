const stars = document.querySelectorAll(".banner-animation span");
const menuLinks = document.querySelectorAll(".main-links a");
const allSections = document.querySelectorAll("section");

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
    hamburgerBtn.classList.add("menu-mobile-action");
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
