import {loadProducts,loadHeader} from '../data/products.js'


  let cartP = JSON.parse(localStorage.getItem("cart"));
  loadPage(cartP)

  function  loadPage(cartP) {

  loadProducts(cartP);
  loadHeader(cartP)
  }
  
