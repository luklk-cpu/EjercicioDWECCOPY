document.getElementById("tirar").addEventListener('click', function(){

    let e = document.getElementById("numCarasDado");
    let numCaras = e.options[e.selectedIndex].value;

    let resultado = Math.floor(Math.random() * numCaras) + 1 ;

    document.getElementById("resultado").innerText = resultado;
})