
let fecha = new Date("2009-03-21T12:15");

document.getElementById("fecha").innerHTML = fecha.toString();

fecha.setDate(fecha.getDate() + 3);

document.getElementById("sumaDias").innerHTML = fecha.toString();

fecha.setMonth(fecha.getMonth() + 5);

document.getElementById("sumaMeses").innerHTML = fecha.toString();

fecha.setFullYear(fecha.getFullYear() - 10);

document.getElementById("sumaAnyos").innerHTML = fecha.toString();