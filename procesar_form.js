function validarFormulario() {
    let campoNombre = document.getElementById('inp-nm');
    let campoRut = document.getElementById('inp-rt');
    let campoEmail = document.getElementById('inp-em');
    let campoContraseña = document.getElementById('inp-ps');
    let campoConfirmarContraseña = document.getElementById('inp-cp');
    let campoFechaNacimiento = document.getElementById('inp-fn');

    let vNombre = validarInput(campoNombre);
    let vRut = validarInput(campoRut);
    let vEmail = validarInput(campoEmail);
    let vFecha = validarInput(campoFechaNacimiento);
    let vContraseña = validarInput(campoContraseña);
    let vConfirmar = validarInput(campoConfirmarContraseña);

    if (vNombre && vRut && vEmail && vFecha && vContraseña && vConfirmar) {
        if (campoContraseña.value !== campoConfirmarContraseña.value) {
            campoConfirmarContraseña.classList.add('inputInvalido');
            alert('Las contraseñas no coinciden.');
        } else {
            alert('¡Envío de datos correcto!');
            document.getElementById('frm-rg').reset();
        }
    } else {
        alert('Por favor, complete todos los campos obligatorios.');
    }
}

function validarInput(elemento) {
    if (elemento.value == '') {
        elemento.classList.add('inputInvalido');
        return false;
    } else {
        elemento.classList.remove('inputInvalido');
        return true;
    }
}

function limpiarFormulario() {
    document.getElementById('frm-rg').reset();
    let inputs = document.querySelectorAll('.form-control');
    inputs.forEach(function (elemento) {
        elemento.classList.remove('inputInvalido');
    });
}