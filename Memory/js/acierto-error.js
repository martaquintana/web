function acierto(lasTarjetas){
	lasTarjetas.forEach(function(elemento) {
		elemento.classList.add("acertada");		
	});

	  document.querySelector("#sonido-acierto").play();
	aciertos += 1;
        document.querySelector("#aciertos").innerHTML=aciertos;
}


function error(lasTarjetas){
	lasTarjetas.forEach(function(elemento) {
			elemento.classList.add("error");		
		});


// EJERCICIO: quita las clases de descubierta y error, dentro de
  // un Timeout de 1000 ms
setTimeout(function(){
   	lasTarjetas.forEach(function(elemento) {
		elemento.classList.remove("descubierta");
		elemento.classList.remove("error");				
	});
},1000);
	errores += 1;
        document.querySelector("#sonido-error").play();
        document.querySelector("#errores").innerHTML=errores
}

//BONUS: crea una variable global que haga un recuento de aciertos
// y errores o de los movimientos realizados. Cada vez que haya un
// cambio, se puede hacer un console.log() del contador


