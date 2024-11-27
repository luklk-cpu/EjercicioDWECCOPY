const fecha = new Date();

const dia = fecha.getDay();

let diaConLetras = " ";

switch (dia) {
  case 1:
    diaConLetras = "Lunes";
    break;
  case 2:
    diaConLetras = "Martes";
    break;
  case 3:
    diaConLetras = "Miércoles";
    break;
  case 4:
    diaConLetras = "Jueves";
    break;
  case 5:
    diaConLetras = "Viernes";
    break;
  case 6:
    diaConLetras = "Sábado";
    break;
  case 7:
    diaConLetras = "Domingo";
    break;
}

document.getElementById("dia").innerHTML = diaConLetras;