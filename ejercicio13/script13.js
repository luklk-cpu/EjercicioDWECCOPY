let fecha = new Date("2009-03-21T12:15");

document.getElementById("fecha").innerHTML = fecha;

let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let anyo = fecha.getFullYear();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();

if(dia < 10 ){

    dia = "0" + dia;
}

if(mes < 10){

    mes = "0" + mes;
}

if(hora < 10){

    hora = "0" + hora;
}

if(minutos < 10){

    minutos = "0" + minutos;
}
let fechaConFormato = dia + "/" + mes + "/" + anyo + " " + hora + ":" + minutos;
document.getElementById("fechaFormato").innerText = fechaConFormato;