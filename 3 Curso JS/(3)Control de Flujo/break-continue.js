
//Se pueden utilizar para todas las sentencias de ciclo

//---Continue
//Cuando se llega a esa linea el Bucle se [Reiniciara]

let i=0;
while(i<5){
    i++;
    if(i===2){
        continue;} 
    console.log(i);}

    console.log('');
    

//---Break
//Cuando se llega a esa linea el Bucle se [Terminara]


i=5;
while(i<10){
    i++;
    if(i===8){
        break;} 
    console.log(i);}