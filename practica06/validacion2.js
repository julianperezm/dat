'use strict'

var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var minusculas = "abcdefghijklmnñopqrstuvwxyz";
var numeros = "0123456789";
var especial = ",.-{}[]!·$%&/()=?¿¡'";
var hola=true;

function countof(cad, type) {
    var contar = 0;
    for (var i = 0; i < type.length; i++) {
     for (var x = 0; x < cad.length; x++) {
     if(cad[x]==type[i]){
         contar+=1;
         }
       }
     }
     return contar
}
function psswd(pswd, longtot, minminus, minmayus, minnum, mincarac, specialcarac){
    if (isNaN(longtot)) {
        return "Error: La longitud dada no es un número";
    }else{
        if (pswd.length === longtot) {
                if (isNaN(minminus)) {
                        return "Error: El numero minumo de minusculas no es un numero"
                }else {
                    if (countof(pswd, minusculas) >= minminus){
                        if (isNaN(minmayus)) {
                            return "Error: El numero minumo de mayusculas no es un numero"
                        }else {
                            if (countof(pswd, mayusculas) >= minmayus) {
                                if (isNaN(minnum)) {
                                    return "Error: El numero minumo de numeros no es un numero"
                                }else {
                                    if (countof(pswd, numeros) >= minnum) {
                                        if (isNaN(mincarac)) {
                                            return "Error: El numero minumo de caracteres especiales no es un numero"
                                        }else {
                                            if (countof(pswd, specialcarac) >= mincarac) {
                                                return "ok"
                                            }else {
                                                return "Error: Numero minimo de caracteres espciales"
                                            }
                                        }
                                    }else {
                                        return "Error: Numero minimo de números"
                                    }
                                }
                            }else {
                                return "Error: Numero minimo de mayusculas exigido"
                            }
                        }
                    }else {
                        return "Error: Numero minimo de minusculas exigido"
                    }
                }
        }else {
            return "Error: longitud incorrecta"
        }
    }

}

function simple_hash(text){
    var hash = 0;
    if (text.length == 0) return hash;
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function secondsToString(seconds) {
    var numdays = Math.floor(seconds / 86400);
    if (numdays == 0) {
        return "contraseña incorrecta, ya fue usada hace menos de 1 dia"
    }
    return "contraseña incorrecta, ya fue usada hace "+numdays + " dia "
}

function comprobarcontraseña(text){
    let hash = simple_hash(text)
    if (hash in localStorage) {
        let date = localStorage.getItem((hash));
        let d1 = new Date(date)
        let d2 = new Date()
        var seconds = (d2 - d1) / 1000
        return secondsToString(seconds)
    }else{
        let d1 = new Date()
        localStorage.setItem(hash, d1)
        return "contraseña correcta"
    }
}

function printstorage(){
    var data = []
    var text = "";
    for (var x=0; x<=localStorage.length-1; x++)  {
        let clave = localStorage.key(x);
        console.log(clave + " : " + localStorage.getItem(clave));
    }
}

$(document).ready(function() {
    $("#contrasenia").on("change keyup paste mouseup", function() {
        let pass = $(this).val();
        let ans = psswd(pass, 10, 0, 1, 0, 4, ",.-{}[]!·$%&/()=?¿¡'");
        $("#validacion").text(ans);
    });

    $("#contrasenia2").on("change keyup paste mouseup", function() {
        if ($("#contrasenia").val() == $("#contrasenia2").val()) {
            $("#validacion2").text("Contraseñas iguales");
            $('#boton01').removeAttr("disabled")
        } else {
            $("#validacion2").text("Contraseñas no iguales");
        }
    });

    $("#boton01").click(function() {
        let pass = $("#contrasenia").val();
        let result = comprobarcontraseña(pass);
        $("#validacion3").text(result);
    });
    $("#boton02").click(function() {
        let pass = $("#contrasenia").val();
        let result2 = printstorage();
        $("#logcontraseñas").text(result2);
    });
    $("#boton03").click(function() {
       localStorage.clear()
    });
});
