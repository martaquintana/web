const canvasSketch = require('canvas-sketch');

const settings = {
  //dimensions: [ 600, 600 ] //canvas dimensions in pixels
  //dimensions:'A4',
  dimensions: [1080, 1080]//instagram
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;
    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width *0.02;

    let x, y;
    //MATRIX
    context.strokeStyle = 'white';

    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            x = ix+(w+gap)*i;
            y = iy+(h+gap)*j;
            context.beginPath();
            context.rect(x,y,w,h);
            context.stroke();
            //Conditionals
            if(Math.random()>0.5){
                context.beginPath();
                context.rect(x+off/2,y+off/2,w-off,h-off);
                context.stroke();
                context.strokeStyle = 'yellow';

                context.beginPath();
                context.arc(x+w/2,y+h/2,30,0,Math.PI*2);
                context.stroke();
                context.strokeStyle = 'white';

            }else{

            }

        }
    }
  };
};

canvasSketch(sketch, settings);
