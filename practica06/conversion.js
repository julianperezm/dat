'use strict'

function UnixToLocal(UniXHr){
    var date  = new Date(UniXHr * 1000)
    var year = date.getFullYear()
    var month = date.getMonth()
    var day = date.getDate()
    var hr = date.getHours();
    var m = "0" + date.getMinutes();
    var s = "0" + date.getSeconds();
    var newHour =  'dia '+ day + ' mes '+ (month + 1)+ ' año '+ year + ' ' + hr+ ':' + m.substr(-2) + ':' + s.substr(-2);
    return newHour
}

function UnixToUTC(UniXHr){
    var date  = new Date(UniXHr * 1000)
    return date
}

function LocalToUTC(año, mes, dia, hora, min, seg){
    let intervalo = Date.UTC(año, mes, dia, hora, min, seg);
    let date = new Date(intervalo)
    return date
}

function LocalToUnix(año, mes, dia, hora, min, seg){
    let date = new Date(año, mes, dia, hora, min, seg);
    return (date - 0) / 1000
}

function UTCToLocal(año, mes, dia, hora, min, seg){
    let date = new Date (año, mes, dia, hora, min, seg);
    var year = date.getFullYear()
    var month = date.getMonth()
    var day = date.getDate()
    var hr = date.getHours();
    var m = "0" + date.getMinutes();
    var s = "0" + date.getSeconds();
    var newHour =  'dia '+ day + ' mes '+ (month + 1)+ ' año '+ year + ' ' + hr+ ':' + m.substr(-2) + ':' + s.substr(-2);
    return newHour
}

function UTCToUnix(año, mes, dia, hora, min, seg){
    let date = Date.UTC(año, mes, dia, hora, min, seg);
    return (date - 0) / 1000
}


console.log(UnixToLocal(1599602582));
console.log(UnixToUTC(1599602582));
console.log(LocalToUTC(2020, 8, 8, 22, 3, 2));
console.log(LocalToUnix(2020, 8, 8, 22, 3, 2));
console.log(UTCToLocal(2020, 8, 8, 22, 3, 2));
console.log(UTCToUnix(2020, 8, 8, 22, 3, 2));
