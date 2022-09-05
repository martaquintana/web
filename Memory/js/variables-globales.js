var grupoTarjetas = [["🦄", "🍦"],[ "🌈", "👽"], ["👾", "🤖"], ["👹", "👺"]];
var errores=0;
var totalTarjetas;
var aciertos=0;
var movimientos;
var cronometro;
var nivelActual= 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3
  },
  {    
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12
  }
];


