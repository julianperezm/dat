'use strict'

var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var minusculas = "abcdefghijklmnñopqrstuvwxyz";
var numeros = "0123456789"
var err1, err2

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

function psswd(pswd, longtot, minminus, minmayus, minum, mincarac, specialcara){
    var err1, err2;
    var err = 0;


    if (isNaN(longtot)) {
        err1 =  "Error: La longitud dada no es un número \n"
        err = 1;
    }else {
        if (pswd.length !== longtot) {
            err1 = "Error: longitud incorrecta \n"
            err = 1;
        }
    }

   if (isNaN(minminus)){
        err1 += "Error: El numero minumo de minusculas no es un numero \n"
        err = 1
    }else{
        if (countof(pswd, minusculas) <  minminus) {
            err1 +=  "Error: Numero minimo de minusculas exigido \n"
            err = 1
        }
    }

    if (isNaN(minmayus)){
         err1 += "Error: El numero minumo de mayusculas no es un numero \n"
         err = 1
     }else{
         if (countof(pswd, mayusculas) < minmayus) {
             err1 +=  "Error: Numero minimo de mayusculas exigido \n"
             err = 1
         }
     }

     if (isNaN(minum)){
          err1 += "Error: El numero minumo de numeros no es un numero \n"
          err = 1
      }else{
          if (countof(pswd, numeros) < minum) {
              err1 +=  "Error: Numero minimo de numeros exigido \n"
              err = 1
          }
      }

      if (isNaN(mincarac)){
           err1 += "Error: El numero minumo de caracteres especiales no es un numero \n"
           err = 1
       }else{
           if (countof(pswd, specialcara) < mincarac) {
               err1 +=  "Error: Numero minimo de caracteres especiales exigido \n"
               err = 1
           }
       }

    if (err) {
        return err1;
    }else {
        return "ok \n"
    }

}

let pswd, longtot, especial

pswd = 'hola'
longtot = 4
especial = ",.-{}[]!·$%&/()=?¿¡'"
console.log(psswd(pswd,longtot,4,0,2,0, especial));

pswd = 'holaA]'
longtot = 6
especial = ",.-{}[]!·$%&/()=?¿¡'"
console.log(psswd(pswd,longtot, 5,1,3,2, especial));

pswd = 'hola]'
longtot = 5
especial = ",.-{}[]!·$%&/()=?¿¡'"
console.log(psswd(pswd,'hola',6,2,0,1, especial));

pswd = 'holaAAA123'
longtot = 10
especial = ",.-{}[]!·$%&/()=?¿¡'"
console.log(psswd(pswd,'hola',2,2,2,0, especial));

pswd = 'holaAAA1{]'
longtot = 10
especial = ",.-{}[]!·$%&/()=?¿¡'"
console.log(psswd(pswd,longtot,2,2,1,2, especial));

pswd = 'holaAAA123'
longtot = 10
especial = ",.-{}[]!·$%&/()=?¿¡'"
console.log(psswd(pswd,'hola',2,2,2,'adios', especial));

pswd = 'holaAAA123'
longtot = 10
especial = ",.-{}[]!·$%&/()=?¿¡'"
console.log(psswd(pswd,'hola',2,'que',2,'adios', especial));
