
//!Funciones 
function funcion(param1,param2){  
    console.log(arguments);  //Accede a todos los argumentos de la funcion
    return param1+param2;}

let suma=funcion(8,7)
console.log(suma);


setTimeout(funcion(),2000);
//*Primer Valor La funcion que vamos a usar
//*Segundo Valor Tiempo en Milisegundos

let flag = setInterval(funcion(),3000);
//*En vez de ejecutarlo luego de pasar el tiempo solo una vez lo hace varias veces cada vez que pasa el tiempo
//?Si se guarda la funcion setInterval en una variable luego se le pasa esa variable a clearIntreval para detenerlo

clearInterval(flag);
//?Lo mismo con setTimeout