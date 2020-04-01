var estado = false;
$(document).ready(function() {
    $("#boton01").click(function() {
        if (estado == false){
            $("#marco_foto").toggleClass("oculto");
            $("#boton01").text("ocultar foto");
            estado = true;
        }else {
            $("#marco_foto").toggleClass("oculto");
            $("#boton01").text("ver foto");
            estado = false
        }
    });
});
