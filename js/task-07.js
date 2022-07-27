const refs = {
  rangeEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.rangeEl.addEventListener("input", () => {
  refs.textEl.style.fontSize = `${refs.rangeEl.value}px`;
});
