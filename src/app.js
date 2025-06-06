// Arrays con las partes de la excusa
let who = ['El perrete', 'Mi abuela', 'El de Correos', 'Mi tortuga'];
let action = ['se comió', 'se meó en', 'aplastó', 'rompió'];
let what = ['mis deberes', 'mi teléfono', 'mi coche'];
let when = ['antes de clase', 'mientras dormía', 'mientras entrenaba', 'mientras comía', 'mientras dormía'];

// Función que genera una excusa aleatoria combinando elementos de los arrays
function generateExcuse() {
  let whoRandom = who[Math.floor(Math.random() * who.length)];
  let actionRandom = action[Math.floor(Math.random() * action.length)];
  let whatRandom = what[Math.floor(Math.random() * what.length)];
  let whenRandom = when[Math.floor(Math.random() * when.length)];

  // Se devuelve la excusa final como una cadena de texto
  return `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`;
}

// Ejecutar cuando la página haya terminado de cargar
window.onload = function () {
  // Se selecciona el elemento con el id "excuse"
  const excuseElement = document.getElementById('excuse');

  // Se cambia el contenido del elemento con la excusa generada
  excuseElement.innerHTML = generateExcuse();
};




