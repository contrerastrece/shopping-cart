import {getProducts} from './addToCar.js';

const $product = document.getElementById("productos");

const fragment = document.createDocumentFragment();
const $template = document.getElementById("template").content;

export const fetchProducts=async ()=>{
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();   
    // console.log(data)
    data.forEach((e) => {
      $template.querySelector(".card").dataset.id = `${e.id}`;
      $template.querySelector("button").dataset.id = `${e.id}`;

      $template.querySelector("img").setAttribute("src", `${e.image}`);
      $template.querySelector("img").setAttribute("alt", `${e.title}`);
      $template.querySelector("img").setAttribute("title", `${e.title}`);

      $template.querySelector("h5").textContent = `$ ${e.price}`;

      $template.querySelector(".card-description").textContent = `${e.title}`;

      let clone = document.importNode($template, true);

      fragment.appendChild(clone);
    });

    $product.appendChild(fragment);

    getProducts(data);

    // return data;
  } catch (error) {
    console.log(error);
  }
}
