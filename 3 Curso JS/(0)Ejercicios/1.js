function patata(x){
    console.log(x+3); 
}
let x=0;let y;


function runTwice(funcion,c){
    y=setInterval(function runTwice(){
    funcion(c);
    x++;
    
    if(x===3){
        clearInterval(y)}
    },1000)
    
}

runTwice(patata,7);