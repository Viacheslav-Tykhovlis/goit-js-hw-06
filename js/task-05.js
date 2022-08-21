const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", changeName);

function changeName(event) {
  nameEl.textContent = event.currentTarget.value;
}
