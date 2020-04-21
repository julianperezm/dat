'use strict'

import * as vjcanvas from "./vjcanvas.js"

function desierto01(altura) {
    let x, y, ancho, alto, radio, color, radio1, colores1, tamaño;

    let min_x = 0;
    let max_x = 1000
    let min_y = 0;
    let max_y = altura;
    vjcanvas.set_coords(min_x, max_x, min_y);

    radio = 70;
    let colores;
    colores = ['#bdae93', '#827865', '#877758','#a68f60'];
    console.log(colores);
    let i_color = 0; // indice color
    for (let x=0; x <= max_x; x += radio*0.6)
        for (let y=max_y; y >= 0; y -= radio*0.3) {
            i_color = Math.floor(Math.random() * colores.length)
            tamaño = Math.random()* (1.5-1) + 1
            vjcanvas.circle(x, y, radio*tamaño, colores[i_color]);
    }

}
function desierto02(altura) {
    let x, y, ancho, alto, radio, color, radio1, colores1, tamaño;

    let min_x = 0;
    let max_x = 1000
    let min_y = -500;
    let max_y = altura;
    vjcanvas.set_coords(min_x, max_x, min_y);

    radio = 70;
    let colores;
    colores = ['#b8ab76', '#807446', '#ad973b','#a68f60'];
    console.log(colores);
    let i_color = 0; // indice color
    for (let x=-0; x <= max_x; x += radio*0.6)
        for (let y=max_y; y >= 0; y -= radio*0.3) {
            i_color = Math.floor(Math.random() * colores.length)
            tamaño = Math.random()* (1.5-1) + 1
            vjcanvas.circle(x, y, radio*tamaño, colores[i_color]);
    }

}
function vegetal01(altura) {
    let x, y, ancho, alto, radio, color, radio1, colores1, tamaño;

    let min_x = 0;
    let max_x = 1000
    let min_y = -1000;
    let max_y = altura;
    vjcanvas.set_coords(min_x, max_x, min_y);

    radio = 70;
    let colores;
    colores = ['#43ad3b', '#5f875c', '#234a20','#7cb078'];
    console.log(colores);
    let i_color = 0; // indice color
    for (let x=-0; x <= max_x; x += radio*0.6)
        for (let y=max_y; y >= 0; y -= radio*0.3) {
            i_color = Math.floor(Math.random() * colores.length)
            tamaño = Math.random()* (1.5-1) + 1
            vjcanvas.circle(x, y, radio*tamaño, colores[i_color]);
    }

}
function vegetal02(altura) {
    let x, y, ancho, alto, radio, color, radio1, colores1, tamaño;

    let min_x = 0;
    let max_x = 1000
    let min_y = -1500;
    let max_y = altura;
    vjcanvas.set_coords(min_x, max_x, min_y);

    radio = 70;
    let colores;
    colores = ['#47de65', '#125920', '#9cbaa2','#10cc36'];
    console.log(colores);
    let i_color = 0; // indice color
    for (let x=-0; x <= max_x; x += radio*0.6)
        for (let y=max_y; y >= 0; y -= radio*0.3) {
            i_color = Math.floor(Math.random() * colores.length)
            tamaño = Math.random()* (1.5-1) + 1
            vjcanvas.circle(x, y, radio*tamaño, colores[i_color]);
    }

}

function vegetal03(altura) {
    let x, y, ancho, alto, radio, color, radio1, colores1, tamaño;

    let min_x = 0;
    let max_x = 1000
    let min_y = -2000;
    let max_y = altura;
    vjcanvas.set_coords(min_x, max_x, min_y);

    radio = 70;
    let colores;
    colores = ['#10cc74', '#1f4735', '#107849','#10cc36'];
    console.log(colores);
    let i_color = 0; // indice color
    for (let x=-0; x <= max_x; x += radio*0.6)
        for (let y=max_y; y >= 0; y -= radio*0.3) {
            i_color = Math.floor(Math.random() * colores.length)
            tamaño = Math.random()* (1.5-1) + 1
            vjcanvas.circle(x, y, radio*tamaño, colores[i_color]);
    }

}

function urbano01(altura) {
    let x, y, ancho, alto, radio, color, radio1, colores1, tamaño;

    let min_x = 0;
    let max_x = 1000
    let min_y = -2500;
    let max_y = altura;
    vjcanvas.set_coords(min_x, max_x, min_y);

    radio = 70;
    let colores;
    colores = ['#d9d9d9', '#9c9a9a', '#1c1a1a','#737070'];
    console.log(colores);
    let i_color = 0; // indice color
    for (let x=-0; x <= max_x; x += radio*0.6)
        for (let y=max_y; y >= 0; y -= radio*0.3) {
            i_color = Math.floor(Math.random() * colores.length)
            tamaño = Math.random()* (1.5-1) + 1
            vjcanvas.circle(x, y, radio*tamaño, colores[i_color]);
    }

}
function urbano02(altura) {
    let x, y, ancho, alto, radio, color, radio1, colores1, tamaño;

    let min_x = 0;
    let max_x = 1000
    let min_y = -3000;
    let max_y = altura;
    vjcanvas.set_coords(min_x, max_x, min_y);

    radio = 70;
    let colores;
    colores = ['#d1d1d1', '#d1d1d1', '#261f1f','#fcfcfc'];
    console.log(colores);
    let i_color = 0; // indice color
    for (let x=-0; x <= max_x; x += radio*0.6)
        for (let y=max_y; y >= 0; y -= radio*0.3) {
            i_color = Math.floor(Math.random() * colores.length)
            tamaño = Math.random()* (1.5-1) + 1
            vjcanvas.circle(x, y, radio*tamaño, colores[i_color]);
    }

}

function marino01(altura) {
    let x, y, ancho, alto, radio, color, radio1, colores1, tamaño;

    let min_x = 0;
    let max_x = 1000
    let min_y = -3500;
    let max_y = altura;
    vjcanvas.set_coords(min_x, max_x, min_y);

    radio = 70;
    let colores;
    colores = ['#b4bdde', '#4c61ad', '#0037ff','#b2bfed'];
    console.log(colores);
    let i_color = 0; // indice color
    for (let x=-0; x <= max_x; x += radio*0.6)
        for (let y=max_y; y >= 0; y -= radio*0.3) {
            i_color = Math.floor(Math.random() * colores.length)
            tamaño = Math.random()* (1.5-1) + 1
            vjcanvas.circle(x, y, radio*tamaño, colores[i_color]);
    }

}


function main() {
    desierto01(500);
    desierto02(500);
    vegetal01(500);
    vegetal02(500);
    vegetal03(500);
    urbano01(500);
    urbano02(500);
    marino01(500);

}
main()
