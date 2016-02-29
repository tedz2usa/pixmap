var log = console.log.bind(console);

log('Hello');


window.addEventListener('load', init);

function init() {
	log('Window loaded!');

	var body = document.getElementsByTagName('body')[0];
	log(body);

	var canvas = createDom('canvas');
	canvas.width = '900';
	canvas.height = '900';
	body.appendChild(canvas);


}








function createDiv(classes) {
	return createDom('div', classes);
}


function createDom(tagname, classes) {
	var elem = document.createElement(tagname);
	elem.className = classes;
	return elem;
}




