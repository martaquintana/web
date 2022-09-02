

//VARIABLES
var mensaje1= "Hola";
console.log(mensaje1);

//"texto" o 'texto' -->  literal

//23 --> numericas

//true o false --> booleanas

//FUNCIONES

function mensaje(){
	var saludo = mensaje1 + " Marta"
	var antisaludo = "No me hables";
	var contento = true;

	if (contento === true){
		console.log(saludo)
 	}else{
		console.log(antisaludo)
	}
}	

mensaje();


//LOOPS

var nombres =["Juanito", "Jorgito", "Jaimito"];

function mensajeconnombre(nombre) {
	console.log("Hola, " + nombre);
}

nombres.forEach(function(valor) {
	mensajeconnombre(valor)
});


//OBJETOS

var coche = {
	marca:"ford",
	motor:"eléctrico",
	acelerar: function(){
		console.log("brrrrrrrrrrummmmmm");	
	}
};

console.log(coche.marca)
coche.acelerar()

//ACESO AL DOM

var encabezado = document.querySelector("h1")
console.log(encabezado)
encabezado.textContent = "HOLA JAVASCRIPTTT!!!!"


//EVENTOS Y LISTENERS

function cambiaColor() {
	this.classList.toggle("cambia");
}

document.querySelector("body").addEventListener("click",cambiaColor)
