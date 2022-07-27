const inputValueEl = document.querySelector("#validation-input");
inputValueEl.addEventListener("blur", inputCheck);
function inputCheck() {
  const length = inputValueEl.dataset.length;
  let inputLength = inputValueEl.value.length.toString();
  if (length === inputLength) {
    return inputValueEl.classList.replace("invalid", "valid");
  }
  inputValueEl.classList.add("invalid");
  inputValueEl.classList.remove("valid");
}
