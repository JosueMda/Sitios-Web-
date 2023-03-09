function sumar(){
    let num1 = document.getElementById("campo1").value;
    let num2 = document.getElementById("campo2").value;
    let resultado = +num1 + +num2;
    document.getElementById("resultado").value=resultado;
}
function restar(){
    let num1 = document.getElementById("campo1").value;
    let num2 = document.getElementById("campo2").value;
    let resultado = +num1 - +num2;
    document.getElementById("resultado").value=resultado;
}
function multiplicar(){
    let num1 = document.getElementById("campo1").value;
    let num2 = document.getElementById("campo2").value;
    let resultado = +num1 * +num2;
    document.getElementById("resultado").value=resultado;
}
function dividir(){
    let num1 = document.getElementById("campo1").value;
    let num2 = document.getElementById("campo2").value;
    let resultado = +num1 / +num2;
    document.getElementById("resultado").value=resultado;
}
function raiz(){
    let num2= +document.getElementById("campo2").value;
    let resultado= Math.sqrt(num2);
    document.getElementById("resultado").value=resultado;
}
function potencia(){
    let num1= document.getElementById("campo1").value;
    let num2= document.getElementById("campo2").value;
    let resultado= Math.pow(+num1, +num2);
    document.getElementById("resultado").value=resultado;
}
function absoluto(){
    let num2= +document.getElementById("campo2").value;
    let resultado= Math.abs(num2);
    document.getElementById("resultado").value=resultado;
}

function random(){

    let resultado= Math.floor(Math.random() * 101) + 1;
    document.getElementById("resultado").value=resultado;
}

function round(){
    let num1= +document.getElementById("resultado").value;
    let resultado = Math.round(num1);
    document.getElementById("resultado").value=resultado;
}
function floor(){
    let num1= +document.getElementById("resultado").value;
    let resultado = Math.floor(num1);
    document.getElementById("resultado").value=resultado;
}
function ceil(){
    let num1= +document.getElementById("resultado").value;
    let resultado = Math.ceil(num1);
    document.getElementById("resultado").value=resultado;
}