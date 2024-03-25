const painelSlide = document.querySelector(".carousel");
const btnPrev = document.querySelector(".prev");
const btnAfter = document.querySelector(".after");
const slides = Array.from(document.querySelectorAll(".projeto"));
let slideCount = 0;

// criar slide diretamente pelo JS, tirar do HTML. 

function handleSlide() {
  function nextItem() {
    slideCount++;
    slides.forEach((item, index) => {
      console.log(slides[index]);
      item.style.transform = `translate(${-slideCount * 100}%)`;
      if (slideCount > slides.length - 1) {
        slideCount = 0;
        item.style.transform = `translate(${slideCount * 100}%)`;
      }
      return;
    });
  }

  function prevItem() {
    slideCount--;
    slides.forEach((item) => {
      item.style.transform = `translate(${-slideCount * 100}%)`;
      if (slideCount < 0) {
        slideCount = slides.length - 1;
        item.style.transform = `translate(${-slideCount * 100}%)`;
      }
      return;
    });
  }

  btnAfter.addEventListener("click", nextItem);
  btnPrev.addEventListener("click", prevItem);
}

handleSlide();
