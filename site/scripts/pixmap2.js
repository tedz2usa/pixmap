var log = console.log.bind(console);

log('Hello');

window.addEventListener('load', init);

function init() {
	

	var myCanvas = new MyCanvas();
	ftest(null);

}


function ftest() {
	if (arguments.length == 1 && arguments[0] == null) {
		log('null status');
	}
	log(arguments);
}

function MyDom() {

}

function MyCanvas() {

}

