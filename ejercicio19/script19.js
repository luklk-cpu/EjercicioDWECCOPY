var valors = [true, 5, false, "hola", "Adios", 2];


const texto1 = "hola";
const texto2 = "Adios";
const textoMasLargo = texto1.length > texto2.length ? texto1 : texto2;

document.getElementById("longitud").innerHTML = "El texto más largo es: " + textoMasLargo;


var sumaNumerica = 0;
for (var i = 0; i < valors.length; i++) {
    if (typeof valors[i] === 'number') {
        sumaNumerica += valors[i];
    }
}


document.getElementById("suma").innerHTML = "La suma de los elementos númericos es:  " + sumaNumerica;