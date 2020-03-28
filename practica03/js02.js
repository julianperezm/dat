'use strict'
function convertvelocity(x,y){
    if (arguments.length != 2) {
        return "Error: Numero de arguemntos incorrectos";
    }
    if (isNaN(x)){
        return "Error: No ha introducido ningun numero";
    }

    switch (y) {
        case ('m'):
            return "La velocidad en metros es: " + x;
        case ('cm'):
            return "La velocidad en cm es: " + (x * 100);
        case ('in'):
            return "La velocidad en in es: " + (x / 0.0254);
        case ('yd'):
            return "La velocidad en yd es: " + (x / 0.9144);
        default:
            return "Error: La unidad expresada no existe";

    }
}

let x, y;

//pruebas

x = '5';
y = 'm';

console.log(convertvelocity(x,y));

x = '5';
y = 'cm';

console.log(convertvelocity(x,y,x));
console.log(convertvelocity(x));

x = 2;
y = 'in';

console.log(convertvelocity(x,y));

x = 2;
y = 'yd';

console.log(convertvelocity(x,y));

x = 2;
y = 'w';

console.log(convertvelocity(x,y));

x = NaN;
y = 'w';

console.log(convertvelocity(x,y));
