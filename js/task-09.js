const refs = {
  buttonEl: document.querySelector(".change-color"),
  textEl: document.querySelector(".color"),
  bodyEl: document.querySelector("body"),
};

refs.buttonEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  refs.bodyEl.style.backgroundColor = randomColor;
  refs.textEl.textContent = randomColor;
}
