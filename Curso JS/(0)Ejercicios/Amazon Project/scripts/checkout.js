import {loadProducts} from '../data/products.js'


  let cartP = JSON.parse(localStorage.getItem("cart"));
  loadProducts(cartP);


  

