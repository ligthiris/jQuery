/*

var fecha_hoy = new Date();

var mañana = fecha.setDate(hoy.getDate() + 1);

Math.floor() para redondear hacia arriba

*/

$(document).ready(function(){

	$("#calcular").click(calcular);
    setTimeout(cambiar, 5000);
    setInterval(segundos, 1000);

});

function calcular(){
    var f = new Date($("#fecha").val() + "T00:00:00-0500");
    var d = $("#d").val();
    var m = $("#m").val();
    var a = $("#a").val();
    f.setDate(f.getDate() + parseInt(d));
    f.setMonth(f.getMonth() + parseInt(m));
    f.setFullYear(f.getFullYear() + parseInt(a));
    $("#res").html("La nueva fecha es: " + (f.getDate()) + "-" + (f.getMonth()+1) + "-" + (f.getFullYear()));
    //$("#res").html(f);
}

/*function cambiar(){
    $("#res").html("Listo!!");
}

function segundos(){
    var d = new Date();
    $("#res").html(d.getSeconds());
}*/
