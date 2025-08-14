
//!Arreglos
let arreglo=['posicion1' , 'posicion2'];
console.log(arreglo[1]);

//!Arreglo.length
arreglo[arreglo.length]='arroz'; 
console.log(arreglo);

//!Destructuracion de Arreglos 
const [primervalor,segundovalor]=[0,1]
//?Se crearan dos valores y almacenaran los valores del arreglo con el orden de creacion\
//*primervalor =0
//*segundovalor=1


//!Metodos de los Arreglos

//!ForEach
arreglo.forEach(function(value,index){console.log(index);})
//?El Metodo ForEach recorre el arreglo en su totalidad
//*El (Primer  Valor) nos devolvera siempre el valor del arreglo en esa iteracion
//*El (Segundo Valor )nos devolvera siempre el valor la  posicion de esa iteracion

//?En los ForEach no se puede usar continue pero se puede usar Return con Condicionales para saltarse esa iteracion

//!Filter
[1,2,-5,6].filter((value,index)=>{
    if(value<0){
        return false}
    else {return true
    }

    return value >=0;
    //?Esta linea solo retonara los valores positivos (hace lo mismo que los ifs) 
})
//*Se ultilizaran condiciones para filtrar el arreglo si es true se guarda el valor
//*Si es false se eliminara este valor del arreglo

//!Map
[1,1,3].map((value,index)=>{
    return value+10;
    //?Map remplaza los valores del arreglo por los valores a retornar por lo tanto el nuevo arreglo seria[11,11,13]
});

//!Importante ni Filter ni Map modifican el arreglo original solo crean uno nuevo que se debe retornar o almacenar en una variable


//!Otros

arreglo.push('posicion3');    //*Agrega un elemento al final del arreglo
arreglo.unshift('posicion0'); //*Agrega un elemento al inicio del arreglo
arreglo.pop();                //*Elimina el último elemento del arreglo
arreglo.shift();              //*Elimina el primer elemento del arreglo
arreglo.splice(1, 1);         //*Elimina elementos del Arreglo 
//?El primer valor es la posicion en la que eliminaremos y el segundo cuantos valores elimin a partir de esa posicion

let arregloCopy = arreglo.slice();//*Esto hara que el nuevo arreglo copie los mismos elementos que tiene el segundo 
//?Tambien se les puede pasar uno o dos valores separados por comas
//?Si se le pasa uno indicara desde que posicion se empezara a copiar sin contar esa posicion
//?Si se le pasan 2 sera un rango sin contar la posicion del primer valor

