// Configuración inicial: tiempo restante en milisegundos (por ejemplo, 1 día, 5 horas, 59 minutos y 47 segundos)
let timeRemaining = 0 * 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000 + 59 * 60 * 1000 + 47 * 1000;

// Referencias a los elementos del DOM
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Función para actualizar el reloj
function updateTimer() {
    if (timeRemaining <= 0) {
        clearInterval(timerInterval); // Detener el temporizador cuando llega a 0
        return;
    }

    // Calcular días, horas, minutos y segundos
    const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

    // Actualizar el DOM con los valores calculados
    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");

    // Reducir el tiempo restante en 1 segundo
    timeRemaining -= 1000;
}

// Configurar el intervalo para actualizar cada segundo
const timerInterval = setInterval(updateTimer, 1000);

// Inicializar el reloj inmediatamente para evitar el retraso del primer segundo
updateTimer();