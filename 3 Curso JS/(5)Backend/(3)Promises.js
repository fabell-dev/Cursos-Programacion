//?Las promesas nos dejan controlar el flujo de codigo asincrono 

new Promise((resolve)=>{
    loadStuff(()=>{
        resolve("value1");
    })
}).then((value)=>{
    console.log("arroz");})



function loadStuff(fun){
    for(let i=0;i<10;i++){
        console.log(i);}
    fun();
}

//!Intento de Explicacion
// ?Basicamente a la Promesa se le pasa por parametro la funcion resolve() que se ejecutara luego que se ejecute el codigo principal
//? Luego que resolve se ejecute pasara a la porcion de codigo del then
//?Asi pordemos controlar cuando se ejecuta cada porcion de Codigo
//?La funcion resolve podemos guardarle un valor para luego poder usar con el then

//!Promise All
Promise.all([
    new Promise((resolve)=>{
    loadStuff(()=>{
        resolve();})
    }),
    new Promise((resolve)=>{
    loadStuffNuevas(()=>{
        resolve();})
    }),

]).then(()=>{
    console.log("todo cargo y ahora me ejecuto");
})
//?Promise.all hace que la porcion then solo se ejecute cuando todas las promesas del arreglo se terminan de resolver
//?Si se guardan valores en los resolve en then devolvera un arreglo de los valores de las promesas


//!Promesas dentro de Promesas
new Promise((resolve)=>{
    loadStuff(()=>{
        resolve();
    })

}).then(()=>{
    console.log("arroz");
    return new Promise((resolve)=>{
        loadStuff(()=>{
            resolve()
        })

}).then(()=>{
    console.log("arrocito pillo");
})
})

//?Se usa el retorno de una nueva promesa para trabjarlo todo desde la misma promesa