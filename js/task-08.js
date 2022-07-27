const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email === "" || password === "") {
    return alert("Все поля должны быть заполнены!!!");
  }
  const formUser = {
    email,
    password,
  };
  console.log(formUser);
  formEl.reset();
}
