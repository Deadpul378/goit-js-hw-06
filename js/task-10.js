// const refs = {
//   amountEl: document.querySelector("#controls input"),
//   createEl: document.querySelector("button[data-create]"),
//   destroyEl: document.querySelector("button[data-destroy]"),
//   addEl: document.querySelector("#boxes"),
// };

// refs.amountEl.addEventListener("change", (event) => {
//   let amount = event.currentTarget.value;
//   refs.createEl.addEventListener("click", () => {
//     createBoxes(amount);
//     refs.amountEl.value = "";
//     amount = "";
//   });
// });

// refs.destroyEl.addEventListener("click", () => {
//   refs.addEl.innerHTML = "";
//   refs.amountEl.value = "";
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function createBoxes(amount) {
//   console.log(amount);
//   const startSize = 30;
//   for (let i = 0; i < amount; i += 1) {
//     let size = startSize + i * 10;
//     const box = document.createElement("div");
//     box.style.width = `${size} px`;
//     box.style.height = `${size} px`;
//     box.style.backgroundColor = getRandomHexColor();
//     refs.addEl.append(box);
//   }
// }
const refs = {
  amountEl: document.querySelector("#controls input"),
  createEl: document.querySelector("button[data-create]"),
  destroyEl: document.querySelector("button[data-destroy]"),
  addEl: document.querySelector("#boxes"),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  amount = refs.amountEl.value;
  console.log(amount);
  const startSize = 30;
  for (let i = 0; i < amount; i += 1) {
    let size = startSize + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    refs.addEl.append(box);
    console.log(box);
    console.log(size);
  }
  console.log(refs.addEl);
}
refs.amountEl.addEventListener("change", createBoxes);
refs.destroyEl.addEventListener("click", () => {
  refs.addEl.innerHTML = "";
});
