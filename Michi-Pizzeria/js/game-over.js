function gameOver() {
  clearInterval(cronometro);
  nivelActual= 0;
  document.querySelector("#gameOver").classList.add("visible");

}
