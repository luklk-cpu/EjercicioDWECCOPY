
document.getElementById('calcular').addEventListener('click',function(){
    let valor1 = document.getElementById('numero1').value;
    let valor2 = document.getElementById('numero2').value; 

    let resultado;

    
        resultado = -valor2/valor1;
    
      document.getElementById('parrafo').innerHTML = "Resultado: " +  resultado; 

})