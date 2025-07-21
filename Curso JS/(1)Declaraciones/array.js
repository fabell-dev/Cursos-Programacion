
//!Arreglos
let arreglo=['posicion1' , 'posicion2'];
console.log(arreglo[1]);

//!Arreglo.length
arreglo[arreglo.length]='arroz'; 
console.log(arreglo);


//!Metodos de los Arreglos

arreglo.push('posicion3');    //*Agrega un elemento al final del arreglo
arreglo.unshift('posicion0'); //*Agrega un elemento al inicio del arreglo
arreglo.pop();                //*Elimina el último elemento del arreglo
arreglo.shift();              //*Elimina el primer elemento del arreglo
arreglo.splice(1, 1);         //*Elimina elementos del Arreglo 
//?El primer valor es la posicion en la que eliminaremos y el segundo cuantos valores elimin a partir de esa posicion
