// helpers.js

// Función para formatear números con coma para las poblaciones
export const formatPopulation = (population) => {
    return population.toLocaleString();
  };
  
  // Función para obtener el color de la gráfica basado en la población
  export const getBarColor = (population) => {
    if (population > 1000000000) return 'rgba(255, 99, 132, 0.6)';  // Rojo para población > 1B
    if (population > 500000000) return 'rgba(75, 192, 192, 0.6)';  // Verde para población > 500M
    return 'rgba(153, 102, 255, 0.6)';  // Morado para poblaciones más pequeñas
  };
  
  // Función para ordenar los países por población de mayor a menor
  export const sortCountriesByPopulation = (countries) => {
    return countries.sort((a, b) => b.population - a.population);
  };
  