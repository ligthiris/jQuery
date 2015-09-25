// var valores = []; // arreglo (array) para valores

// valores = [23, 45, 34, 12, 34]; // definiendo valores, usar corchetes []

// valores.push(86); // agregando valores

// recorriendo por el arreglo
// la variable i representa el índice
/*
for(var i=0; i < valores.length; i++) {
	// escribir valor
	document.write(valores[i] + "<br>");
}
*/

// limpiando arreglo
// valores = [];


// uso de jquery
$(document).ready(function(){

	$("#agregar").click(agregar);
	$("#limpiar").click(limpiar);
	$("#sumatoria").click(sumatoria);
	$("#promedio").click(promedio);
	$("#mayor").click(mayor);

});

var valores = [];

function agregar() {

    var x = $("#valor1").val();
    valores.push();

    $("#res").html(agregar);
}

function limpiar() {

    valores = [];
    $("#res").html(limpiar);
}

function sumatoria() {

    var x = $("#valor1").val();
    //var sumatoria = ;
    for(var i=0; i < valores.length; i++) {
        // escribir valor
        document.write(valores[i] + "<br>");
    }
    $("#res").html(sumatoria);
}

function promedio() {

    var x = $("#valor1").val();
    //var promedio = ;
    for(var i=0; i < valores.length; i++) {
        // escribir valor
        document.write((valores[i] + "<br>") / valores.length);
    }
    $("#res").html(promedio);
}

function mayor() {
    var x = $("#valor1").val();
    valores.sort(function(a, b){return b-a});
    $("#res").html(mayor);
}