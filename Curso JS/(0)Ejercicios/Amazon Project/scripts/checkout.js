import {cart} from '../data/cart.js'
  
let cartP = localStorage.getItem("cart")  ? cart.getFromStorage() : [];
loadPage(cartP);


function loadHeader(cartP){
  if(cart.Empty()){
    document.querySelector('main').classList.remove('main-full-cart')
    document.querySelector('main').classList.add('main-empty-cart')
    document.querySelector('main').innerHTML=`<a href="amazon.html" class="link-empty-cart">Buy Some Items</a>`}
  else{document.querySelector('main').classList.add('main-full-cart')}

  document.querySelector('.return-to-home-link').innerHTML = `${cartP.length} items`;
  }


function loadCartProducts(cartP){
  let orderP = ``;
  cartP.forEach((product) => {
    orderP += `
      <div class="cart-item-container">
        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${product.productImage}"
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
      </div>`;
    });
  document.querySelector(".order-summary").innerHTML = orderP;

  document.querySelectorAll('.delete-quantity-link')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId 
      cartP.forEach((value,index)=>{if(value.productId===productId){cartP.splice(index,1)}})
        
      cart.saveToStorage(cartP)
      loadPage(cartP)
    });});

  document.querySelectorAll('.update-quantity-link')
    .forEach((button,index) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId 
        let quantity =  Number(document.querySelector(`.quantity-label-${productId}`).value)
        cartP[index].quantity = quantity;
        if(quantity<=0){cartP.splice(index,1)}

        cart.saveToStorage(cartP)
        loadPage(cartP) 
      });});
  }


function loadPayment(cartP){
  let paymP   = ``;
  let payment = {
    pItems    : Number((cart.getPrice()/100).toFixed(2)),
    pTax      : Number((cart.getPriceTax()/100).toFixed(2)),
    pTotal    : Number((cart.getPriceTotalWShipping()/100).toFixed(2)),
    pshipping : cart.getShipping()
  };
  let paymentTotalWShipping=(payment.pTotal+payment.pshipping).toFixed(2);

  paymP+=`
    <div class="payment-summary-title">
      Order Summary
    </div>
    <div class="payment-summary-row">
      <div>Items (${cartP.length}):</div>
      <div class="payment-summary-money">$ ${payment.pItems}</div>
    </div>
    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$ ${payment.pTax}</div>
    </div>
    <div class="payment-summary-row subtotal-row">
      <div>Total before shipping:</div>
      <div class="payment-summary-money">$ ${payment.pTotal}</div>
    </div>
    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$ ${payment.pshipping}</div>
    </div>
    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$ ${paymentTotalWShipping}</div>
    </div>
    <button class="place-order-button button-primary">
      Place your order
    </button>`

  document.querySelector(".payment-summary").innerHTML = paymP;
}


function loadShipping(cartP){
  let shiP =``;
  
  //?Shipping
  let flag1 = "",flag2 = "",flag3 = "";
  let shipping = cart.getShipping();
  
  if     (shipping === 0)   {flag1='checked'}
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
        let valueShipping=0;
        if     (value === '1'){valueShipping = 0} else if(value === '2'){valueShipping = 4.99}
        else if(value === '3'){valueShipping = 9.99}
        
        cartP.forEach((product) => {product.productShiping = valueShipping});
        cart.saveToStorage(cartP)
        loadPage(cartP);
  });});
}


function loadPage(cartP) {
  loadHeader(cartP)
  if(cartP.length>0){
      loadCartProducts(cartP);
      loadPayment(cartP);
      loadShipping(cartP);
    }  
  }