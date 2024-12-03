document.getElementById("calcularBtn").addEventListener("click", function() {
   
    var dni = document.getElementById("dniSinLetra").value;

    // Validar si el número de DNI es un número entero de 8 dígitos
    if (!/^\d{8}$/.test(dni)) {
        alert("El número de DNI no es válido. Debe ser un número de 8 dígitos.");
        document.getElementById("dniSinLetra").focus(); // Poner el foco de nuevo en el campo de texto
        return;
    }

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    // Calcular la letra del DNI
    var numeroDNI = parseInt(dni);
    var resto = numeroDNI % 23;
    var letra = letras[resto];

    document.getElementById("resultado").innerHTML = dni + letra;
});


