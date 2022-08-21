const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", isInputValid);

function isInputValid(event) {
  const sumInput = Number(event.currentTarget.value.length);
  const input = event.currentTarget.value;
  const number = Number(inputEl.dataset.length);

  function isSpace() {
    return input.includes(" ");
  }

  if (sumInput !== number || isSpace()) {
    inputEl.className = "invalid";
  } else {
    inputEl.className = "valid";
  }
}
