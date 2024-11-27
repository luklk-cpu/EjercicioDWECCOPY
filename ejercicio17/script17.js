function calcularEdad(fechaNacimiento) {
    const hoy = new Date(); 
    const fechaNacimientoDate = new Date(fechaNacimiento); 

    let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear(); // Comienzamos con la diferencia de años
    const mes = hoy.getMonth(); // Mes actual (0-11)
    const dia = hoy.getDate(); // Día del mes actual

    // Ajusta la edad si el cumpleaños aún no ha ocurrido este año
    if (mes < fechaNacimientoDate.getMonth() || (mes === fechaNacimientoDate.getMonth() && dia < fechaNacimientoDate.getDate())) {
        edad--; // Si no ha llegado el cumpleaños, restamos 1
    }

    return edad;
}


const fechaNacimiento = "1984-01-07"; 


const edad = calcularEdad(fechaNacimiento);


document.getElementById('resultado').textContent = "Tu edad es: " +  edad + " años.";