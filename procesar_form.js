window.onload = function () {
    let elementos = document.querySelectorAll('.alert');
    elementos.forEach((elemento) => {
        elemento.style.display = 'none';
    });
};

function validarInput(elemento) {
    if (elemento.value.trim() === '') {
        elemento.nextElementSibling.style.display = 'block';
        elemento.nextElementSibling.textContent = 'El campo es OBLIGATORIO.';
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
            elemento.classList.remove('inputInvalido', 'is-invalid');
            elemento.classList.add('is-valid');
            return true;
        } else {
            elemento.nextElementSibling.style.display = 'block';
            elemento.nextElementSibling.textContent = 'Formato de Email inválido (usuario@servidor.dom).';
            elemento.classList.add('inputInvalido', 'is-invalid');
            return false;
        }
    }
    return false;
}

function validarWeb(elemento) {
    if (elemento.value.trim() !== '') {
        try {
            new URL(elemento.value);
            elemento.nextElementSibling.style.display = 'none';
            elemento.classList.remove('inputInvalido', 'is-invalid');
            elemento.classList.add('is-valid');
            return true;
        } catch (_) {
            elemento.nextElementSibling.style.display = 'block';
            elemento.nextElementSibling.textContent = 'Ingrese una URL válida (ej: https://www.ejemplo.com).';
            elemento.classList.add('inputInvalido', 'is-invalid');
            return false;
        }
    } else {
        elemento.classList.remove('is-invalid', 'is-valid');
        elemento.nextElementSibling.style.display = 'none';
        return true; 
    }
}

function cancelarFormulario() {
    let formulario = document.getElementById('miFormulario');
    formulario.reset();
    
    let inputs = formulario.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.classList.remove('is-valid', 'is-invalid', 'inputInvalido');
    });

    let alertas = formulario.querySelectorAll('.alert');
    alertas.forEach(alerta => {
        alerta.style.display = 'none';
    });
}

function validarFormulario() {
    let campoNombre = document.getElementById('input_nombre');
    let campoUsuario = document.getElementById('input_usuario');
    let campoFecha = document.getElementById('input_fecha');
    let campoEmail = document.getElementById('input_email');
    let campoWeb = document.getElementById('input_web');

    let formularioValido = true;

    if (!validarInput(campoNombre)) formularioValido = false;
    if (!validarInput(campoUsuario)) formularioValido = false;
    if (!validarInput(campoFecha)) formularioValido = false; 
    if (!validarEmail(campoEmail)) formularioValido = false;
    if (!validarWeb(campoWeb)) formularioValido = false;

    if (formularioValido) {
        let nuevoUsuario = {
            nombre: campoNombre.value,
            usuario: campoUsuario.value,
            fecha: campoFecha.value,
            email: campoEmail.value,
            sitioWeb: campoWeb.value
        };

        let baseDatosSimulada = []; 
        baseDatosSimulada.push(nuevoUsuario); 
        console.log("Datos listos para enviar al backend: ", baseDatosSimulada);

        alert('Validación exitosa. El envío de datos ha sido correcto.');
        cancelarFormulario(); 
        
        window.location.href = 'index.html'; 
    } else {
        alert('Solucione los problemas de su formulario antes de ser enviado.');
    }
}
