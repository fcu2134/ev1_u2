function datos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let carrera = document.getElementById("carrera").value;
    let edad = document.getElementById("edad").value;

    let valid = true;

    if (nombre.length < 3) {
        document.getElementById("nombre").innerHTML = "Debes ingresar al menos 3 caracteres";
        alert("almenos 3 caracteres");
        valid = false;
    } else {
        document.getElementById("nombre").innerHTML = "";
    }

    if (apellido.length < 3) {
        document.getElementById("apellido").innerHTML = "apellido debe tener  al menos 3 caracteres";
        alert("apellido debe tener almenos 3 caracteres");
        valid = false;
    } else {
        document.getElementById("apellido").innerHTML = "";
    }

    if (!/^\d{9}$/.test(telefono)) {
        document.getElementById("telefono").innerHTML = "Ingresa un número de teléfono válido (9 dígitos)";
        alert("revise la cantidad de digitos ");
        valid = false;
    } else {
        document.getElementById("telefono").innerHTML = "";
    }

    if (carrera.length < 3) {
        document.getElementById("carrera").innerHTML = "carrera debe tener al menos 3 caracteres";
        alert("carrera debe tener al menos   3 caracteres");
        valid = false;
    } else {
        document.getElementById("carrera").innerHTML = "";
    }

    if (isNaN(edad) || edad < 0 || edad > 120) {
        document.getElementById("edad").innerHTML = "Ingresa una edad válida";
        alert("ingrese una edad válida");
        valid = false;
    } else {
        document.getElementById("edad").innerHTML = "";
    }

    if (valid) {
        alert("Datos enviados correctamente");
    } else {
        alert("Mensaje no enviado. Revisa los datos ingresados.");
    }
}
