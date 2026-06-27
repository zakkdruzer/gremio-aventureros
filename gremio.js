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
  verRoster: function () {
    console.log(`== Gremio ${this.nombre} ==`);

    for (let i = 0; i < this.heroes.length; i++) {
      const { nombre, clase, nivel, oro, vida } = this.heroes[i];

      console.log(
        `  ${i + 1}. ${nombre} (${clase}) - Nivel ${nivel}, ${oro} oro, ${estadoVida(vida)}`
      );
    }
  },
};

// Muestra el nombre del gremio y el del primer héroe
console.log(`Gremio: ${gremio.nombre}`);
console.log(`Primer héroe: ${gremio.heroes[0].nombre}`);

console.log("")

console.log("%cEtapa 2 · Funciones arrow utilitarias", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Crea 3 funciones arrow (van FUERA del objeto):
//
//   buscarHeroe(nombre) -> el héroe cuyo nombre coincida (sin importar mayúsculas)
const buscarHeroe = (nombre) =>
  gremio.heroes.find(
    (heroe) => heroe.nombre.toLowerCase() === nombre.toLowerCase()
  );

//   estadoVida(vida)    -> "💀 caído" si la vida es 0, o el texto de la vida si está vivo
const estadoVida = (vida) =>
  vida === 0 ? "💀 caído" : `${vida} vida`;

//   tirarDado(max)      -> un número al azar entre 10 y max+9 (max por defecto: 50)
const tirarDado = (max = 50) =>
  Math.floor(Math.random() * max) + 10;

// Después pruébalas con console.log.
console.log(`Encontrado: ${buscarHeroe("gandalf").nombre}`);
console.log(`Estado con 0 vida: ${estadoVida(0)}`);
console.log(`Estado con 100 vida: ${estadoVida(100)}`);
console.log(`Dado: ${tirarDado()}`);

console.log("")

console.log("%cEtapa 3 · Ver el roster (this + for + destructuring)", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Agrega el método verRoster(). Debe:
//   - imprimir un título con el nombre del gremio (this.nombre)
//   - recorrer this.heroes con un ciclo for
//   - por cada héroe, sacar sus datos con destructuring y mostrar su ficha
//     (usa tu función estadoVida para el estado)


// Luego, fuera del objeto: gremio.verRoster();
gremio.verRoster();

console.log("")