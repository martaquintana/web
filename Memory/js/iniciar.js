function iniciarReparto() {
  movimientos = 0;
  aciertos= 0;
  errores = 0;
  clearInterval(cronometro);
  iniciarCronometro();
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

document.querySelector(".boton-repartir").addEventListener("click", iniciarReparto);


document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);


