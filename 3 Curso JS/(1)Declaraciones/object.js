
//!Declarando Objeto
let objeto = {
    nombre :"Mayonesa",
    sexo   :"Masculino",
    tiempo:6,
    object:{
        propiedad1: "Valor1",
        propiedad2: "Valor2"
    },   //*Por alguna razon alguien penso que era buena idea crear objetos dentro de objetos
         //*Se accederia asi objeto.object.propiedad1 --HUH--

    
    funcion: function funcionEjemplo() {
        console.log("Hola, soy una funcion dentro de un objeto");},
        //*Modo Base
    metodo2:() =>{
        console.log("a");},
        //*Modo Flecha
        
    metodo3(){
        console.log("a");}
        //*Shorthand BEST OPTION

}

    

console.log(objeto)
console.log(objeto.nombre)    //*Primera forma
console.log(objeto['nombre']) //*Se usa [] y la propiedad entre comillas simples
                              //*Esto se usa para usar variables al llamar atributos

//!Creando Atributos
objeto.tiemponuevo = 14;

//!Modificando atributos
objeto.tiemponuevo = 7;

let variable ='tiemponuevo';
//*Se puede crear una variable con el nombre de un atributo para luego usar llamando al objeto

console.log(objeto[variable]); //?Retorna "7" //Es como si pusiera Console.log(objeto.tiemponuevo)


//!Borrando Atributos
delete objeto.sexo;
console.log(objeto.sexo); //?Retorna undifined



//!Shortcuts

//!Desestructuracion
const {nombre, tiempo} = objeto;
//*Desestructuracion de objetos, se crean dos variable con el nombre del atributo y se le asigna el valor del atributo

//!Crear Funciones dentro de objetos(Metodos)
const test={
    method : function funcion1(){
        console.log("LONG Way");
    },
    method2(){
        console.log("short way");
    }
};

    //!Datos
//?Usar const al crear objetos no significa que no se puedan modificar sus atributos, significa que no se puede reasignar el objeto a una nueva variable por lo tanto se podran modificar sus propiedades igualmente
