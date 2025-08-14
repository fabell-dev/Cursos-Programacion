export const cart = localStorage.getItem("cart")  ? JSON.parse(localStorage.getItem("cart")) : [] ;

export function addItem(productId,productName,quantity,productImage,productPrice){
    let matchingItem;

    cart.forEach((item) => {
            if (productId === item.productId) {
            matchingItem = item;
            }
        });

        if (matchingItem) {matchingItem.quantity += quantity;}
        else {cart.push({productId,productName,quantity,productImage,productPrice});}
    }

export function updateQuantity(productId){
    let cartQuantity = 0;

    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });
    document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;

        if(productId.length>1){
        document.querySelector(`.added-${productId}`).style.opacity ="1";
        setTimeout(()=>{
            document.querySelector(`.added-${productId}`).style.opacity ="0";
        },2000);
        }

    
}
