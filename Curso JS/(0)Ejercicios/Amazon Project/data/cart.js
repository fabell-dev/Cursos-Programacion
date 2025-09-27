export const cart = localStorage.getItem("cart")  ? JSON.parse(localStorage.getItem("cart")) : [] ;

export function addItem(productId,productName,quantity,productImage,productPrice,productShiping){
    let matchingItem;
    cart.forEach((item) => {
            if (productId === item.productId) {
            matchingItem = item;
            }
        });

        if (matchingItem) {matchingItem.quantity += quantity;}
        else {cart.push({productId,productName,quantity,productImage,productPrice,productShiping});}
    }



export function updateQuantity(productId){
    let cartQuantity = cart.length;
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    //? Esto es solo Estetico

        if(productId.length>1){
        document.querySelector(`.added-${productId}`).style.opacity ="1";
        setTimeout(()=>{
            document.querySelector(`.added-${productId}`).style.opacity ="0";
        },2000);
        }
}
