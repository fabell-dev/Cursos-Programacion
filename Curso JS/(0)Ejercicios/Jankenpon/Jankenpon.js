let estad=localStorage.getItem("estadisticas") ? JSON.parse(localStorage.getItem("estadisticas")) :
{ 
    wins: 0,
    losses: 0,
    ties: 0,
};
const mensaje = document.getElementById("message");
const resultado = document.getElementById("result");

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

function reset() {
    estad = { wins: 0, losses: 0, ties: 0 };
    alert("Juego reiniciado");
    loadScreen();
}


function loadScreen(){
    localStorage.setItem("estadisticas", JSON.stringify(estad));

    resultado.innerHTML = "Selecciona tu jugada:";
    document.getElementById("wins").innerHTML = `${estad.wins}`;
    document.getElementById("losses").innerHTML = `${estad.losses}`;
    document.getElementById("ties").innerHTML = `${estad.ties}`;
}

loadScreen();






