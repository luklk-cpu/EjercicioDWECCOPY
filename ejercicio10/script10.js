document.getElementById('enviar').addEventListener('click', function(){
    let num = parseInt(document.getElementById('texto').value);

    let parrafo = document.getElementById('respuesta');

    parrafo.innerText = "El número en octal se escribe: " + num.toString(8);
})