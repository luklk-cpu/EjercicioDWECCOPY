let img = document.getElementById("imagen");

const sobreAbierto = "img/envelope_open_thin_icon_171803.webp"
const sobreCerrado = "img/envelope_close.png";
img.onclick = cambio;

function cambio(evento) {
  if(img.src.endsWith(sobreAbierto)){
    img.src = sobreCerrado;
  }else{
    img.src = sobreAbierto;
  }
}


