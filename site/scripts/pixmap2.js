var log = console.log.bind(console);

log('Hello');

window.addEventListener('load', init);

function init() {

	var myCanvas = new MyCanvas();

}



function MyDom() { constructorCall(arguments, this); }

MyDom.prototype.constructor = function() {
	log('MyDom constructor called.');
	this.children = [];
}

MyDom.prototype.append = function(anotherMyDom) {
	this.children.push(anotherMyDom);
}

function MyCanvas() { constructorCall(arguments, this); }

MyCanvas.prototype = new MyDom(null);

MyCanvas.prototype.constructor = function() {
	log('MyCanvas constructor called.');
	MyDom.prototype.constructor.call(this);
}





function extend(Class1, Class2) {
	Class1.prototype = new Class2(null);
}


function constructorCall(argumentsObject, context) {
	if (argumentsObject.length == 1 && argumentsObject[0] == null) {
		//
	} else {
		context.constructor();
	}
}

function nullArgument(argumentsObject) {
	// Empty object for prototypal inheritence access of methods.
	return argumentsObject.length == 1 && argumentsObject[0] == null;
}
