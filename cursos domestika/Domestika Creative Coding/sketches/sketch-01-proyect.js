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
    const off2 = width *0.05;
    const off3 = width *0.04;

    let x, y;
    //MATRIX

    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            x = ix+(w+gap)*i;
            y = iy+(h+gap)*j;

            //Conditionals
            if(Math.random()>0.5){

                context.strokeStyle = 'yellow';
                context.beginPath();
                context.rect(x+off/2,y+off/2,w-off,h-off);
                context.stroke();
                context.strokeStyle = 'blue';
                context.beginPath();
                context.rect(x+off2/2,y+off2/2,w-off2,h-off2);
                context.stroke();
                context.strokeStyle = 'white';
                context.beginPath();
                context.rect(x+off3/2,y+off3/2,w-off3,h-off3);
                context.stroke();


            }else{
                context.beginPath();
                context.stroke();
                context.rect(x,y,w,h);

                context.strokeStyle = 'yellow';

                context.beginPath();
                context.arc(x+w/2,y+h/2,20,0,Math.PI*2);

                context.stroke();
                context.strokeStyle = 'blue';
                
                context.beginPath();
                context.arc(x+w/2,y+h/2,30,0,Math.PI*2);

                context.stroke();
                context.strokeStyle = 'white';
                
                context.beginPath();
                context.arc(x+w/2,y+h/2,40,0,Math.PI*2);

                context.stroke();
  
                context.strokeStyle = 'black';
                
                context.beginPath();
                context.arc(x+w/2,y+h/2,50,0,Math.PI*2);

                context.stroke();
   

              }
              context.strokeStyle = 'black';


        }
    }
  };
};

canvasSketch(sketch, settings);
