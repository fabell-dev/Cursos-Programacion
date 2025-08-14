const boton = document.querySelector("button")

const funcionListener=()=>{console.log("A");}
//*Se puede guardar la funcion en una variable para luego poder eliminar el evento

boton.addEventListener('click',funcionListener)
//*Se le Pasan 2 Valores el primero es el evento que va a esperar y el segundo la funcion a ejecutar

boton.removeEventListener('click',funcionListener)
//*Para Borrar un evento se le pasa primero el evento y luego la funcion a eliminar que en este caso es una variable


//!Manejar eventos en JavaScript
//Los eventos son acciones que ocurren en el navegador, como hacer click, presionar una tecla, etc.
//Ejemplo

onkeydown="VerTecla(event)";
//?Esto se usa en HTML para llamar a una funcion cuando se presiona una tecla y se le pasa como parametro event
//?Para saber que tecla se pulso se usa event.key



//!/Distintos tipos de Evento
//Para manejar eventos, se pueden usar los siguientes métodos:

onclick         //*Al hacer un click
onkeydown       //*Al presionar una tecla
onscroll        //*Al desplazar la barra de desplazamiento
onchange        //*Al cambiar el valor de un elemento
onmouseenter    //*Al pasar el mouse por encima
onmouseleave    //*Al quitar el mouse de encima
onfocus         //*Al hacer foco en un elemento
onblur          //*Al quitar el foco de un elemento
onload          //*Al cargar la pagina