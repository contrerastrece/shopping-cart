import { fetchProducts } from "./fetch.js";
import { addToCar } from "./addToCar.js";

const $container = document.querySelector(".container");
let $countItem = document.getElementById("countItem");
let countItem = 0;

document.addEventListener("DOMContentLoaded", (e) => {
  countItem == 0
    ? ($countItem.style.display = "none")
    : ($countItem.style.display = "flex");
  fetchProducts();
});

$container.addEventListener("click", (e) => {
  e.preventDefault();
  let element = e.target;
  if (element.classList.contains("btn")) {
    let dataId = element.dataset.id;

    addToCar(dataId);

    countItem++;
    
    countItem == 0
      ? ($countItem.style.display = "none")
      : ($countItem.style.display = "flex");
    countItem > 9
      ? ($countItem.textContent = "+9")
      : ($countItem.textContent = `${countItem}`);

    console.log(countItem);
  }
});
