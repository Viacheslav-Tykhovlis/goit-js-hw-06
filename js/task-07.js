const rangeInput = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

rangeInput.addEventListener("input", (e) => {
  output.style.fontSize = e.target.value + "px";
});
