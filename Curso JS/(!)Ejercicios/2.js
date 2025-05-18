
let heigh =[1280,1920,2560,3840,7680,9999]
let width =[720,1080,1440,2160,4320]

let variable=[1920,1080]
let aux;
let cont=0;
let encontrada=false;

while(cont<5){

    if((variable[0]>=heigh[cont]) && (variable[0] < heigh[cont+1])){

    if(variable[1]>=width[cont]){
        aux=[heigh[cont],width[cont]]
        encontrada=true;
        break;}
        
        else{console.log('Anchura Invalida'); break;}
    }
    if(cont>=5){
        console.log('Resolucion Invalida');
        break;}

    cont++;
}

if(encontrada==true){
console.log(aux);}
