
export {getProducts, addToCar};

let productsData;
const getProducts=(data)=>{productsData=data}

const addToCar=(id_product)=>{
  let productSelected=productsData.find(e=>e.id==id_product);
  
  console.log(productSelected)
  
  // let productsData= await fetchProducts();
 
}
// console.log(productsData)