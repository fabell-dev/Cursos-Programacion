let movec;
let movep;
let estad={ wins:0, losses:0, ties:0 };

const mensaje = document.getElementById("message");
const cm =document.getElementById("computer-move");
const pm =document.getElementById("player-move");

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

    let move= p1;
    let result="";
    
    if (p2 == "Random") {
        movec = pickmove();
        p2 = movec;
    } else {
        movep = p2;
    }

    if(move == "Piedra" && p2 == "Tijera" ){
        result="Has Perdido";
        estad.losses++;
    }
    else if(move == "Papel" && p2 == "Piedra" ){
        result="Has Perdido";
        estad.losses++;
    }
    else if(move == "Tijera" && p2 == "Papel" ){
        result="Has Perdido";
        estad.losses++;
    }
    else if(move == p2){
        result="Has Empatado";
        estad.ties++;
    }
    else{
        result="Has Ganado";
        estad.wins++;
    }

    mensaje.innerHTML = `La computadora selecciono: ${p1} <br> Tu seleccionaste: ${p2}<br>${result}`;
    document.getElementById("wins").innerHTML = `${estad.wins}`;
    document.getElementById("losses").innerHTML = `${estad.losses}`;
    document.getElementById("ties").innerHTML = `${estad.ties}`;
}


function reset() {
    estad = { wins: 0, losses: 0, ties: 0 };
    mensaje.innerHTML = "Juego reiniciado";
    document.getElementById("wins").innerHTML = `${estad.wins}`;
    document.getElementById("losses").innerHTML = `${estad.losses}`;
    document.getElementById("ties").innerHTML = `${estad.ties}`;
    alert("Juego reiniciado");
}






