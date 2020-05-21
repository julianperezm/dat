'use strict'
let datos = '[[40.417, -3.703, 0.5, 510, 1000, 100 ],' +
            '[ 41.3887901, 2.1589899, 0.5, 300,1150,150],' +
            '[ 37.8915482, -4.7727499, 0.5, 250,1150,90 ],' +
            '[43.0099182, -7.5560198, 0.5, 350,2000,300]]';

function createCoord(radioLimitante){
    let pi  = Math.PI;
    let angulo  = Math.random()*((2*pi)-0)+0;
    let senAngulo = Math.sin(angulo);
    let cosAngulo = Math.cos(angulo);
    let radioAleat = Math.random()*(radioLimitante -0)+0;
    let coord = cosAngulo * senAngulo * radioAleat;
    return coord

}

function dibujar(latitud, longitud, radio,mapa, contagiados,altas,fallecidos){
    var radiocirculo = 30000;

    L.circle([latitud, longitud], radiocirculo, {
		color: '#bdbdbd',
		fillColor: '#e8e8e8',
		fillOpacity: 0.5
	}).addTo(mapa);
    var contagiado = new L.Icon({
        iconUrl: 'images/virus.png',
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    });
    var muertes = new L.Icon({
        iconUrl: 'images/ataud.png',
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    });
    var alta = new L.Icon({
        iconUrl: 'images/romantico.png',
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    });

    for (let y=0; y <= contagiados/10; y++) {
        let coordenaday = latitud + createCoord(radio);
        let coordenadax = longitud + createCoord(radio);
        L.marker([coordenaday, coordenadax], {icon: contagiado}).addTo(mapa);
    }
    for (let y=0; y <= altas/10; y++) {
        let coordenaday = latitud + createCoord(radio);
        let coordenadax = longitud + createCoord(radio);
        L.marker([coordenaday, coordenadax], {icon: alta}).addTo(mapa);
    }
    for (let y=0; y <= fallecidos/10; y++) {
        let coordenaday = latitud + createCoord(radio);
        let coordenadax = longitud + createCoord(radio);
         L.marker([coordenaday, coordenadax], {icon: muertes}).addTo(mapa);
    }
}
$(document).ready(function() {

    let objeto=JSON.parse(datos);
    let zoom=7;
    let mi_mapa = L.map('id_mapa').setView([40.417, -3.703], zoom);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    }).addTo(mi_mapa);

    //MADRID
    dibujar(objeto[0][0], objeto[0][1], objeto[0][2],mi_mapa, objeto[0][3],objeto[0][4],objeto[0][5] );

    //BARCELONA
     dibujar(objeto[1][0], objeto[1][1], objeto[1][2],mi_mapa, objeto[1][3],objeto[1][4],objeto[1][5]);

    //CORDOBA
    dibujar(objeto[2][0], objeto[2][1], objeto[2][2],mi_mapa, objeto[2][3],objeto[2][4],objeto[2][5]);

    //LUGO
    dibujar(objeto[3][0], objeto[3][1], objeto[3][2],mi_mapa, objeto[3][3],objeto[3][4],objeto[3][5]);


});

