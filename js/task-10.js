function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxEl: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const box = new Array(Number(refs.inputEl.valueAsNumber))
    .fill("1")
    .reduce((acc, el, i) => {
      const div = document.createElement("div");
      div.classList.add("box");
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
      return acc.concat([div]);
    }, []);
  refs.boxEl.append(...box);
}

function destroyBoxes() {
  const delDiv = refs.boxEl.children;
  while (delDiv.length > 0) {
    const boxDel = document.querySelector(".box");
    boxDel.remove();
  }
}
