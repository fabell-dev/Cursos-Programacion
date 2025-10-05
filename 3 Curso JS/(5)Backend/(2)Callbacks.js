loadStuff(()=>{
    loadStuffLater();
})
//?A esto se llama  Callback es una tecnica que se utiliza para esperar a que se termine de ejecutar un tramo de codigo y luego se ejecute otro

function loadStuff(funcionTardia){
    //ALGO ALGO QUE SE DEMORA
    funcionTardia();
}

//?Asi luego de que termine de cargar la funcion inicial se ejcutara la funcion anonima que pasamos por parametros