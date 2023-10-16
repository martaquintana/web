function recogeDatos(evento) {
  evento.preventDefault(); // prevenir lo que hace por defecto este boton (bloquea el envio al servidor)

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2022 - fecha; 
  var bienvenida = document.querySelector("#bienvenida");



  // EJERCICIO: declara las variables necesarias (puedes necesitar
  // más de una) para componer el mensaje de bienvenida
  var mensaje_bienvenida;
  mensaje_bienvenida = "Hola " + nombre + ", tienes " + edad + " años"; 
  // EJERCICIO: crea un condicional que dé un mensaje u otro en
  // función de la edad
  var mensaje_edad;
  if (edad < 25){
  	mensaje_edad= ": eres muy joven de que te quejas"
  }else if(edad >30){
	mensaje_edad= ": que viejo eres"
  }else{
   	mensaje_edad= ": ni eres joven ni eres viejo"  
  }

  // EJERCICIO: Realiza la composició del mensaje final y cárgalo
  // en la variable que hayas preparado
  // BONUS: si quieres, puedes comprobar si alguno de los campos
  // está vacío y modificar el mensaje de bienvenida para pedir
  // Que se rellene

  if(nombre ==''){ 
	mensaje = "Rellena el campo Nombre";
  }else if(fecha ==''){
	mensaje = "Rellena el campo Edad" ;
  } else {
  	mensaje = mensaje_bienvenida + mensaje_edad
  }
  // EJERCICIO: Añade el mensaje final como contenido HTML del
  // nodo que hemos cargado en la variable bienvenida
  console.log(mensaje)
  bienvenida.innerHTML = "<p>" + mensaje + "</p>";
	
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
