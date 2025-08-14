//!Funciones 
function funcion(param1,param2){  
    console.log(arguments);  //Accede a todos los argumentos de la funcion
    return param1+param2;}

let suma=funcion(8,7)
console.log(suma);


//!SetTimeout
setTimeout(funcion(),2000);
//*Primer Valor La funcion que vamos a usar
//*Segundo Valor Tiempo en Milisegundos

//!SetInterval
let flag = setInterval(funcion(),3000);
//*En vez de ejecutarlo luego de pasar el tiempo solo una vez lo hace varias veces cada vez que pasa el tiempo
//?Si se guarda la funcion setInterval en una variable luego se le pasa esa variable a clearIntreval para detenerlo

clearInterval(flag);
//?Lo mismo con setTimeout


//!Arrows Functions
let funcion = () =>{
console.log("Sin Parametros");}

let funcion = (param,param2) =>{
    console.log(param+param2);}

let funcion = param =>{
    console.log(param);}
//?Cuando una Arrow Funcion solo tiene un parametro no es necesario los ()

let funcion = () => 2+4; //*No se pone return en funciones de una linea
//?Aqui la funcion devolvera 6 como valor 
