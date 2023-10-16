function iniciarReparto() {
  reparteTarjetas();

  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });
}

document.querySelector(".boton-repartir").addEventListener("click", iniciarReparto);


