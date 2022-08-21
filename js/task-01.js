const categoriesEl = document.querySelector("#categories");
const listEl = categoriesEl.querySelectorAll(".item");

console.log(`Number of categories: ${listEl.length}`);

listEl.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.querySelectorAll("li").length}`);
});
