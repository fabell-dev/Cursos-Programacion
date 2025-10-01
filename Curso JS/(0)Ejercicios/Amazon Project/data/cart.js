export const cart={
    cartP : localStorage.getItem("cart")  ? JSON.parse(localStorage.getItem("cart")) : [] ,

    addItem(cartADD){
    let matchingItem;
    this.cartP.forEach((item) => {
            if (cartADD.productId === item.productId) {
            matchingItem = item;
            }
        });

        if (matchingItem) {matchingItem.quantity += cartADD.quantity;}
        else {this.cartP.push(cartADD);}
    },

    updateQuantity(productId){
        document.querySelector('.js-cart-quantity').innerHTML = this.cartP.length;
    
        //? Esto es solo Estetico
        if(productId.length>1){
        document.querySelector(`.added-${productId}`).style.opacity ="1";
        setTimeout(()=>{
            document.querySelector(`.added-${productId}`).style.opacity ="0";
        },2000);
        }
    },
}
