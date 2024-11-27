
const fechaActual = new Date();
const dia =  fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const anyo = fechaActual.getFullYear();


if(dia < 10){
    dia = "0" + dia;
}

if(mes < 10){
    mes = "0" + mes;
}


const fechaEntera = dia + "/" + mes + "/" + anyo;

document.getElementById("fecha").innerHTML = fechaEntera;