var log = console.log.bind(console);

log('Hello');


window.addEventListener('load', init);

var body, canvas, ctx, image;

function init() {
	log('Window loaded!');

	body = document.getElementsByTagName('body')[0];
	log(body);

	canvas = createCanvas(null, 900, 900);
	body.appendChild(canvas);

	ctx = canvas.getContext('2d');

	image = new Image();
	image.src = 'text_sample_big.png';

	image.addEventListener('load', imageLoaded);

	canvas.onmousemove = (function(evt) { log(evt.offsetX, evt.offsetY); });

}

function imageLoaded() {
	log('image loaded!');
	ctx.drawImage(image, 0, 0);

	coords = { x: 450, y: 430}

	var newidata = ctx.createImageData(1, 1);
	log(newidata.data);
	newidata.data[0] = 255;
	newidata.data[3] = 255;

	ctx.putImageData(newidata, coords.x, coords.y);
	log(newidata);
}






function createCanvas(classes, width, height) {
	var elem = createDom('canvas', classes);
	elem.width = width;
	elem.height = height;
	return elem;
}

function createDiv(classes) {
	return createDom('div', classes);
}


function createDom(tagname, classes) {
	var elem = document.createElement(tagname);
	elem.className = classes;
	return elem;
}




