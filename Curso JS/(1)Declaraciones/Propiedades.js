
//?Propiedades Bulit In

//!String

console.log("Hello".length); //Cuenta la cantidad de caracteres del string y retorna ese valor 
console.log("Hello".toUpperCase()); //Convierte el string a mayusculas y retorna el nuevo string
console.log("Hello".toLowerCase()); //Convierte el string a minusculas y retorna el nuevo string
console.log("Hello".indexOf("e")); //Retorna la posicion del caracter dentro del string, si no lo encuentra retorna -1
console.log("Hello".slice(1, 4)); //Retorna un nuevo string desde la posicion 1 hasta la 4 (sin incluir la 4), si no se pone el segundo parametro, retorna desde la posicion 1 hasta el final del string
console.log("Hello".replace("e", "a")); //Reemplaza el primer caracter encontrado por el segundo caracter y retorna el nuevo string
console.log("Hello".split("l")); //Divide el string en un array de strings, usando el caracter que se le pasa como parametro, si no se pone nada, divide por espacios
console.log("Hello".trim()); //Elimina los espacios al principio y al final del string 
console.log("Hello".charAt(1)); //Retorna el caracter en la posicion 1 del string, si no existe retorna un string vacio
console.log("Hello".includes("e")); //Retorna true si el caracter se encuentra en el string, false si no se encuentra
console.log("Hello".startsWith("H")); //Retorna true si el string empieza con el caracter que se le pasa como parametro, false si no
console.log("Hello".endsWith("o")); //Retorna true si el string termina con el caracter que se le pasa como parametro, false si no
console.log("Hello".repeat(3)); //Retorna el string repetido la cantidad de veces que se le pasa como parametro
console.log("Hello".search("e")); //Retorna la posicion del primer caracter encontrado, si no lo encuentra retorna -1
console.log("Hello".match(/l/g)); //Retorna un array con todos los caracteres encontrados, si no encuentra ninguno retorna null
console.log("Hello".concat(" World")); //Concatena el string con el string que se le pasa como parametro y retorna el nuevo string
console.log("Hello".padStart(10, " ")); //Rellena el string con espacios al principio hasta que tenga la longitud que se le pasa como parametro, si no se pone el segundo parametro, rellena con espacios
console.log("Hello".padEnd(10, " ")); //Rellena el string con espacios al final hasta que tenga la longitud que se le pasa como parametro, si no se pone el segundo parametro, rellena con espacios
console.log("Hello".localeCompare("Hello")); //Compara dos strings y retorna 0 si son iguales, -1 si el primer string es menor que el segundo, 1 si el primer string es mayor que el segundo



//!Array

console.log([1, 2, 3].length); //Cuenta la cantidad de elementos del array y retorna ese valor
console.log([1, 2, 3].toString()); //Convierte el array a un string y retorna el nuevo string
console.log([1, 2, 3].join(", ")); //Convierte el array a un string, uniendo los elementos con el caracter que se le pasa como parametro y retorna el nuevo string
console.log([1, 2, 3].indexOf(2)); //Retorna la posicion del elemento dentro del array, si no lo encuentra retorna -1
console.log([1, 2, 3].slice(1, 2)); //Retorna un nuevo array desde la posicion 1 hasta la 2 (sin incluir la 2), si no se pone el segundo parametro, retorna desde la posicion 1 hasta el final del array
console.log([1, 2, 3].splice(1, 1)); //Elimina el elemento en la posicion 1 del array y retorna un nuevo array con el elemento eliminado, si no se pone el segundo parametro, elimina todos los elementos desde la posicion 1 hasta el final del array
console.log([1, 2, 3].push(4)); //Agrega el elemento al final del array y retorna la nueva longitud del array
console.log([1, 2, 3].pop()); //Elimina el ultimo elemento del array y retorna el elemento eliminado
console.log([1, 2, 3].shift()); //Elimina el primer elemento del array y retorna el elemento eliminado
console.log([1, 2, 3].unshift(0)); //Agrega el elemento al principio del array y retorna la nueva longitud del array
console.log([1, 2, 3].reverse()); //Invierte el orden de los elementos del array y retorna el nuevo array
console.log([1, 2, 3].sort()); //Ordena los elementos del array y retorna el nuevo array, si son numeros los ordena de menor a mayor, si son strings los ordena alfabeticamente
console.log([1, 2, 3].filter(x => x > 1)); //Retorna un nuevo array con los elementos que cumplan la condicion que se le pasa como parametro
console.log([1, 2, 3].map(x => x * 2)); //Retorna un nuevo array con los elementos modificados por la funcion que se le pasa como parametro
console.log([1, 2, 3].reduce((a, b) => a + b, 0)); //Retorna un solo valor, el resultado de aplicar la funcion que se le pasa como parametro a todos los elementos del array, el segundo parametro es el valor inicial
console.log([1, 2, 3].find(x => x > 1)); //Retorna el primer elemento que cumpla la condicion que se le pasa como parametro, si no encuentra ninguno retorna undefined
console.log([1, 2, 3].every(x => x > 0)); //Retorna true si todos los elementos del array cumplen la condicion que se le pasa como parametro, si no, retorna false 
console.log([1, 2, 3].some(x => x > 2)); //Retorna true si al menos un elemento del array cumple la condicion que se le pasa como parametro, si no, retorna false
console.log([1, 2, 3].includes(2)); //Retorna true si el elemento se encuentra en el array, false si no se encuentra
console.log([1, 2, 3].findIndex(x => x > 1)); //Retorna la posicion del primer elemento que cumpla la condicion que se le pasa como parametro, si no encuentra ninguno retorna -1
console.log([1, 2, 3].flat()); //Aplana el array 



//!Object 

console.log(Object.keys(objeto)); //Retorna un array con las claves del objeto
console.log(Object.values(objeto)); //Retorna un array con los valores del objeto
console.log(Object.entries(objeto)); //Retorna un array de arrays, donde cada array contiene una clave y su valor
console.log(Object.assign({}, objeto, objeto_2)); //Crea un nuevo objeto con las propiedades de los objetos que se le pasan como parametros, si hay propiedades repetidas, se queda con la ultima
console.log(Object.freeze(objeto)); //Congela el objeto, impidiendo que se puedan modificar
console.log(Object.seal(objeto)); //Sella el objeto, impidiendo que se puedan agregar o eliminar propiedades, pero se pueden modificar las propiedades existentes
console.log(Object.getOwnPropertyDescriptor(objeto, "nombre")); //Retorna un objeto con la descripcion de la propiedad del objeto, incluyendo si es enumerable, configurable y writable
console.log(Object.getOwnPropertyNames(objeto)); //Retorna un array con los nombres de las propiedades del objeto, incluyendo las no enumerables
console.log(Object.getPrototypeOf(objeto)); //Retorna el prototipo del objeto
console.log(Object.is(objeto, objeto_2)); //Retorna true si los objetos son el mismo objeto, false si no lo son
console.log(Object.create(objeto)); //Crea un nuevo objeto con el prototipo del objeto