const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allIngredientsEl = document.querySelector("#ingredients");

const ingridient = ingredients.map((elem) => {
  const ingr = document.createElement("li");
  ingr.textContent = elem;
  ingr.classList.add("item");
  return ingr;
});

allIngredientsEl.append(...ingridient);
