// Función para generar informes de bandas activas
function generarInformeBandasActivas(bandas) {
    // Filtra bandas activas
    const bandasActivas = bandas.filter(banda => banda.activa);
  
    // Ordena por recompensa del líder (de mayor a menor)
    bandasActivas.sort((a, b) => b.recompensaLider - a.recompensaLider);
  
    // Luego, ordena por número de miembros y nombre de la banda
    bandasActivas.sort((a, b) => {
      if (a.numeroMiembros === b.numeroMiembros) {
        return a.nombreBanda.localeCompare(b.nombreBanda);
      }
      return a.numeroMiembros - b.numeroMiembros;
    });
  
    // Devuelve la lista ordenada y filtrada
    return bandasActivas;
  }
  
  // Función para ordenar la lista de bandas por recompensa del líder
  function ordenarBandasPorRecompensa(bandas) {
    return bandas.sort((a, b) => b.recompensaLider - a.recompensaLider);
  }
  
  // Función para ordenar la lista de bandas por número de miembros
  function ordenarBandasPorNumeroMiembros(bandas) {
    return bandas.sort((a, b) => a.numeroMiembros - b.numeroMiembros);
  }
  
  // Función para ordenar la lista de bandas por nombre
  function ordenarBandasPorNombre(bandas) {
    return bandas.sort((a, b) => a.nombreBanda.localeCompare(b.nombreBanda));
  }
  
//esto para hacerlo solo de piratas en vez de bandas, he puesto recompensa, pero puede ser cualquier cosa
  function generarInformePiratas(piratas) {
    // Filtra piratas con recompensa
    const piratasConRecompensa = piratas.filter(pirata => pirata.recompensa);
  
    // Ordena por recompensa (de mayor a menor)
    piratasConRecompensa.sort((a, b) => b.recompensa - a.recompensa);
  
    // Devuelve la lista ordenada y filtrada
    return piratasConRecompensa;
  }

  //esto de ejemplo pedazo nigger.
  const informeBandas = generarInformeBandasActivas(bandas);
  console.log("Informe de Bandas Activas:", informeBandas);
  