export const cart={
    cartP : JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [],
    getFromStorage(){return JSON.parse(localStorage.getItem("cart"))},
    saveToStorage(cart){localStorage.setItem("cart", JSON.stringify(cart))},
    Empty(){if(this.getFromStorage().length===0){return true} else{return false}},

    //?Prices
    getPrice(){
        let priceItems=0;
        this.getFromStorage().forEach((product) => {
            priceItems+=(Number(product.productPrice) * Number(product.quantity));})
        return priceItems;
    },
    getPriceTax(){return this.getPrice() * 0.1},
    getPriceTotalWShipping(){return (this.getPriceTax() + this.getPrice())},

    //?Shipping
    getShipping(){return this.getFromStorage()[0].productShiping},
    
    addItem(ID){
        let matchingItem;
        let quantity =  Number(document.querySelector(`.js-selector-${ID}`).value); 
        let button =document.querySelector(`.js-${ID}`)
        
        this.cartP.forEach((item) => {if (ID === item.productId) matchingItem = item;});
        
        if (matchingItem) {matchingItem.quantity += quantity;}
        else{
            const {productId}    = button.dataset;
            const {productName}  = button.dataset;
            const {productImage} = button.dataset; 
            const {productPrice} = button.dataset;
            const productShiping = 0;
            let cartadd = {productId,productName,quantity,productImage,productPrice,productShiping}
            this.cartP.push(cartadd);}
            
        this.saveToStorage(this.cartP);
        
        //Animacion Estetica
        document.querySelector(`.added-${ID}`).style.opacity ="1";
        setTimeout(()=>{document.querySelector(`.added-${ID}`).style.opacity ="0";},2000);
    },
}