//!XHR
const xhr = new XMLHttpRequest();
xhr.addEventListener('load',()=>{console.log(xhr.response);});
xhr.addEventListener('error',(error)=>{console.log(error);}); //!Error
xhr.open('GET','https://supersimplebackend.dev/products');
xhr.send();
//?Se Crea una callback aparte que esperara por otro evento y ejecutara otra porcion de codigo
//?Se debe trabajar con el parametro error que se le pasa

//!Promises
new Promise((resolve)=>{
    loadStuff(()=>{
        resolve("value1");})
})
    .then((value)=>{
    console.log("arroz");})
    .catch((error)=>{
        console.log(error);
    })
//?En las promesas se utiliza un bloque parecido a then Catch que se ejecutara si da error la promesa
//?Tambien se le pasa por parametro error para tratarlo

//!Async Await 

async function loadStuff(){
    try{
        await new Promise((resolve)=>{
            loadNumber(()=>{
                resolve();})
            }).then(()=>{
                console.log("arroz");})
    }    
    catch(erorr){
        console.log(error);
    }
    console.log("arroz");
}

//?Se usan los bloques Try y Catch para tratar errores
//?En el bloque try se pone el codigo que puede dar errores generalmente promesas y fetch que estarian en await
//?En el bloque catch se captura el error como parametro y se ejecuta una porcion de codigo 
//?Si se detecta un error el codigo que este luego de los bloques TRY y CATCH no se ejecutara tambien incluido el codigo que le seguia a las lineas donde se detecto el error en el bloque TRY

//!Se pueden crear errores para controlar el flujo de la siguiente forma
async function loadStuff(){
    try{
        throw 'error404';

        await new Promise((resolve)=>{
            loadNumber(()=>{
                resolve();})
            }).then(()=>{
                console.log("arroz");})
    }    
    catch(erorr){
        console.log(error);
    }
    console.log("arroz");
}
//?Al lanzar un Throw se skipeara todo lo siguiente de codigo y ira directo al catch
//?Podemos usar esto para hacer validaciones en nuestro codigo

//!Throw errors en Promesas

await new Promise((resolve)=>{
    throw "error404"
    loadNumber(()=>{
        resolve();})
    }).then(()=>{
        console.log("arroz");})
//?Se usa throw para crear un error antes de completar la promesa

await new Promise((resolve,reject)=>{
    loadNumber(()=>{
        reject("error404"); //!
        resolve();})
    }).then(()=>{
        console.log("arroz");})

//?Se usa un segundo parametro en la promesa Reject para ejecutarlo despues que la promesa cargo sus datos y hacer validaciones
//!Si la promesa es Await y se lanza un error se ira directo al bloque catch de la funcion Async