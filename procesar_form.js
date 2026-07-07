window.onload = function () {
    let elementos = document.querySelectorAll('.alert');
    elementos.forEach((elemento) => {
        elemento.style.display = 'none';
    })
};

function cancelarFormulario() {
    document.getElementById('miFormulario').reset();
    
    let inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.classList.remove('inputInvalido', 'is-invalid', 'is-valid');
    });

    let alertas = document.querySelectorAll('.alert');
    alertas.forEach(alerta => {
        alerta.style.display = 'none';
    });
}

function validarFormulario() {
    let campoNombre = document.getElementById('input_nombre');
    let campoUsuario = document.getElementById('input_usuario');
    let campoEmail = document.getElementById('input_email');
    let campoFecha = document.getElementById('input_fecha');
    let campoWeb = document.getElementById('input_web');

    let formularioValido = true;

    if (!validarInput(campoNombre)) { formularioValido = false; }
    if (!validarInput(campoUsuario)) { formularioValido = false; }
    if (!validarEmail(campoEmail)) { formularioValido = false; }
    if (!validarInput(campoFecha)) { formularioValido = false; }
    if (!validarInput(campoWeb)) { formularioValido = false; }

    if (formularioValido) {
        let nuevoRegistro = {
            nombre: campoNombre.value,
            usuario: campoUsuario.value,
            email: campoEmail.value,
            fecha: campoFecha.value,
            sitioWeb: campoWeb.value
        };

        let baseDatos = [];
        baseDatos.push(nuevoRegistro);
        console.log("Datos almacenados:", baseDatos);

        alert('El envío de datos ha sido correcto.');
        cancelarFormulario();
        window.location.href = 'index.html';
    } else {
        alert('Solucione los problemas de su formulario antes de ser enviado...');
    }
}

function validarInput(elemento) {
    if (elemento.value.trim() === '') {
        elemento.nextElementSibling.style.display = 'block';
        elemento.nextElementSibling.textContent = 'El campo es OBLIGATORIO!';
        elemento.classList.add('inputInvalido', 'is-invalid');
        return false;
    } else {
        elemento.nextElementSibling.style.display = 'none';
        elemento.nextElementSibling.textContent = '';
        elemento.classList.remove('inputInvalido', 'is-invalid');
        elemento.classList.add('is-valid');
        return true;
    }
}

function validarEmail(elemento) {
    if (validarInput(elemento)) {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regexEmail.test(elemento.value)) {
            elemento.nextElementSibling.style.display = 'none';
            elemento.nextElementSibling.textContent = '';
            elemento.classList.remove('inputInvalido', 'is-invalid');
            elemento.classList.add('is-valid');
            return true;
        } else {
            elemento.nextElementSibling.style.display = 'block';
            elemento.nextElementSibling.textContent = 'Email inválido!';
            elemento.classList.add('inputInvalido', 'is-invalid');
            return false;
        }
    }
}
