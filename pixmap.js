var log = console.log.bind(console);

log('Hello');


window.addEventListener('load', init);

function init() {
	log('Window loaded!');

	var body = document.getElementsByTagName('body')[0];
	log(body);

	var canvas = createCanvas(null, 900, 900);
	body.appendChild(canvas);


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




