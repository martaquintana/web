function iniciarReparto() {

  movimientos = 0;
  aciertos= 0;
  errores = 0;
  clearInterval(cronometro);
  if (!modoRelax) {
    iniciarCronometro();
    document.querySelector(".menu").classList.add("oculto");
  } else {
    document.querySelector(".crono").classList.add("oculto");
    document.querySelector(".movm").classList.add("oculto");
    document.querySelector(".cabecera").classList.add("left");

  }
  document.querySelector(".cabecera").classList.remove("oculto");

  reparteTarjetas(niveles[nivelActual].tarjetas);
  document.querySelector("#mov").innerText= "00";
  document.querySelector("#aciertos").innerText= "0";
  document.querySelector("#errores").innerText= "0";
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");

	
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });
}

function iniciarRepartoRelaxMode() {
  movimientos = 0;
  aciertos= 0;
  errores = 0;
  clearInterval(cronometro);
  iniciarCronometro();
  reparteTarjetas(niveles[nivelActual].tarjetas);
  document.querySelector("#mov").innerText= "00";
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");

	
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });
}

function relaxMode() {
    modoRelax = true;
    iniciarReparto();
}

document.querySelector(".boton-repartir").addEventListener("click", iniciarReparto);


document.querySelector(".relax").addEventListener("click",relaxMode);

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);


