const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');


const settings = {
	dimensions: [ 1080, 1080 ],
};

const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = 'white';
		context.fillRect(0, 0, width, height);

		context.fillStyle = 'black';

		const cx = width  * 0.5;
		const cy = height * 0.5;

		const w = width  * 0.01;
		const h = height * 0.1;
		let x, y;


		const num = 40;
		const radius = width * 0.3;

    
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    const minuteHandLength = width * 0.3;
    const secondHandLength = width * 0.3;

    // Dibujar la manecilla de los minutos (rectángulo con un borde triangular)
    context.save();
    context.translate(cx, cy);
    context.rotate(-Math.PI / 2 + (Math.PI * 2) * (minutes / 60));
    context.beginPath();
    context.moveTo(minuteHandLength,minuteHandLength);
    context.lineTo(0, h / 4);
    context.lineTo(0, -h / 5);
    context.lineTo(minuteHandLength, minuteHandLength); 
    context.closePath();
    context.fill();
    context.restore();

    // Dibujar la manecilla de los segundos (rectángulo con un borde triangular)
    context.save();
    context.translate(cx, cy);
    context.rotate(-Math.PI / 2 + (Math.PI * 2) * (seconds / 60));
    context.beginPath();
    context.moveTo(secondHandLength,secondHandLength);
    context.lineTo(0, h / 4);
    context.lineTo(0, -h / 5);
    context.lineTo(secondHandLength, secondHandLength); // Volver al punto inicial para cerrar el rectángulo
    context.closePath();
    context.fill();
    context.restore();


		for (let i = 0; i < num; i++) {
			const slice = math.degToRad(360 / num);
			const angle = slice * i;

			x = cx + radius * Math.sin(angle);
			y = cy + radius * Math.cos(angle);

			context.save();
			context.translate(x, y);
			context.rotate(-angle);
			context.scale(random.range(0.1, 2), random.range(0.2, 0.5));

			context.beginPath();
			context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
			context.fill();
			context.restore();

			context.save();
			context.translate(cx, cy);
			context.rotate(-angle);

			context.lineWidth = random.range(5, 20);

			context.beginPath();
			context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
			context.stroke();

			context.restore();
		}
	};
};

canvasSketch(sketch, settings);
