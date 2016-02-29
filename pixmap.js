var log = console.log.bind(console);

log('Hello');


window.addEventListener('load', init);

function init() {
	log('Window loaded!');
}








function createDiv(classes) {
	return createDom('div', classes);
}


function createDom(tagname, classes) {
	var elem = document.createElement(tagname);
	elem.className = classes;
	return elem;
}




