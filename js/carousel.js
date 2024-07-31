const painelSlide = document.querySelector('.carousel');
const btnPrev = document.querySelector('.prev');
const btnAfter = document.querySelector('.after');
const slides = Array.from(document.querySelectorAll('.projeto'));
let slideCount = 0;

function handleSlide() {
  function nextItem() {
    slideCount++;
    slides.forEach((item) => {
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

  painelSlide.style.width = slides.length * 100 + '%';
  btnAfter.addEventListener('click', nextItem);
  btnPrev.addEventListener('click', prevItem);
}

handleSlide();
