const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const nameEmail = event.currentTarget.elements.email.name;
  const namePassword = event.currentTarget.elements.password.name;
  const valueEmail = event.currentTarget.elements.email.value;
  const valuePassword = event.currentTarget.elements.password.value;

  if (valueEmail === "" || valuePassword === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  const formData = {
    [nameEmail]: valueEmail,
    [namePassword]: valuePassword,
  };

  console.log(formData);
  form.reset();
}
