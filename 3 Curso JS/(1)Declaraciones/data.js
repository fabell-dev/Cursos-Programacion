
//!En el HTML generado 
` <div class="Tusae" data-name ="${product.name}" ></div> `
//?Siempre debe empezar con data-  (data-[luego el nombre que queremos])Hay que usar kebabcase en los espacios


//!En JS
let button = document.getElementById('Arroz')

button.dataset;
//*Aqui nos devolvera un arreglo de todas las propiedades que haya guardadadas 

button.dataset.Name;
//?Para acceder a ellas se usa CamelCase por alguna razon que desconozco
