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
    movimientosMax: 3,
    minutosMax:1
  },
  {    
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8,
    minutosMax:1
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12,
    minutosMax:1
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3]),
    movimientosMax: 18,
    minutosMax:2
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3],grupoTarjetas[4]),
    movimientosMax: 22,
    minutosMax:2
  },
  {    
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3],grupoTarjetas[4],grupoTarjetas[5]),
    movimientosMax: 26,
    minutosMax:3
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3],grupoTarjetas[4],grupoTarjetas[5], grupoTarjetas[6]),
    movimientosMax: 30,
    minutosMax:3
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3],grupoTarjetas[4],grupoTarjetas[5], grupoTarjetas[6],grupoTarjetas[7]),
    movimientosMax: 35,
    minutosMax:4
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3],grupoTarjetas[4],grupoTarjetas[5], grupoTarjetas[6],grupoTarjetas[7],grupoTarjetas[8]),
    movimientosMax: 40,
    minutosMax:4
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2],grupoTarjetas[3],grupoTarjetas[4],grupoTarjetas[5], grupoTarjetas[6],grupoTarjetas[7],grupoTarjetas[8],grupoTarjetas[9]),
    movimientosMax: 60,
    minutosMax:5
  }
];


