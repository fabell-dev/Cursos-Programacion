let estad=localStorage.getItem("estadisticas") ? JSON.parse(localStorage.getItem("estadisticas")) :
{ 
    wins: 0,
    losses: 0,
    ties: 0,
};
const mensaje = document.getElementById("message");
const resultado = document.getElementById("result");
const aplbtn =document.querySelector(".autoplay")

let flag=false;
let interval;

//! Choose a Move
function pickmove() {

    let number = Math.random();
    let move = "";

    if (number < 0.33) {
        move = "Piedra";
    }
    else if (number < 0.66) {
        move = "Papel";
    }
    else if (number < 1) {
        move = "Tijera";
    }
    return move;
}

//! Play the Game
function playgame(p1, p2) {

    let result="";
    
    if (p2 == "Random") {
        p2 = pickmove();
    }

    if(p1 == "Piedra" && p2 == "Tijera" ){
        result="Has Perdido";
        estad.losses++;
    }
    else if(p1== "Papel" && p2 == "Piedra" ){
        result="Has Perdido";
        estad.losses++;
    }
    else if(p1 == "Tijera" && p2 == "Papel" ){
        result="Has Perdido";
        estad.losses++;
    }
    else if(p1 == p2){
        result="Has Empatado";
        estad.ties++;
    }
    else{
        result="Has Ganado";
        estad.wins++;
    }

    loadScreen();
    mensaje.innerHTML = `<div class="js-image"> <p>Alberto:</p><img class="imgr" src="${p1}.png"></img></div>
                        <div class="js-image"> <p>Tu:</p><img class="imgr" src="${p2}.png"></img></div>`;
    resultado.innerHTML = result;
}

function autoplay(){
    if(!flag){
        aplbtn.innerHTML ="Stop Playing"
        interval=setInterval(()=>{
            let movep = pickmove();
            let movec = pickmove();
            playgame(movep,movec)
        },500);
        
        flag=true;}
    else{
        aplbtn.innerHTML ="Autoplay"
        clearInterval(interval);
        flag=false;}
}

//! Reset Stats
function resetask() {
    resultado.innerHTML=`Seguro?
    <button onclick=reset("yes")>Si</button>
    <button onclick=reset("no") >No</button>`
}
function reset(param) {
    if(param==="yes"){
    estad = { wins: 0, losses: 0, ties: 0 };
    alert("Juego reiniciado");
    loadScreen();
    }
    else{loadScreen();}
}

//! Main Function
function loadScreen(){
    localStorage.setItem("estadisticas", JSON.stringify(estad));

    resultado.innerHTML = "Selecciona tu jugada:";
    document.getElementById("wins").innerHTML = `${estad.wins}`;
    document.getElementById("losses").innerHTML = `${estad.losses}`;
    document.getElementById("ties").innerHTML = `${estad.ties}`;
}


//! Events Listeners
aplbtn.addEventListener('click',()=>{autoplay();})

document.body.addEventListener('keydown', (event) => {
    if(event.key ==="a"){autoplay();}
    if(event.key ==="r"){playgame("Piedra",pickmove())}
    if(event.key ==="p"){playgame("Papel",pickmove())}
    if(event.key ==="t"){playgame("Tijera",pickmove())}
    if(event.key ==="Backspace"){reset()}
})

loadScreen();






