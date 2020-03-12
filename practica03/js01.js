'use strict'
function mtocm(x){
    return "La unidad en metros pasado a cm es: " + (x * 100);
}

function mtoin(x){
    return "la unidad en metros pasado a pulgadas es: " + (x / 0.0254);
}

function mtoyd(x){
    return "la unidad en metros pasado a yardas es: " + (x / 0.9144);
}

let a, b, c;
// pruebas

a=2;

console.log(mtocm(a));
console.log(mtoin(a));
console.log(mtoyd(a));

a=3;

console.log(mtocm(a));
console.log(mtoin(a));
console.log(mtoyd(a));

a=4;

console.log(mtocm(a));
console.log(mtoin(a));
console.log(mtoyd(a));
