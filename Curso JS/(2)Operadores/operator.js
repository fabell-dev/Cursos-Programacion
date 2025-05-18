//-----[Operadores]

//Operadores Nuevos
nombre="Hola2";
console.log(nombre+nombre);  //Se pueden hacer operaciones con strings

num=5;
console.log(num%2);  //Devuelve el resto
console.log(num**3); //Devuelve la potencia

//Operadores de Comparacion
num=5;
console.log(num=="5");   //Se pueden comparar valores aunque no sean del mismo tipo
console.log(num==="5");  //Para comparar que tengan el mismo valor y sean del mismo tipo se usa triple igualdad
console.log(num!=="5");  //Lo mismo para la desigualdad

//Operadores Logicos
console.log(true && true);     // [AND]
console.log(false  || true);  //[Or]
console.log(!false);          //[Negacion]  

//Operadores BitWise

console.log(1 | 2);//Operador Biwise Or
console.log(1 & 2);//Operador Biwise And


/*
Se usan & y | solo con uno no con 2
Los opradores biwise convierten los numero a bits y los compararan y crean una nueva cadena

El operador de biwise And (&) solo escribe 1 cuando en la misma posicion los 2 numeros tienen [1]
El operador de biwise Or (&) solo escribe 1 cuando en la misma posicion los 2 al menos 1 tiene [1]
*/

//Operador Ternario

let edad=25;
let acceder= edad>16 ? 'Puedes Pasar' : 'No puedes pasar '
//Se ponen las 2 posibles respuestas primero la que se dara en caso de que sea True y luego la que se dara en caso de False

