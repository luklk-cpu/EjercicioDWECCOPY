document.getElementById('enviar').addEventListener('click', function(){
    let texto;
    let valor = document.getElementById('numero').value;
    
    if(valor < -1 || valor > 1){
        texto = "Valor incorrecto";
    }else{
        texto = "Valor correcto";
    }
        document.getElementById('parrafo').innerHTML = texto;


});





