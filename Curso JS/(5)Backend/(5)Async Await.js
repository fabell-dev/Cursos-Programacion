//!---Async---
async function loadStuff(){
    console.log("Cargue Cositas");
    return "valueCositas"}

loadStuff().then((value)=>{
    console.log(`Despues de Cargar Cositas me Canse y termine: ${value}`);
})
//? - Poniendole delante a una funcion async la convierte en una promesa y el valor que se retorne podra ser usado si se pasa por parametro a su bloque then((value)=>{})


//!---Await---
async function loadStuff(){
    console.log("Cargue Cositas");
    
    await new Promise((resolve)=>{
    loadNumber(()=>{
        resolve();})
    }).then(()=>{
        console.log("arroz");})

    console.log("Termine");
}

function loadNumber(fun){console.log("1"); return fun();}
loadStuff();
//? - Solo se puede usar dentro de un bloque de funcion async y lo que hace es que esperara a que la funcion que tiene delante el await termine para seguir ejecutando el codigo
//? - Solo hara su funcion si la funcion que le ponemos delante es una promesa un fetch que es lo mismo
//? - Es un shortcut de las promesas y los then para esperar a que se carguen los datos de las petciciones 


async function loadStuff(){
    console.log("Cargue Cositas");
    
    const value = await new Promise((resolve)=>{
    loadNumber(()=>{
        resolve("valor a pasar ");})
    })

    console.log(value);
}

function loadNumber(fun){console.log("1"); return fun();}
loadStuff();
//!Para retornar valores con funciones Await no se hace como seria normalmente pasandole el valor a resolve y luego usando un parametro en la funcion de bloque then
//!En vez de eso se guarda la promesa en una variable y el valor que le pasemos a resolve se guardara en esa variable