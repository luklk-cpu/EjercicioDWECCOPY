document.getElementById("calcularBtn").addEventListener("click", function() {
    var n = parseInt(document.getElementById("numero").value);

    // Comprobar si el número es un entero positivo o cero
    if (isNaN(n) || n < 0) {
        alert("Por favor, introduce un número entero positivo o cero.");
        return;
    }

    var factorial = 1;

    // Si el número es mayor que 0, calculamos el factorial
    for (var i = 1; i <= n; i++) {
        factorial *= i;  
    }

    document.getElementById("resultado").innerHTML = "El factorial de " + n + " es " + factorial;
});