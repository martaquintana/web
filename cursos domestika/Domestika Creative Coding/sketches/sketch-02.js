const canvasSketch = require('canvas-sketch');
const math =require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
const settings = {
	dimensions: [ 1080, 1080 ],
  //animate:true,
};
/*
const degToRad =(degrees)=>{
  return degrees / 180 *Math.PI;
}

const randomRange =(min,max)=>{
  return Math.random() * (max-min) + min;
}
*/

// Función para generar un color amarillo aleatorio en formato hexadecimal
const randomYellowColor=()=> {
  const tonosAmarillo = ["#123f77", "#0f86b6", "#37cae5", "#f5db37", "#fbefcb"];
  const indiceAleatorio = Math.floor(Math.random() * tonosAmarillo.length);
  let color= tonosAmarillo[indiceAleatorio];
  return color;
}

const fps = 30; // Define la velocidad deseada (cuadros por segundo)
const frameDelay = 1000 / fps; // Calcula el retraso entre cuadros

let lastFrameTime = 0;

const sketch = () => {
  return ({ context, width, height }) => {
      // En el ciclo de animación
  /*function animate(time) {
    if (time - lastFrameTime > frameDelay) {
      lastFrameTime = time;
*/
      context.clearRect(0, 0, width, height);

      // Resto de tu código de animación
      context.fillStyle = '#2b50b1';
    context.fillRect(0, 0, width, height);

    context.fillStyle='black';
    //x,y centro del canvas
    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    let x,y;
    const num =60;
    const radius =width*0.5;
    for(let i=0;i<num;i++){
      const slice =math.degToRad(360/num);
      const angle=slice*2*i;
      //const angle=slice*i;

      x=cx+radius*Math.sin(angle);
      y=cy+radius*Math.cos(angle);
/*
      context.save();
      context.translate(x,y);
      context.rotate(-angle); //rotate the context
      context.scale(random.range(0,1),random.range(0.4,1))
      
      context.beginPath();
      context.rect(-w*0.5,random.range(0,-h*0.5),w,h);
      context.fill();
      context.restore();
*/
      context.save();
      context.translate(cx,cy);
      context.rotate(-angle);
      context.strokeStyle= randomYellowColor();
      context.lineWidth= random.range(5,20);
      context.beginPath()
      context.arc(0,0,radius * random.range(1),slice*random.range(1,-8),slice*random.range(1,5));
      context.stroke();
      context.restore();
    }
  

/*
      requestAnimationFrame(animate);
    } else {
      requestAnimationFrame(animate);
    }
  }

  animate();*/
};
};

canvasSketch(sketch, settings);
