'use strict'

var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var minusculas = "abcdefghijklmnñopqrstuvwxyz";
var numeros = "0123456789"
var especial = ",.-{}[]!·$%&/()=?¿¡'"

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

let pswd, longtot

pswd = 'holaAA![]¿'
longtot = 10
var especial = ",.-{}[]!·$%&/()=?¿¡'"
console.log(psswd(pswd,longtot,0,1,0,4,especial));

pswd = 'holaAA1'
longtot = 7
console.log(psswd(pswd,longtot,0,'hola',2,0,especial));

pswd = 'holaAA1234'
longtot = 10
console.log(psswd(pswd,longtot,0,1,2,0,especial));

pswd = 'holñññAA'
longtot = 8
console.log(psswd(pswd,longtot,6,1,0,0,especial));

pswd = 'hola'
longtot = 4
console.log(psswd(pswd,longtot,0, 3,0,0,especial));

pswd = 'hola'
longtot = 4
console.log(psswd(pswd,longtot,0, 0,0,"hola",especial));
