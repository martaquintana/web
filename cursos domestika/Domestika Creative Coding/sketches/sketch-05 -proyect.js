const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')
const tweakpane = require('tweakpane');

const settings = {
  dimensions: [ 1080, 1080 ],
  duration: 10, // Duración de la animación en segundos
  animate:true,
  fps:30,
};
let manager, image;

let text ='A';
let fontSize =1200;
let fontFamily ='Isidora Sans';

const params ={
  glyphs:'···',

}

//Bit Map + grid pixels
const typeCanvas = document.createElement('canvas');
const typeContext = typeCanvas.getContext('2d');


const sketch = ({ context, width, height }) => {
  const cell = 7;
  const cols = Math.floor(width / cell);
  const rows = Math.floor(height / cell);
  const numCells = cols*rows;

  typeCanvas.width = cols;
  typeCanvas.height = rows;

  return ({ context, width, height }) => {
    typeContext.save();
    typeContext.drawImage(image, 0, 0, cols, rows); // draw image
    typeContext.restore();

    const typeData = typeContext.getImageData(0, 0, cols, rows).data;

    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.textBaseline = 'middle';
    context.textAlign = 'center';
    for(let i=0; i<numCells; i++){
      const col = i% cols;
      const row = Math.floor(i/cols);

      const x = col*cell;
      const y = row*cell;

      const r = typeData[i *4 + 0];
      const g = typeData[i *4 + 1];
      const b = typeData[i *4 + 2];
      const a = typeData[i *4 + 3];

      
      const glyph = getGlyph(a);

      context.font =`${cell*2}px ${fontFamily}`
      if(Math.random() < 0.1) context.font =`${cell*6}px ${fontFamily}`

      context.fillStyle =`rgba(${r},${g},${b},${a})`

      context.save();
      context.translate(x,y);

      context.beginPath();
      context.fillText(glyph,0,0);
      context.restore();

    }
    context.drawImage(typeCanvas, 0, 0);

  };
};

const getGlyph=(v)=>{
  if(v < 50) return "";
  if(v < 100) return "+";
  if(v < 150) return "'";
  if(v < 200) return "|";

  //const glyphs = '_-/'.split("");
  const glyphs = `${params.glyphs}`.split("");
  return random.pick(glyphs);
}

const onKeyUp= async(e) =>{
  text = e.key.toUpperCase();
  console.log(text);
  //await manager.update();
  manager.render();
}



const createPane =() =>{
  const pane =new tweakpane.Pane();
  let folder;
  folder = pane.addFolder({ title: 'Grid'});
  folder.addInput(params, 'glyphs').on('change', (value) => {
    // Actualizar la variable 'glyphs' con el nuevo valor
    glyphs = value;
    manager.render(); // Renderizar la imagen con los nuevos glifos
  });
}


createPane();
//render sketch again


const loadMeSomeImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject();
    img.src = url;
  });
};

const start = async () => {
  const url = './blacky.jpg';
  image = await loadMeSomeImage(url);
  manager = await canvasSketch(sketch, settings);
};

start();

