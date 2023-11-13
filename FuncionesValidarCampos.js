
function validarNombreBanda(nombreBanda) {
    const isValid = nombre.length > 4 && !/\d/.test(nombre);
    mostrarMensajeError('nombreBanda', isValid, 'El nombre de la banda debe tener más de 4 caracteres y no puede contener números.');
    return isValid;
}

function validarURLBandera(imagenBandera) {
    const isValid = /^(ftp|http|https):\/\/[^ "]+$/.test(imagenBandera);
    mostrarMensajeError('imagenBandera', isValid, 'La URL de la bandera pirata no es válida.');
    return isValid;
}

function validarLiderBanda(liderBanda) {
    const isValid = nombreLider.length > 4 && !/\d/.test(lider);
    mostrarMensajeError('liderBanda', isValid, 'El líder de la banda debe tener más de 4 caracteres y no puede contener números.');
    return isValid;
}

function validarRecompensa(recompensaLider) {
    const isValid = !isNaN(recompensaLider) && parseFloat(recompensaLider) > 1000;
    mostrarMensajeError('recompensaLider', isValid, 'La recompensa del líder de la banda debe ser un número mayor que 1000.');
    return isValid;
}

function validarNombreBarco(NombreBarco) {
    const isValid = /^[a-zA-Z]+$/.test(NombreBarco);
    mostrarMensajeError('NombreBarco', isValid, 'El nombre del barco de la banda debe contener solo caracteres y no puede ser un número.');
    return isValid;
}


function validarContramaestre(ContramaestreBanda) {
    const isValid = /^[a-zA-Z]+$/.test(ContramaestreBanda);
    mostrarMensajeError('ContramaestreBanda', isValid, 'El contramaestre de la banda debe contener solo caracteres.');
    return isValid;
}

function validarNumeroMiembros(MiembrosImportantes) {
    const isValid = !isNaN(MiembrosImportantes) && parseInt(MiembrosImportantes) <= 5;
    mostrarMensajeError('numeroMiembros', isValid, 'El número de miembros importantes de la banda debe ser un número menor o igual a 5.');
    return isValid;
}


function validarBandaActiva(bandaActiva) {
    const isValid = typeof bandaActiva === 'boolean';
    mostrarMensajeError('bandaActiva', isValid, 'La banda activa debe ser un valor booleano (true o false).');
    return isValid;
}

function mostrarMensajeError(campo, isValid, mensaje) {
    const elementoError = document.getElementById(`${campo}Error`);
    elementoError.innerText = mensaje;



    if (isValid) {
        elementoError.style.display = 'none';
    } else {
        elementoError.style.display = 'block';
    }
}




