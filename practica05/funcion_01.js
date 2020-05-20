'use strict'

import * as vjcanvas from "./vjcanvas2.js"

let vc = {};
vc.min_x = -50;
vc.max_x = 50;
vc.min_y = -1;
vc.max_y = 1;

function dibuja_ejes(){
    let puntosX = [ [vc.min_x,0], [vc.max_x, 0] ];
    let color = "lightgrey";
    let grosor = 2;
    vjcanvas.line(puntosX, color, grosor);

    let puntosY = [ [0,vc.min_y], [0, vc.max_y] ] ;
    vjcanvas.line(puntosY, color, grosor);
    return;
}


function main(){
    let corrige_ratio = false;
    vjcanvas.set_coords(vc.min_x,vc. max_x,
        vc.min_y, vc.max_y, corrige_ratio);

    let incremento_x = 0.05;
    let y;
    let color = "black"
    let grosor = 1;


    dibuja_ejes();
    vjcanvas.text(30, -0.8, 'cos(x)/x');

    for(let x = vc.min_x; x<= vc.max_x; x += incremento_x){
        y = Math.cos(x)/x;
        vjcanvas.dot(x ,y ,color ,grosor);
    }

};


main();
