const inputValueEl = document.querySelector("#validation-input");
inputValueEl.addEventListener("blur", inputCheck);
function inputCheck() {
  const length = Number(inputValueEl.dataset.length);
  let inputLength = inputValueEl.value.length;
  if (length === inputLength) {
    inputValueEl.classList.add("valid");
    inputValueEl.classList.remove("invalid");
  } else {
    inputValueEl.classList.add("invalid");
    inputValueEl.classList.remove("valid");
  }
}
