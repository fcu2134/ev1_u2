function datos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let carrera = document.getElementById("carrera").value;
    let edad = document.getElementById("edad").value;

    let valid = true;

    if (nombre.length < 3) {
        document.getElementById("nombre").innerHTML = "Debes ingresar al menos 3 caracteres";
        alert(" nombre debe tener almenos 3 caracteres");
        valid = false;
    } else {
        document.getElementById("nombre").innerHTML = "";
        console.log("nombre:",nombre)
    }

    if (apellido.length < 3) {
        document.getElementById("apellido").innerHTML = "apellido debe tener  al menos 3 caracteres";
        alert("apellido debe tener almenos 3 caracteres");
        valid = false;
    } else {
        document.getElementById("apellido").innerHTML = "";
        console.log("apellido:",apellido)
    }

    if  (!isNaN(telefono) && telefono < 222222222 && telefono > 999999999) {
        document.getElementById("telefono").innerHTML = "Ingresa un número de teléfono válido (9 dígitos)";
        alert("revise la cantidad de digitos del telefono  ");
        valid = false;
    } else {
        document.getElementById("telefono").innerHTML = "";
        console.log("telefono:",telefono)
    }

    if (carrera.length < 3) {
        document.getElementById("carrera").innerHTML = "carrera debe tener al menos 3 caracteres";
        alert("carrera debe tener al menos   3 caracteres");
        valid = false;
    } else {
        document.getElementById("carrera").innerHTML = "";
        console.log("carrera:",carrera)
    }

    if (isNaN(edad) || edad < 17 || edad > 60) {
        document.getElementById("edad").innerHTML = "Ingresa una edad válida";
        alert("ingrese una edad válida");
        valid = false;
    } else {
        document.getElementById("edad").innerHTML = "";
        console.log("edad:",edad)
    }

    if (valid) {
        alert("Datos enviados correctamente");
    } else {
        alert("Mensaje no enviado. Revisa los datos ingresados.");
    }
}
