const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
const tweakpane = require('tweakpane');

//object
const settings = {
  dimensions: [ 1080, 1080 ],
  animate:true
};

const params ={
  colorNodes: {r: 0, g: 0, b: 0, a: 1},
  colorLine: {r: 0, g: 0, b: 0, a: 1},
  lineWidth:4,

}

//animate true inside canvas sketch
const animate =()=>{
  console.log('Domestika');
  requestAnimationFrame(animate);
}
//animate();

const sketch = ({ context, width, height }) => {
  const agents =[];
  for(let i=0; i<40; i++){
    const x = random.range(0,width);
    const y = random.range(0,height);
    agents.push(new Agent(x,y));
  }


  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    //object
    //const point ={x:800, y:400,radius:10};

    for(let i=0; i<agents.length; i++){
      const agent=agents[i];
      for(let j=i+1; j<agents.length; j++){
        const other = agents[j];
        const dist = agent.pos.getDistance(other.pos);
        if(dist > 200) continue;

				context.lineWidth = math.mapRange(dist, 0, 200, 12, 1);
        context.beginPath();
        context.moveTo(agent.pos.x,agent.pos.y);
        context.lineTo(other.pos.x,other.pos.y);
        const rgbaColor = `rgba(${params.colorLine.r}, ${params.colorLine.g}, ${params.colorLine.b}, ${params.colorLine.a})`;
        context.strokeStyle =rgbaColor;
        context.stroke();
      }

    }

    agents.forEach(agent=>{
      agent.update();
      agent.draw(context);
      //agent.bounce(width,height)
      agent.wrap(width,height)

    });
  };
};

const createPane =() =>{
  const pane =new tweakpane.Pane();
  let folder;
  folder = pane.addFolder({ title: 'Options'});
  folder.addInput(params,'colorNodes');
  folder.addInput(params,'colorLine');
  folder.addInput(params,'lineWidth',{min: 0.1, max:10});


}
createPane();
canvasSketch(sketch, settings);

//Clases
class Vector {
  constructor(x,y){
    this.x=x;
    this.y=y;
  }

  getDistance(v){
    const dx = this.x-v.x;
    const dy = this.y-v.y;
    return Math.sqrt(dx*dx + dy*dy);
  }
}

class Agent {
  constructor(x,y){
    this.pos = new Vector(x,y);
    this.radius =random.range(4,12);
    this.vel = new Vector(random.range(-1,1),random.range(-1,1));
  }

  bounce(width,height){
    if(this.pos.x-this.radius<=0 ||this.pos.x+this.radius>=width) this.vel.x*=-1;
    if(this.pos.y-this.radius<=0 ||this.pos.y+this.radius>=height) this.vel.y*=-1;
  }

  wrap(width,height){
    if(this.pos.x+this.radius< 0) this.pos.x = width+ this.radius;
    if(this.pos.x-this.radius> width) this.pos.x = - this.radius;
    if(this.pos.y+this.radius< 0) this.pos.y = height+ this.radius;
    if(this.pos.y-this.radius> height) this.pos.y = - this.radius;

  }
  update(){
    this.pos.x+=this.vel.x;
    this.pos.y+=this.vel.y;
  }

  draw(context){
    context.save();
    context.translate(this.pos.x,this.pos.y);
    context.lineWidth=params.lineWidth;

    context.beginPath();
    context.arc(0,0,this.radius,0,Math.PI*2)
    context.fill();
    const rgbaColor = `rgba(${params.colorNodes.r}, ${params.colorNodes.g}, ${params.colorNodes.b}, ${params.colorNodes.a})`;
    context.strokeStyle =rgbaColor;
    context.stroke();
    context.restore();
  }


}