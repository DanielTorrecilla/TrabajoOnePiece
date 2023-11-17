function agregarMiembro() {
    // Obtén el contenedor de los miembros de la banda
    var miembrosContainer = document.getElementById('miembrosBandaContainer');
    
    // Verifica que no se haya alcanzado el máximo de 5 miembros
    if (miembrosContainer.childElementCount >= 5) {
      return;
    }
    
    // Crea los elementos del subformulario
    var subformulario = document.createElement('div');
    subformulario.innerHTML = `
      <label for="nombreMiembro">Nombre:</label>
      <input type="text" id="nombreMiembro"><br>
      <label for="procedenciaMiembro">Procedencia:</label>
      <input type="text" id="procedenciaMiembro"><br>
      <label for="recompensaMiembro">Recompensa:</label>
      <input type="number" id="recompensaMiembro"><br>
      <button type="button" onclick="eliminarMiembro(this)">-</button>
    `;
    
    // Agrega el subformulario al contenedor
    miembrosContainer.appendChild(subformulario);
  }
  
  function eliminarMiembro(button) {
    // Obtén el contenedor del miembro
    var miembro = button.parentNode;
    
    // Remueve el miembro del contenedor
    miembro.parentNode.removeChild(miembro);
  }