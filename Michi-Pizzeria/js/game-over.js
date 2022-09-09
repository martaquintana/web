function gameOver() {
  clearInterval(cronometro);
  nivelActual= 0;
  document.querySelector("#gameOver").classList.add("visible");

}

function gameOverTime() {
  clearInterval(cronometro);
  nivelActual= 0;
  document.querySelector("#gameOverTime").classList.add("visible");

}
