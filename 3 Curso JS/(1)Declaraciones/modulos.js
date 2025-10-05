//!Aal declarar el Script en el HTML se le pone el tipo modulo
//? <script type="module" src="../module.js"></script>


//?El tipo modulo no necesariamente se tiene que especificar en todos los archivos solo en los que van a importar
//?Por ejemplo tenemos dos Js con Informacion y uno que la controla (information.js , information2.js) y  (control.js) En el HTML solo cargamos: 
//* <script type="module" src="control.js"> </script>
//?Y dentro de control importamos lo necesario

//!Luego las variables o funciones que se quieran acceder del Modulo hay que exportarlas en su Script Js
export let variable=0;
export function funcion(){console.log("7");
}

//!Luego Se importa en el Script que se vaya a usar 
import {variable as variablenew} from '../module.js'
import {variable , funcion} from '../module.js'

//?Dentro de las llaves primero el nombre de la variable que se va a importar
//?Si no se usa (as) el nombre con el que la refernciemos sera el mismo que con el que se creo
//?Luego de donde la vamos a importar encerrado con comillas simples el directorio ''


//------------------
//!Hay otra forma de importar todos los elementos que se estan exportando de un archivo
import * as objeto from '../module.js'

//?De esta forma se guardaran todos los elementos en un objeto y se accederan como propiedades o metodos
//*objeto.variable
//*objeto.funcion()


//?El orden en que se importan los scripts modulos no importa 
