function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  nameColor: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", changeColor);

function changeColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.nameColor.textContent = refs.bodyEl.style.backgroundColor;
}
