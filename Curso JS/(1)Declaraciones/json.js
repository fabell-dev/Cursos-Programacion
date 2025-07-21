//!Metodos de Json

let objeto={
    name:"Fabian",
    age: 22,
}

//!Convertir de Objeto a Json
let varjson = JSON.stringify(objeto); //Convierte el objeto a un string Json
console.log(varjson); //Esto devolvera un String en Formato JSON

//!Convertir de Json a Objeto
let varjson2 = JSON.parse(varjson); //Convierte el string Json a un objeto
console.log(varjson2); //Esto devolvera un objeto



