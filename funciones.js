function agregarBanda() {

    var nombreBanda = document.getElementById('nombreBanda').value;
    var imagenBandera = document.getElementById('imagenBandera').value;
    var liderBanda = document.getElementById('liderBanda').value;
    var recompensaLider = document.getElementById('recompensaLider').value;
    var NombreBarco = document.getElementById('nombreBarco').value;
    var ContramaestreBanda = document.getElementById('contramaestreBanda').value;
    var MiembrosImportantes = document.getElementById('miembrosImportantes').value;
    var BandaActiva = document.getElementById('bandaActiva').value;

    var banda = {
        id: generarId(),
        nombreBanda: nombreBanda,
        imagenBandera: imagenBandera,
        liderBanda: liderBanda,
        recompensaLider: recompensaLider,
        NombreBarco: NombreBarco,
        ContramaestreBanda: ContramaestreBanda,
        MiembrosImportantes: MiembrosImportantes,
        BandaActiva: BandaActiva

    };
    var bandasGuardadas = JSON.parse(localStorage.getItem("bandas")) || [];

    bandasGuardadas.push(banda);

    localStorage.setItem('bandas', JSON.stringify(bandasGuardadas));


}


function generarId() {
    return '_' + Math.random().toString(36).substr(2, 9);

}
