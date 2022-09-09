function subeNivel() {
  nivelActual++;
}

function actualizaNivel() {
  var nivelTexto = nivelActual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }
  document.querySelector("#nivel").innerText = nivelTexto;
  var movMax = niveles[nivelActual].movimientosMax;
  if (movMax < 10) {
    movMax = "0" + niveles[nivelActual].movimientosMax;;
  }
  document.querySelector("#mov-total").innerText = movMax;
}

function cargaNuevoNivel() {
  subeNivel();
  actualizaNivel();
  iniciarReparto()
}

function cargaNivel(level) {
  nivelActual= level;
  var nivelTexto = nivelActual;
  if (nivelActual < 9) {
    nivelTexto = "0" + (nivelTexto+1);
  }else{
    nivelTexto = (nivelTexto+1)
  }
  document.querySelector("#nivel").innerText = nivelTexto ;
  iniciarReparto()
}
