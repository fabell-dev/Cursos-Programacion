
//---Declarando Objeto
let objeto = {
    nombre :"Mayonesa",
    sexo:   "Masculino",
    tiempo:6,
}
let objeto_2 = {nombre:"Arroz",tiempo:9}

console.log(objeto)
console.log(objeto_2.nombre)    //Primera forma
console.log(objeto_2['nombre']) //se usa [] y la propiedad entre comillas simples

//Modificando
objeto.tiempo = 7;

let variable ='sexo';       //Se puede crear una variable con el nombre de un atributo para luego usar llamando al objeto
console.log(objeto['sexo']);

//Borrando Atributos
delete objeto.sexo;
console.log(objeto.sexo); //Retorna undifined