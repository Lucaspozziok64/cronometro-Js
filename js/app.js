let startTime, intervalId;

function formatoCronometro(ms) {
  const milliseconds = ms % 1000;
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
    .toString()
    .padStart(3, "0")}`;
}

function iniciar() {
  startTime = Date.now();
  const timerElement = document.querySelector(".fs-1");
  intervalId = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    timerElement.textContent = formatoCronometro(elapsedTime);
  }, 1); // Actualizar cada 1 milisegundo
  return intervalId;
}

function parar() {
  clearInterval(intervalId)
}
