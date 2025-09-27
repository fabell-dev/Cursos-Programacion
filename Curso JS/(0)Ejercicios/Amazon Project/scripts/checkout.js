
  let cartP = JSON.parse(localStorage.getItem("cart"));
  loadPage(cartP)
    

  function loadHeader(cartP){
    if(cartP.length===0){
      document.querySelector('main').classList.remove('main-full-cart')
      document.querySelector('main').classList.add('main-empty-cart')
      document.querySelector('main').innerHTML=`<a href="amazon.html" class="link-empty-cart">Buy Some Items</a>`
    }
    else{document.querySelector('main').classList.add('main-full-cart')}

    document.querySelector('.return-to-home-link').innerHTML = `${cartP.length} items`;
  }


  function loadCartProducts(cartP){
  let orderP = ``;

cartP.forEach((product,index) => {
orderP += `
    <div class="cart-item-container">

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${product.productImage}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${product.productName}
                </div>
                <div class="product-price">
                  $${((product.productPrice/100)*product.quantity).toFixed(2) }
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <input type="number" class="quantity-label quantity-label-${product.productId}" value="${product.quantity}"></input>
                  </span>
                  <button class="link-${product.productId} update-quantity-link link-primary" data-product-id="${product.productId}">
                    Update
                  </button>
                  <button class="delete-quantity-link link-primary" data-product-id="${product.productId}">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          
`;

});
document.querySelector(".order-summary").innerHTML = orderP;

  document.querySelectorAll('.delete-quantity-link')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId 

        cartP.forEach((value,index)=>{
          if(value.productId===productId){cartP.splice(index,1)}
        })
        
        localStorage.setItem("cart",JSON.stringify(cartP));
        cartP = JSON.parse(localStorage.getItem("cart"));
        loadPage(cartP);
        
      });
    }
  );
  document.querySelectorAll('.update-quantity-link')
    .forEach((button,index) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId 
        let quantity =  Number(document.querySelector(`.quantity-label-${productId}`).value)
        
        cartP[index].quantity =quantity;
        if(quantity===0){cartP.splice(index,1)}
        localStorage.setItem("cart",JSON.stringify(cartP));
        loadPage(cartP);
      });
    }
  );

  }


  function loadPayment(cartP){
    let paymP  = ``;
    let shipping = loadShipping(); // !ojo

    //?Price
  let priceItems=0;
  let Tax=0;
  let priceItemsWTax=0;


  cartP.forEach((product,index) => {
    priceItems+=(Number(cartP[index].productPrice) * Number(cartP[index].quantity));

    if(cartP.length-1===index){
  paymP+=`
  <div class="payment-summary">
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartP.length}):</div>
            <div class="payment-summary-money">$ ${(priceItems/100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$ ${(Tax/100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before shipping:</div>
            <div class="payment-summary-money">$ ${((Tax/100)+(priceItems/100)).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$ ${shipping}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$ ${((Tax/100)+(priceItems/100)+shipping).toFixed(2)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>
  `
}

  })

  //?Matematicas
  Tax = priceItems*0.1;            //Valor de el impuesto
  priceItemsWTax = priceItems+Tax; //Valor con Impuesto

  document.querySelector(".payment-summary").innerHTML = paymP;
  }

  function loadShipping(cartP){
  let shiP =``;
  
    //?Shipping
  let flag1 = "";
  let flag2 = "";
  let flag3 = "";
  let shipping =  JSON.parse(localStorage.getItem("shipping"))
  if(     shipping === 0)   {flag1='checked'}
  else if(shipping === 4.99){flag2='checked'}
  else if(shipping === 9.99){flag3='checked'}


  shiP=`<div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" ${flag1}
                    class="delivery-option-input"
                    name="delivery-option-1" value ="1">
                  <div>
                    <div class="delivery-option-date">
                      ${dayjs().add(7,"days").format('dddd, MMMM, D')}
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" ${flag2}
                    class="delivery-option-input"
                    name="delivery-option-1" value ="2">
                  <div>
                    <div class="delivery-option-date">
                    ${dayjs().add(3,"days").format('dddd, MMMM, D')}
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" ${flag3}
                    class="delivery-option-input"
                    name="delivery-option-1" value ="3">
                  <div>
                    <div class="delivery-option-date">
                      ${dayjs().add(1,"days").format('dddd, MMMM, D')}
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
        </div>`

  document.querySelector(".delivery-options").innerHTML = shiP;

  document.querySelectorAll('.delivery-option-input')
    .forEach((button) => {
      button.addEventListener('click', () => {
        let value = button.value;
        let shipping = 0;

        if(value ==='1'){shipping=0}
        else if(value === '2'){shipping = 4.99}
        else if(value === '3'){shipping = 9.99}
        
        localStorage.setItem("shipping",(shipping))    
        loadPage(cartP);

      });
    }
  );
  
  return shipping;
  

  }


  function loadPage(cartP) {
  loadHeader(cartP)
  loadCartProducts(cartP);
  loadPayment(cartP);
  loadShipping();
  }
  

  
