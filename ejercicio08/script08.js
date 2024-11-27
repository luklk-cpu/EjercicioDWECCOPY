document.getElementById('enviar').addEventListener('click', function(){

    let frase = document.getElementById('frase').innerText;

    let longitud = frase.length;

    let mitad = longitud/2;

    let primeraMitad = frase.slice(0 , mitad);

    let segundaMitad = frase.slice(mitad);

    document.getElementById('primera_mitad').innerHTML =  primeraMitad;

    document.getElementById('segunda_mitad').innerHTML =  segundaMitad;
})