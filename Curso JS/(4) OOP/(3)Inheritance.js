
//!Super
class Clothing extends Poduct{
    constructor(){
        super();
    }
}
//?En el Constructor de una clase que hereda si usamos super ejecutara el constructor de la Clase Padre
//?El Metodo Super tambien se puede usar para llamar a cualquier metodo de la clase padre 
//*Super.getPrice();


//!Uso de Polimorfismo
//?Buenas practicas al trabajar con clases y herencia es el uso del Polimorfismo donde declaramos una primera version de un metodo en la clase padre y luego sobreescribimimos el mismo metodo en la clase heredada

class Product {
    gePprice(){console.log("precio de un producto");}
}
class Clothing extends Product{
    getPrice(){console.log("precio de un producto de --ROPA--");}
}

//?Ahora al llamar al Metodo getPrice de la Clase producto retornara un valor distinto depende a que clase pertenezca