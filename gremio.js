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

  reclutar: function (nombre, clase = "Aventurero") {
    const nuevoHeroe = {
      nombre: nombre,
      clase: clase,
      nivel: 1,
      oro: 0,
      vida: 100,
    };

    this.heroes.push(nuevoHeroe);
    console.log(`🛡️ ${nombre} el ${clase} se unió al gremio`);
  },

  enviarMision: function (nombreHeroe) {
    const heroe = buscarHeroe(nombreHeroe);

    if (!heroe) {
      console.log(`No existe un héroe llamado ${nombreHeroe}`);
      return;
    }

    if (heroe.vida === 0) {
      console.log(`☠️ ${heroe.nombre} está caído y no puede ir a la misión`);
      return;
    }

    const exito = Math.random() < 0.6;

    if (exito) {
      const oroGanado = tirarDado(50);
      heroe.oro += oroGanado;
      heroe.nivel += 1;

      console.log(
        `⚔️ ${heroe.nombre} triunfó! +${oroGanado} oro, ahora nivel ${heroe.nivel}`
      );
    } else {
      const dano = tirarDado(30);
      heroe.vida = Math.max(0, heroe.vida - dano);

      console.log(`🩸 ${heroe.nombre} fue herido (queda ${estadoVida(heroe.vida)})`);
    }
  },
  
  ranking: function () {
    const heroesOrdenados = [...this.heroes].sort((a, b) => b.nivel - a.nivel);

    console.log("== Ranking por nivel ==");

    for (let i = 0; i < heroesOrdenados.length; i++) {
      const { nombre, nivel } = heroesOrdenados[i];
      console.log(`  ${i + 1}. ${nombre} - Nivel ${nivel}`);
    }
  },

  tesoro: function () {
    return this.heroes.reduce((acumulador, heroe) => acumulador + heroe.oro, 0);
  },

  vivos: function () {
    return this.heroes.filter((heroe) => heroe.vida > 0);
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

console.log("%cEtapa 4 · Reclutar (valor por defecto)", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Agrega el método reclutar(nombre, clase). Debe:
//   - crear un héroe nuevo (nivel 1, 0 oro, 100 vida)
//   - agregarlo al roster
//   - la clase debe tener valor por defecto "Aventurero"


// Prueba: gremio.reclutar("Gimli", "Guerrero");  y  gremio.reclutar("Sam");
gremio.reclutar("Gimli", "Guerrero");
gremio.reclutar("Sam");

console.log("")

console.log("%cEtapa 5 · Enviar a una misión (Math)", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Agrega el método enviarMision(nombreHeroe). Debe:
//   1) buscar el héroe (reutiliza buscarHeroe). Si no existe o está caído, avisar y terminar
//   2) decidir con la suerte si hay éxito (60% de probabilidad)
//   3) si gana: sumar oro (tirarDado) y subir un nivel
//      si pierde: restarle vida (tirarDado), evitando que quede negativa

// Prueba: gremio.enviarMision("Aragorn");  (varias veces, el azar cambia)
gremio.enviarMision("Aragorn");
gremio.enviarMision("Aragorn");
gremio.enviarMision("Legolas");

console.log("")

console.log("%cEtapa 6 · El ranking (sort)", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Agrega el método ranking(). Debe:
//   - mostrar los héroes ordenados por nivel, de MAYOR a menor
//   - ordenar sobre una COPIA del arreglo (no sobre el roster real)

// Fuera: gremio.ranking();
gremio.ranking();

console.log("")

console.log("%cEtapa 7 · Tesoro y bajas (reduce + filter)", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Agrega dos métodos:
//   tesoro() -> devuelve la suma del oro de TODOS los héroes
//   vivos()  -> devuelve los héroes con vida mayor a 0

// Luego muestra el tesoro y los NOMBRES de los héroes vivos.
console.log(`Tesoro del gremio: ${gremio.tesoro()} oro`);
console.log(`Héroes en pie:`, gremio.vivos().map((heroe) => heroe.nombre));

console.log("")