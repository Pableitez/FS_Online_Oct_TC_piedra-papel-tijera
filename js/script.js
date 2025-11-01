// Capturamos todos los elementos del HTML que necesitamos

const botones = document.querySelectorAll('.boton-jugada'); // los tres opciones
const resultados = document.getElementById('resultados'); // resultado
const contadorUsuario = document.getElementById('contador-usuario'); // usuario
const contadorOrdenador = document.getElementById('contador-ordenador'); // máquina
const botonReiniciar = document.getElementById('reiniciar');    // Botón de reinicio

// Inicializamos los puntos

let puntosUsuario = 0;
let puntosOrdenador = 0;

// Añadimos los event listeners a los botones
botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    const eleccionUsuario = boton.dataset.jugada;
    jugarRonda(eleccionUsuario);
  });
});

botonReiniciar.addEventListener('click', function () {
  reiniciarPartida();
});

// Función para jugar una ronda
function jugarRonda(eleccionUsuario) {
  const opciones = ['piedra', 'papel', 'tijera'];
  const eleccionOrdenador = opciones[Math.floor(Math.random() * 3)];
  let resultado = '';
  if (eleccionUsuario === eleccionOrdenador) {
    resultado = '¡Empate!';
  } else if (
    (eleccionUsuario === 'piedra' && eleccionOrdenador === 'tijera') ||
    (eleccionUsuario === 'papel' && eleccionOrdenador === 'piedra') ||
    (eleccionUsuario === 'tijera' && eleccionOrdenador === 'papel')
  ) {
    resultado = '¡Ganaste!';
    puntosUsuario++;
  } else {
    resultado = '¡Perdiste!';
    puntosOrdenador++;
  }
  resultados.textContent = `Elegiste ${eleccionUsuario}, la máquina eligió ${eleccionOrdenador}. ${resultado}`;

  contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
  contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
}

// Función para reiniciar la partida
function reiniciarPartida() {
  puntosUsuario = 0;
  puntosOrdenador = 0;
  contadorUsuario.textContent = 'Tus puntos: 0';
  contadorOrdenador.textContent = 'Puntos de la máquina: 0';
  resultados.textContent = 'Haz tu jugada...';
}
