//?Para generar mas objetos con propiedades compartidas se usan Clases

class Cart {

    cartItems=[{
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
]

//2da Propiedad (Metodo)
addItem(id){
    this.cartItems.forEach((product,index) => {
        if(this.cartItems[index].id===id){
            console.log(`Se agrego el Objeto: "${this.cartItems[0].name}"`);}
        })
}
    
//3ra Propiedad (Metodo)
removeItem(id){
    this.cartItems.forEach((product,index) => {
        if(this.cartItems[index].id===id){
            console.log(`Se Elimino el Objeto: "${this.cartItems[0].name}"`);}
        })
}

}
//*En las clases se usa = y no se usa , 

//!Crear Objetos a partir de Clases
let cartBuisness = new Cart();
cartBuisness.cartItems[0].name="arrocito"

//*Prueba console.log(cartBuisness.cartItems[0].name);

//?Checkear si un objeto es una instancia de una Clase 
//?nombreObjetoIntanciado instanceof nombreDeClase

//*Prueba console.log(cartBuisness instanceof Cart);

//!Contructor
//Metodo que se ejecutara cuando se cree el objeto y que nos permite pasar parametros en la creacion del Ojeto

class CartConstruida{
    constructor (parameter){console.log(`Logeo de: ${parameter}`);}
}
const cartConsruida = new CartConstruida("algo")

//?Esto es muy util para setup los objetos automaticamente sin tener que repetir codigo

//!Private Methods  
//Delante de los metodos o datos que se quieren hacer privados se pone delante (#)
//Y ahora solo se podra usar dentro de la Clase y para usarlo detro tambien se tendra que poner (#)