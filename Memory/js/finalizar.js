function finalizar() {
  clearInterval(cronometro);
  if (nivelActual < niveles.length - 1) {
    document.querySelector("#subeNivel").classList.add("visible");
  } else {
    document.querySelector("#endGame").classList.add("visible");
  }
}

function gameOver() {
  clearInterval(cronometro);
  document.querySelector("#gameOver").classList.add("visible");
}

function timeOver() {
  document.querySelector("#timeOver").classList.add("visible");
}
