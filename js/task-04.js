const counter = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

decrementEl.addEventListener("click", () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});

incrementEl.addEventListener("click", () => {
  counter.increment();
  counterValue.textContent = counter.value;
});
