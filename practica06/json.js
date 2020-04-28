'use strict'
let alumno = { "nombre":"Julian",
                "segundonombre":"Angel",
                "primerapellido":"Perez",
                "segundoapello":"Muñoz",
                "notas":[9, 10],
                "aprobado": true,
                "suspenso": false,
                "direccion":null}

console.log(typeof(alumno),alumno);

let cadena=JSON.stringify(alumno);
console.log(typeof(cadena),cadena);

let objeto=JSON.parse(cadena);
console.log(typeof(objeto),objeto);
