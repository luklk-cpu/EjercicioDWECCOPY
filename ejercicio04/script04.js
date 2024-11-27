document.getElementById('enviar').addEventListener('click', function(){

    let valor = document.getElementById('radio').value; 

    let area = Math.PI * Math.pow(valor, 2);
    let longitud = 2 * Math.PI * valor;

    document.getElementById('parrafo').innerText = "El area es " + area + " y la longitud " + longitud;

});