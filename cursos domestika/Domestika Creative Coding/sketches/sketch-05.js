const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')
const tweakpane = require('tweakpane');

const settings = {
  dimensions: [ 1080, 1080 ]
};
let manager, image;

let text ='A';
let fontSize =1200;
let fontFamily ='Isidora Sans';

const params ={
  glyphs:'_-/',

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
    /*typeContext.fillStyle = 'black';
    typeContext.fillRect(0, 0, cols, rows);

    fontSize =cols;
    typeContext.fillStyle="white";
    //context.font = fontSize + 'px '+ fontFamily;
    typeContext.font = `${fontSize}px ${fontFamily}`;

    typeContext.textBaseline ="top";
    //context.textAlign = "center";    
    const metrics = typeContext.measureText(text);

		const mx = metrics.actualBoundingBoxLeft * -1;
		const my = metrics.actualBoundingBoxAscent * -1;
		const mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
		const mh = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    console.log(metrics);
    //const x =width*0.5;
    //const y =height*0.85;

    const x = (cols -mw)*0.5 -mx;
    const y = (rows - mh)*0.5 -my;
/*
    typeContext.save();
    typeContext.translate(x,y);
    typeContext.beginPath();
    typeContext.rect(mx,my,mw,mh);
    typeContext.stroke();
    typeContext.fillText(text,0,0);
    typeContext.restore();
  

    const typeData = typeContext.getImageData(0,0,cols,rows).data;
    console.log(typeData);
    context.drawImage(typeCanvas,0,0); //coment when render the result img

    //Black bacground canvas
    //context.fillStyle="black";
    //context.fillRect(0,0,width,height);
    //Optional

    context.textBaseline = 'middle';
    context.textAlign ='center';
*/
    //typeContext.fillStyle = 'black';
    //typeContext.fillRect(0, 0, cols, rows);

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

      
      const glyph = getGlyph(r);

      context.font =`${cell*2}px ${fontFamily}`
      if(Math.random() < 0.1) context.font =`${cell*6}px ${fontFamily}`

      context.fillStyle =`rgba(${r},${g},${b},${a})`

      context.save();
      context.translate(x,y);
      //context.translate(cell*0.5,cell*0.5);

      //context.fillRect(0,0,cell,cell);
      context.beginPath();
      //context.arc(0,0,cell*0.5,0,Math.PI*2);
      //context.fill();
      context.fillText(glyph,0,0);
      context.restore();

    }
    context.drawImage(typeCanvas, 0, 0);

  };
};

const getGlyph=(v)=>{
  if(v < 50) return "";
  if(v < 100) return ".";
  if(v < 150) return "-";
  if(v < 200) return "+";

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

//document.addEventListener('keyup',onKeyUp); //Discoment to change the character


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
  const url = './pixar.jpg';
  image = await loadMeSomeImage(url);
  manager = await canvasSketch(sketch, settings);
};

start();


// const start = () => {
// 	loadMeSomeImage(url).then(img => {
// 		console.log('image width', img.width);
// 	});
// 	console.log('this line');
// };

//start();