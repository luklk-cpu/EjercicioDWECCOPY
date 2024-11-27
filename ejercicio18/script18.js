
document.getElementById("calcular").addEventListener("click", function(){

    const fecha1 = new Date(document.getElementById('fecha1').value);
    const fecha2 = new Date(document.getElementById('fecha2').value);

const resultado = (fecha1.getTime() > fecha2.getTime()) ? "La fecha mayor es " + fecha1.toDateString() : (fecha1.getTime() < fecha2.getTime()) ? "La fecha mayor es " + fecha2.toDateString() : "Las dos fechas son iguales.";

document.getElementById("resultado").innerHTML = resultado;


})


