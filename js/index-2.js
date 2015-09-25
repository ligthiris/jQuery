// uso de jquery
$(document).ready(function(){

    $("#ConvertirCF").click(ConvertirCF);
	$("#ConvertirFC").click(ConvertirFC);

});

function ConvertirCF() {
    var x = $("#valor1").val();
    var ConvertirCF = (parseFloat(x)* 1.8)+32;
    $("#res").html(ConvertirCF);
}

function ConvertirFC() {
    var x = $("#valor1").val();
    var ConvertirFC = (parseFloat(x)-32)/1.8;
    $("#res").html(ConvertirFC);
}
