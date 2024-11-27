document.getElementById('enviar').addEventListener('click', function(){
    let email = document.getElementById('email').value;
    let posicionArroba = email.indexOf("@");

    let usuario = email.slice(0, posicionArroba);
    let dominio = email.slice(posicionArroba + 1);
    

    document.getElementById('usuario').innerText = "El usuario es: " + usuario;
    document.getElementById('dominio').innerText = "El dominio es: " + dominio;
})