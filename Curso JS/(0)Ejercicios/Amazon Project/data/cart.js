export const cart={
    cartP : localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    saveToStorage(){localStorage.setItem("cart", JSON.stringify(this.cartP))},

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
            
        this.saveToStorage();
        
        //Animacion Estetica
        document.querySelector(`.added-${ID}`).style.opacity ="1";
        setTimeout(()=>{document.querySelector(`.added-${ID}`).style.opacity ="0";},2000);
    },
}
