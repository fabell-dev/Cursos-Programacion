let cuadro =document.getElementById('tareas_div');
let tarea ; let fecha ; 
let x ="";
let arreglo=localStorage.getItem("arreglo") ? JSON.parse(localStorage.getItem("arreglo")) :
[];


function Agregar(){
    tarea =document.getElementById('tarea').value;
    fecha =document.getElementById('fecha').value;
    arreglo.push({tarea, fecha})
    document.getElementById('tarea').value="";
    document.getElementById('fecha').value="";
    loadpage();
}

function Eliminar(pos){
    arreglo.splice(pos,1);
    loadpage();
}

function loadpage(){
    localStorage.setItem("arreglo", JSON.stringify(arreglo));

    for(let i=0;i<arreglo.length;i++){
        x+=`<div class="tareas_cuadros">
        <p class="Primer">${arreglo[i].tarea}</p>
        <p>               ${arreglo[i].fecha}</p>
        <button onclick=Eliminar(${i})>DELETE</button>
        </div>`;}

    cuadro.innerHTML=x;
    x="";
}

loadpage();
