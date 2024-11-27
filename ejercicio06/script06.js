document.getElementById('enviar').addEventListener('click', function(){
    let email = document.getElementById('email').value;
    let separador = email.split("@");

    let usuario = separador[0];
    let dominio = separador[1];
    

    document.getElementById('usuario').innerText = "El usuario es: " + usuario;
    document.getElementById('dominio').innerText = "El dominio es: " + dominio;
})