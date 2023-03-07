
let tiempoTerminado;
let intervaloTiempo;

function comenzarTiempo(){
    tiempoTerminado = setTimeout(tiempoCumplido, 1000 * 30);
    intervaloTiempo = setInterval (ticTac, 1000);

    document.getElementById("cuenta").textContent = 30;
}

function ticTac(){
    let tiempo = document.getElementById("cuenta").textContent;

    document.getElementById("cuenta").textContent = tiempo - 1;
}

function tiempoCumplido(){
    clearInterval(intervaloTiempo);
    document.getElementById("cuenta").textContent = 0
    document.getElementById("audioFinal").play();
    alert("GAME OVER\nSe acabo el tiempo\nIntenta nuevamente")
}

function respuestas(){
    clearTimeout(tiempoTerminado)
    clearInterval(intervaloTiempo)

    let fecha = new Date();
    document.getElementById("winner").play();
    alert("RESPUESTAS\n" + "1- " + document.getElementById("resp1").value
                    + "\n"+"2- " + document.getElementById("resp2").value
                    + "\n"+"3- " + document.getElementById("resp3").value
                    + "\n"+"4- " + document.getElementById("resp4").value
                    + "\n"+"5- " + document.getElementById("resp5").value
                    + "\n" + fecha.toLocaleDateString("es-Es"))
}
function volverIntentar(){
    location.reload();
}


