'use strict'

let french = {
    titulo: 'bouton de changement',
    mostrar: 'Montrer la photo',
    ocultar: 'Masquer la photo',
};

let spanish = {
    titulo: 'Cambiar Boton',
    mostrar: 'Ver foto',
    ocultar: 'Ocultar foto',
};

let deutsch = {
    titulo: 'Schaltfläche ändern',
    mostrar: 'Siehe foto',
    ocultar: 'Foto ausblenden',
};

var estado = false;
var nombre1 = spanish.ocultar;
var nombre2 = spanish.mostrar
var nombreboton;
let texto;
const maxfilas = 10;
var cont = 0;
$(document).ready(function() {
$("#button02").click(function() {
    $("#titulo").text(french.titulo)
    nombre1 = french.ocultar
    nombre2 = french.mostrar
    nombreboton = $("#boton01").text()
    if (nombreboton == spanish.ocultar || nombreboton == deutsch.ocultar) {
        $("#boton01").text(nombre1);
    } else {
        $("#boton01").text(nombre2);
    }

    texto = '<tr class="hora"><td>' + moment().format() + '</td><td> Idioma cambiado: Frances</td></tr>';
    var nFilas = $("#tabla-log tr").length
    if (nFilas == maxfilas) {
        $("#tabla-log tr:first").remove();
        $("#tabla-log").append(texto);
    } else {
        $("#tabla-log").append(texto);

    }

});

$("#button03").click(function() {
    $("#titulo").text(spanish.titulo)
    nombre1 = spanish.ocultar
    nombre2 = spanish.mostrar
    nombreboton = $("#boton01").text()
    if (nombreboton == french.ocultar || nombreboton == deutsch.ocultar) {
        $("#boton01").text(nombre1);
    } else {
        $("#boton01").text(nombre2);
    }
    texto = '<tr class="hora"><td>' + moment().format() + '</td><td> Idioma cambiado: Español</td></tr>';
    var nFilas = $("#tabla-log tr").length
    if (nFilas == maxfilas) {
        $("#tabla-log tr:first").remove();
        $("#tabla-log").append(texto);
    } else {
        $("#tabla-log").append(texto);

    }
});

$("#button04").click(function() {
    $("#titulo").text(deutsch.titulo)
    nombre1 = deutsch.ocultar
    nombre2 = deutsch.mostrar
    nombreboton = $("#boton01").text()
    if (nombreboton == french.ocultar || nombreboton == spanish.ocultar) {
        $("#boton01").text(nombre1);
        $("#tabla-log").append(texto);
    } else {
        $("#boton01").text(nombre2);
    }
    texto = '<tr class="hora"><td>' + moment().format() + '</td><td> Idioma cambiado: Alemán</td></tr>';
    var nFilas = $("#tabla-log tr").length
    if (nFilas == maxfilas) {
        $("#tabla-log tr:first").remove();
        $("#tabla-log").append(texto);
    } else {
        $("#tabla-log").append(texto);

    }
});

$("#boton01").click(function() {
    $("#marco_foto").toggleClass("oculto");
    if (estado == false) {
        $("#boton01").text(nombre1);
        texto = '<tr class="hora"><td>' + moment().format() + '</td><td> Mostamos imagen</td></tr>';
        var nFilas = $("#tabla-log tr").length
        if (nFilas == maxfilas) {
            $("#tabla-log tr:first").remove();
            $("#tabla-log").append(texto);
        } else {
            $("#tabla-log").append(texto);

        }
        estado = true;
    } else {
        $("#boton01").text(nombre2);
        texto = '<tr class="hora"><td>' + moment().format() + '</td><td> Ocultamos la imagen</td></tr>';
        var nFilas = $("#tabla-log tr").length
        if (nFilas == maxfilas) {
            $("#tabla-log tr:first").remove();
            $("#tabla-log").append(texto);
        } else {
            $("#tabla-log").append(texto);
        }
        estado = false
    }
});
});
