
 const fechaInicial = new Date('2015-01-01T01:00:01');
 const fechaFinal = new Date('2015-02-14T02:05:23');


 const diferencia = fechaFinal - fechaInicial;

 
 const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)); 
 const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
 const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)); 
 const segundos = Math.floor((diferencia % (1000 * 60)) / 1000); 

 
 const resultado = "Entre " +  fechaInicial + " y el " + fechaFinal + " hay " + dias + " días, " +  horas + " horas, " + minutos + " minutos, " +  segundos+ " segundos.";
 document.getElementById('resultado').textContent = resultado;