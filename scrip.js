//Variables
var datoUno;
var datoDos;
var operacion;

//Funciones
function miFuncion(){
    var resultado = document.getElementById("resultado");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nuevo = document.getElementById("nueve");
    var division = document.getElementById("division");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var multiplicacion = document.getElementById("multiplicacion");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var resta = document.getElementById("resta");
    var igual = document.getElementById("igual");
    var cero = document.getElementById("cero");
    var borrar = document.getElementById("borrar");
    var suma = document.getElementById("suma");
   
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    borrar.onclick = function(e){
        resetear();
    }
    //funciones de operaciones
      resta.onclick = function(e){
        datoUno = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    suma.onclick = function(e){
        datoUno = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        datoUno = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        datoUno = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        datoDos = resultado.textContent;
        resolver();
    }
}

function resetear(){
    resultado.textContent = "";
    datoUno = 0;
    datoDos = 0;
    operacion = "";
}

function limpiar(){
    resultado.textContent = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(datoUno) + parseFloat(datoDos);
            break;
        case "-":
            res = parseFloat(datoUno) - parseFloat(datoDos);
            break;
        case "/":
            res = parseFloat(datoUno) / parseFloat(datoDos);
            break;
        case "*":
            res = parseFloat(datoUno) * parseFloat(datoDos);
            break;
    }
    resetear();
    resultado.textContent = res;
}