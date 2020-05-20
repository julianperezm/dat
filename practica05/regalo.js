'use strict'

import * as vjcanvas from "./vjcanvas.js"

function main(){
    let min_x = -10;
    let max_x = 10;
    let min_y = -5;
    vjcanvas.set_coords(min_x, max_x, min_y);

    let radio = 0.1;
    let diametro = 6;
    let x, y;
    let incremento_angulo = 0.6;
    let incremento_radio =  0.001;
    let vueltas = 100;
    let colores = ['#3291a8', '#3d93d4', '#3d79d4','#3d3dd4', '#6f3dd4', '#953dd4'];
    let random1 =  Math.random()* (10-0) + 10
    let random2 =  Math.random()* (30-0) + 30
    for (let angulo = 0; angulo <= 2*Math.PI * vueltas ; angulo = angulo + incremento_angulo){
        y = Math.sin(-1 * angulo) * radio * random1;
        x = Math.cos(-1 * angulo) * radio * random2;
        let i_color = Math.floor(Math.random() * colores.length)
        let tamaño = Math.random()* (1-0) + 0
        vjcanvas.circle( x, y, diametro*tamaño, colores[i_color]);
            radio += incremento_radio;

    };

}

main();
