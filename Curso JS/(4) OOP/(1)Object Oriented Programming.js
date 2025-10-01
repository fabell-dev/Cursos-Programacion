//?Es un paradigma de progrmacion que hace que el codigo sea mas facil de generar y mas intuitivo
//*La idea es crear todo lo relaciona con una funcionalidad adentro de un objeto y usar funciones como metodos

//!Ejemplo:

//1ra Propiedad (Arreglo de Objetos)
const cart ={
    cartItems:[{
        name:"arroz",
        id:858585,
        price:2590,
        rating:5
    },
    {
        name:"arroz2",
        id:585858,
        price:9025,
        rating:4
    }
],

//2da Propiedad (Metodo)
addItem(id){
    this.cartItems.forEach((product,index) => {
        if(this.cartItems[index].id===id){
            console.log(`Se agrego el Objeto: "${this.cartItems[0].name}"`);}
        })
},
    
//3ra Propiedad (Metodo)
removeItem(id){
    this.cartItems.forEach((product,index) => {
        if(this.cartItems[index].id===id){
            console.log(`Se Elimino el Objeto: "${this.cartItems[0].name}"`);}
        })
},
}

//! Prueba console.log(cart.removeItem(585858));

//El this adentro del objeto hace referencia al objeto padre en este caso cart
//Osea this.cartItems === cart.cartItems