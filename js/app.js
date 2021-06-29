const $product=document.getElementById("productos");

const fragment = document.createDocumentFragment();
const $template=document.getElementById("template").content;

async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data=await response.json();

  console.log(data)
  data.forEach((e)=>{

   $template.querySelector("img").setAttribute("src",`${e.image}`);
   $template.querySelector("img").setAttribute("alt",`${e.title}`);

   $template.querySelector("h5").textContent=`$ ${e.price}`;

   let clone=document.importNode($template,true);

   fragment.appendChild(clone);
  })

  $product.appendChild(fragment);
}
fetchProducts();


