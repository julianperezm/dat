'use strict'

import * as vjcanvas from "./vjcanvas.js"

function main(){
    let min_x = -1;
    let max_x = 1;
    let min_y = -0.6;
    vjcanvas.set_coords(min_x, max_x, min_y);

    let radio = .02;  // De la espiral
    let radio_maximo = 1;
    let color ;
    let diametro_circulo = .3;
    let x, y;
    let color_borde = 'black';
    let grosor_borde = 0;
    let angulo = 0;
    let incremento_angulo = 0.05;
    let incremento_radio =  0.001;
    let tamanio = 90;
    let vueltas = 12;
    let colores = ['#3291a8', '#3d93d4', '#3d79d4','#3d3dd4', '#6f3dd4', '#953dd4'];
    let i_color = 0;
    let random =  Math.random()* (1-0) + 1
    for (let angulo = 0; angulo <= 2*Math.PI * vueltas ; angulo = angulo + incremento_angulo){
        y = Math.sin(-1 * angulo) * radio * random;
        x = Math.cos(-1 * angulo) * radio;
        i_color = Math.floor(Math.random() * colores.length)
        let tamaño = Math.random()* (1-0) + 0
        vjcanvas.circle( x, y, diametro_circulo*tamaño, colores[i_color],
                        color_borde, grosor_borde );
        if (radio < radio_maximo ){
            radio += incremento_radio;
        };
    };







}

main();
