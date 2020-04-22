'use strict'
let d1, d2, d3;

d1 = new Date(2020, 2, 11, 0, 0, 0);
d2 = new Date()
d3 = new Date(2020, 2, 14, 0, 0, 0);
var seconds = (d2 - d1) / 1000
var seconds2 = (d2 - d3) / 1000

function secondsToString(seconds) {
    var numdays = Math.floor(seconds / 86400);
    var numhours = Math.floor((seconds % 86400) / 3600);
    var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
    var numseconds = ((seconds % 86400) % 3600) % 60;

    return numdays + " dias " + numhours + " horas " + numminutes + " minutos " + numseconds + " segundos";
}

$(document).ready(function() {

    $("#dia1").text(secondsToString(seconds));
    $("#dia2").text(secondsToString(seconds2));

});
