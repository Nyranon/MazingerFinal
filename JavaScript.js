window.onload = function(){
    iniciar();
};
function iniciar(){
    var boton = document.getElementById("boton");
    boton.onclick = cambiarTexto;

    var botonazo = document.getElementById("botonazo");
    botonazo.onclick = cambiarColor;

    var botonasaso = document.getElementById("botonasaso");
    botonasaso.onclick = cambiarColorFondo;

    var botonasasose = document.getElementById("botonasasose");
    botonasasose.onclick = cambiarTamano;
}


function cambiarTexto(){
    var p = document.getElementById("texto");
    p.textContent = "Hola mundo";
}

function cambiarColor(){
    var p = document.getElementById("texto");
    p.style.color = "red";
}

function cambiarColorFondo(){
    var p = document.getElementById("texto");
    p.style.backgroundColor = "blue";
}

function cambiarTamano(){
    var p = document.getElementById("texto");
    p.style.fontSize = "20px";
} 