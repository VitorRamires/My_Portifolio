const animElements = document.querySelectorAll(".anim");

function handleEntranceAnimations() {
  animElements.forEach((element) => {
    const elementDistanceTop = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight * 0.9;
    if (elementDistanceTop < windowHeight) {
      element.classList.add("active-animation");
      return;
    }
  });
}

setTimeout(() => {
  handleEntranceAnimations();
}, 250);

window.addEventListener("scroll", handleEntranceAnimations);
