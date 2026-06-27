console.log("%cEtapa 1 · El gremio nace", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

const gremio = {
  nombre: "Los Valientes",
  heroes: [
    { nombre: "Aragorn", clase: "Guerrero", nivel: 5, oro: 120, vida: 100 },
    { nombre: "Gandalf", clase: "Mago",     nivel: 8, oro: 200, vida: 80 },
    { nombre: "Legolas", clase: "Arquero",  nivel: 3, oro: 90,  vida: 0 },
  ],

  // En las próximas etapas agregarás métodos AQUÍ dentro.
};

// Muestra el nombre del gremio y el del primer héroe
console.log(`Gremio: ${gremio.nombre}`);
console.log(`Primer héroe: ${gremio.heroes[0].nombre}`);

console.log("")