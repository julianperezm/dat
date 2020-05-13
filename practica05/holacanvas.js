'use strict'

import * as vjcanvas from "./vjcanvas.js"

function main(){
    let x, y, ancho, alto, diametro, color, color_borde, ancho_borde;

    let min_x = 0;
    let max_x = 500
    let min_y = 0;
    vjcanvas.set_coords(min_x, max_x, min_y);
    ancho = 50;
    alto = 50;
    color_borde = "black";
    ancho_borde = 1;
    diametro = 50;
    let colores = "blue";
    let i_color = 0; // indice color
    for (let x=0; x <= 500; x += 150)
        for (let y=0; y <= 500; y += 150) {
        vjcanvas.rectangle(x-25, y-25, 100, 50, "#d582ff", color_borde, ancho_borde)
    }
    for (let x=100; x <= 500; x += 150)
        for (let y=50; y <= 500; y += 150) {
            vjcanvas.rectangle(x-25, y-25, 50, 50, "#befc03", color_borde, ancho_borde)

    }
    for (let x=50; x <= 500; x += 150)
        for (let y=100; y <= 500; y += 150) {
            vjcanvas.circle(x, y, diametro, "#d582ff");
    }
    for (let x=50; x <= 500; x += 150)
        for (let y=50; y <= 500; y += 150) {
            vjcanvas.circle(x, y, diametro, colores);
    }
    for (let x=0; x <= 500; x += 150)
        for (let y=100; y <= 500; y += 150) {
            vjcanvas.rectangle(x-25, y-25, 100, 100, "#d582ff", color_borde, ancho_borde)
    }
    for (let x=100; x <= 500; x += 150)
        for (let y=0; y <= 500; y += 150) {
            vjcanvas.circle(x, y, diametro, "blue");
    }
    for (let x=0; x <= 500; x += 150)
        for (let y=50; y <= 500; y += 150) {
            vjcanvas.circle(x, y, diametro, "#7de9f5");
    }
    for (let x=100; x <= 500; x += 150)
        for (let y=100; y <= 500; y += 150) {
            vjcanvas.circle(x, y, diametro, "#ff96fa");
    }

}

main()
