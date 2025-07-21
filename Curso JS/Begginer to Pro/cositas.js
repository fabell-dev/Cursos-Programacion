//* Al trabajar con dinero en centavos se recomienda sumar los centavos y luego dividirlo entre 100 para mayor fiabilidad
//  (2851 + 1890)/100

//!Concatenacion
var x='Arroz' +' '+10+' '+'Azucar';

//!Interpolacion ${Insertar}
var y=`Arroz ${10} ${'Azucar'}`
//Se usan comillas invertidas ` para interpolacion

console.log(x);
console.log(y);

//!Sacar valores de un input
const valor =input.value; //Asumimos que tenemos un input con id="input"
//Esto devolverá un String 
//Para Convertirlo hay que usar una funcion Number

console.log((Number(valor)+10));


//!Manejando clases al ejecutar eventos
h1.classList.add('Agregando una clase');
h1.classList.remove('Removiendo una clase');


//!Manejar eventos en JavaScript
//Los eventos son acciones que ocurren en el navegador, como hacer click, presionar una tecla, etc.
//Ejemplo

onkeydown="VerTecla(event)"; //Esto se usa en HTML para llamar a una funcion cuando se presiona una tecla



//Para manejar eventos, se pueden usar los siguientes métodos:
//Distintos tipos de Evento

onclick         //*Al hacer un click
onkeydown       //*Al presionar una tecla
onscroll        //*Al desplazar la barra de desplazamiento
onchange        //*Al cambiar el valor de un elemento
onmouseenter    //*Al pasar el mouse por encima
onmouseleave    //*Al quitar el mouse de encima
onfocus         //*Al hacer foco en un elemento
onblur          //*Al quitar el foco de un elemento
onload          //*Al cargar la pagina



//Esto es Un comentario
//* Esto es Un comentario
//! Esto es Un comentario
//? Esto es Un comentario
//Todo: Esto es Un comentario
