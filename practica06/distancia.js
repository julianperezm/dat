'use strict'

 function guardarUbicacionCasa(longitudCasa, latitudCasa){
     localStorage.setItem("longitudCasa", longitudCasa);
     localStorage.setItem("latitudCasa", latitudCasa);

 }

 function marcarMapa(mapa){
     let a = localStorage.getItem(("longitudCasa"));
     let b = localStorage.getItem(("latitudCasa"));

     var casa = new L.Icon({
         iconUrl: 'images/casa.png',
         iconSize: [50, 50],
         iconAnchor: [25, 50]
     });
     L.circle([b, a], 1000, {
 		color: '#bdbdbd',
 		fillColor: '#e8e8e8',
 		fillOpacity: 0.5
 	}).addTo(mapa);
     L.marker([b, a], {icon: casa}).addTo(mapa);
 }

 function guardarMiUbicacion() {
     let options = {
         enableHighAccuracy: true,
         timeout: 5000,
         maximumAge: 0
     };


     function success(pos) {
         let x = pos.coords;
         localStorage.setItem("longitudpersona", x.longitude);
         localStorage.setItem("latitudpersona", x.latitude);
       }
       function error(err) {
         console.warn(`ERROR(${err.code}): ${err.message}`);
       };
       navigator.geolocation.getCurrentPosition(success, error, options);
 }

 function marcarMapaUbicacion(mapa){

     var people = new L.Icon({
         iconUrl: 'images/people.png',
         iconSize: [50, 50],
         iconAnchor: [25, 50]
     });

     let coordenadaxpersona = localStorage.getItem(("latitudpersona"));
     let coordenadaypersona = localStorage.getItem(("longitudpersona"));

     L.marker([coordenadaxpersona, coordenadaypersona], {icon: people}).addTo(mapa);
 }

 function comprobarDistancia(){
     let coordenadaxcasa = localStorage.getItem(("latitudCasa"));
     let coordenadaycasa = localStorage.getItem(("longitudCasa"));

     let coordenadaxpersona = localStorage.getItem(("latitudpersona"));
     let coordenadaypersona = localStorage.getItem(("longitudpersona"));

     let d = Math.sqrt((Math.pow((coordenadaxpersona - coordenadaxcasa),2) + Math.pow((coordenadaypersona - coordenadaycasa),2)))

     let dkm = d*100

     if (dkm < 0.5){
         return "Estas a menos de 500m de casa, ¡Todo va bien!"
     }else if (0.5 < dkm < 0.75 ){
         return "Estas a 250m para salir del circulo, ¡Ten cuidado!"
     }else if (0.75 < dkm < 1){
         return "Muy cercano a los 1000m ¡Da la vuelta!"
     }else{
         return "Fuera del area permitida ¡Irresponsable!"
     }
 }
//NECESARIO ACEPTAR PERMITIR UBICACION Y TRAS ESTO RECARGAR LA PAGINA PARA QUE SE MUESTRE EL MAPA
$(document).ready(function() {
    guardarMiUbicacion()
    let coordenadaxpersona = localStorage.getItem(("latitudpersona"));
    let coordenadaypersona = localStorage.getItem(("longitudpersona"));

    let zoom=15;
    let mi_mapa = L.map('id_mapa').setView([coordenadaxpersona,coordenadaypersona], zoom);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    }).addTo(mi_mapa);

    marcarMapaUbicacion(mi_mapa)

    $("#botonposicioncasa").click(function() {
     let longitudCasa = $("#longitudcasa").val();
     let latitudCasa = $("#latitudcasa").val();
     guardarUbicacionCasa(longitudCasa, latitudCasa);
    });

    marcarMapa(mi_mapa)

    let distancia = comprobarDistancia()

    $("#distancia").text(distancia);

 });