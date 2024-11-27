let texto = prompt("Escribe una cadena de texto");

let palabras = texto.trim().split(/\s+/);

let numPalabras = palabras.length;

console.log("Hay " + numPalabras + " palabras");

let primeraPalabra = palabras[0];
let ultimaPalabra = palabras[numPalabras-1];

console.log("La primera palabra es: " + primeraPalabra);
console.log("La última palabra es: " + ultimaPalabra);

let fraseInversa = palabras.reverse().join(" ");

console.log("Frase invertida: " + fraseInversa);

let palabrasAZ = palabras.sort().join(" ");

console.log("Palabras ordenadas de A-Z: " + palabrasAZ);

let palabrasZA = palabras.sort((a,b) =>{

    if(a > b){
        return -1;
    }else if(a < b){
        return 1;
    }else{
        return 0;
    }
}).join(" ");

console.log("Palabras ordenadas de Z-A: " + palabrasZA);


let textoInvertido = texto.split('').reverse().join('');

if(textoInvertido === texto){
    console.log("Es palindromo");
}else{
    console.log("No es palindromo");
}

     




