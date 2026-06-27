# Gremio JS

Proyecto de práctica en JavaScript orientado a objetos, arreglos y métodos de iteración, construido por etapas sobre un sistema de gremio con héroes, misiones y menú interactivo.

## Descripción

El archivo `gremio.js` modela un gremio llamado **Los Valientes** usando un objeto principal con un roster de héroes, donde cada héroe también es un objeto con propiedades como nombre, clase, nivel, oro y vida.

A lo largo de las etapas se agregan funciones utilitarias, métodos del objeto y un menú con `do/while` para interactuar con el sistema sin repetir lógica.

## Contenidos

Este proyecto practica conceptos clave de JavaScript:

- Objetos y arreglos de objetos.
- Acceso a propiedades con notación punto y corchetes.
- Arrow functions y parámetros por defecto.
- Métodos de arreglo como `find`, `filter`, `map`, `reduce` y `sort`.
- `destructuring`, `Object.entries()` y operador spread `...`.
- Uso de `Math.random()` y `Math.max()` para lógica de misiones.
- Menú interactivo con `prompt()` y ciclo `do/while`.

## Funcionalidades

El proyecto incluye las siguientes acciones:

- Ver el roster completo del gremio.
- Buscar héroes sin importar mayúsculas o minúsculas.
- Reclutar nuevos héroes con clase por defecto.
- Enviar héroes a misiones con resultado aleatorio.
- Ver el ranking por nivel sin modificar el arreglo original.
- Calcular el tesoro total del gremio.
- Obtener los héroes que siguen con vida.
- Mostrar la ficha completa de un héroe recorriendo sus propiedades.
- Administrar todo desde un menú interactivo.

## Estructura general

```js
const gremio = {
  nombre: "Los Valientes",
  heroes: [ ... ],
  verRoster() { ... },
  reclutar() { ... },
  enviarMision() { ... },
  ranking() { ... },
  tesoro() { ... },
  vivos() { ... },
  fichaHeroe() { ... }
};
```

Además, el proyecto utiliza funciones externas como `buscarHeroe`, `estadoVida` y `tirarDado` para reutilizar lógica y mantener los métodos del objeto más limpios.

## Cómo usarlo

1. Abre el archivo `gremio.js` en tu editor.
2. Ejecuta el archivo en un entorno que soporte JavaScript en navegador si quieres usar `prompt()` en el menú.
3. Revisa la salida en consola para ver cada etapa.
4. Interactúa con el menú final para administrar el gremio.

## Ejemplo de flujo

```js
gremio.verRoster();
gremio.reclutar("Gimli", "Guerrero");
gremio.enviarMision("Aragorn");
gremio.ranking();
console.log(gremio.tesoro());
console.log(gremio.vivos().map((heroe) => heroe.nombre));
gremio.fichaHeroe("Gandalf");
```

## Aprendizajes

Este ejercicio ayuda a reforzar la manipulación de datos con objetos y arreglos, la reutilización de funciones y el diseño de métodos sobre un objeto principal, que son bases importantes del lenguaje JavaScript.

También permite practicar lógica condicional, validaciones, guard clauses y organización progresiva del código en un proyecto pequeño pero integrador.

## Puedes ver el resultado en:

https://zakkdruzer.github.io/gremio-aventureros/
