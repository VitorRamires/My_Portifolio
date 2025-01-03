const panelChangers = document.querySelectorAll(".panel-changer");
const panels = Array.from(document.querySelectorAll(".panel"));

panelChangers.forEach((panelChanger, index) => {
  panelChanger.addEventListener("click", () => {
    panelChangers.forEach((changer) => {
      changer.classList.remove("active");
    });

    panels.forEach((panel) => {
      panel.classList.remove("active");
    });

    panels[index].classList.add("active");
    panelChangers[index].classList.add("active");
  });
});
