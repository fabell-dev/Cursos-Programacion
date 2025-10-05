
//Sirve para iterar las propiedades de un Objeto

let user={name:'Alejandro',age:25,}

for (prop in user){
    console.log('');
    
    console.log(prop);       //Si se usa asi solo dara el nombre de esa propiedad
    console.log(user[prop]); //Se usa esto para que de el valor de la propiedad
    console.log('');
    
    console.log('ASI SE COMBINAN AMBOS',prop , '{',user[prop],'}');
    
}
