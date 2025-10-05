//!Post
// fetch('https://supersimplebackend.dev/products',{
//     method : 'Post',
//     headers: {
//         'Content-Type': 'apication/json'
//     },
//     body: JSON.stringify({
//         name:Fabian,
//         age :20 })
// })

// //?Default hace una peticion GET
// //?Response por defecto retornara mucha informacion relacionada con la peticion la mas importante casi siempre es response.json o response.status
// //!Cuando hacemos una peticion GET por lo general esperamos una respuesta en json y usariamos response.json pero esto se devuelve como una promesa

// //!---Response.json---
// fetch('https://supersimplebackend.dev/products')
//     .then((response)=>{
//         return response.json();
// })
//     .then((json_response)=>{
//         console.log(json_response[0]);
// })

// //?Al ser una promesa debemos trabajar con ella y esperar a que se comlete sino no recibiremos nada
// //?Debemos en el then de el fetch return la Promesa response.json() que tiene forma de funcion y luego en el bloque then de esta segunda promesa el parametro de esta sera la respuesta json y podremos trabajar con ella

// //?Una buena forma de trabajar con fetch es la siguiente

// function loadFetch(){
//     const promise =
//         fetch('https://supersimplebackend.dev/products')
//             .then((response)=>{
//                 return response.json();})

//             .then((json_response)=>{
//                 console.log(json_response[0]);})

//     return promise
// }

// loadFetch().then(()=>{
//     console.log("Espere a que terminara la promesa y luego ejecute esta porcion");
// })
