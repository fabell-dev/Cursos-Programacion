//Solo se pueden guardar valores de tipo string por lo que se debe convertir a string el objeto que se quiere guardar
//Para ello se utiliza JSON.stringify() y para recuperar el valor se utiliza JSON.parse()

let persona={
    name: "Juan",
    age: 30,}


//!Guardar Valor en LocaStorage
localStorage.setItem('Persona', JSON.stringify(persona));
//Primer valor con el que lo referenciamos y el segundo el string que devuelve

//!Obtener Valor Guardado en LocalStorage
let personaGuardada = JSON.parse(localStorage.getItem('Persona'));


//!Eliminamos el valor guardado
localStorage.removeItem('Persona'); 

//!Limpiar LocalStorage
localStorage.clear();

console.log(localStorage.keys()); //Devuelve un array con las claves de los valores guardados en localStorage
console.log(localStorage.length); //Devuelve el número de valores guardados en localStorage