var modoRelax = false;
var grupoTarjetas = [["🧀", "🍅"],[ "🥓", "🥦"], ["🍳", "🥕"], ["🍍", "🍗"],["🍆","🍐"],
		     [ "🌽", "🍇"], ["🍊", "🍋"], ["🍎", "🍄"],["🍖"," 🐟"],["🍟", "🍫"]];
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
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3]),
    movimientosMax: 18
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3],grupoTarjetas[4]),
    movimientosMax: 22
  },
  {    
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3],grupoTarjetas[4],grupoTarjetas[5]),
    movimientosMax: 26
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3],grupoTarjetas[4],grupoTarjetas[5], grupoTarjetas[6]),
    movimientosMax: 30
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3],grupoTarjetas[4],grupoTarjetas[5], grupoTarjetas[6],grupoTarjetas[7]),
    movimientosMax: 35
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3],grupoTarjetas[4],grupoTarjetas[5], grupoTarjetas[6],grupoTarjetas[7],grupoTarjetas[8]),
    movimientosMax: 40
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3],grupoTarjetas[4],grupoTarjetas[5], grupoTarjetas[6],grupoTarjetas[7],grupoTarjetas[8],grupoTarjetas[9]),
    movimientosMax: 60
  }
];


