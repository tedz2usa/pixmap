var log = console.log.bind(console);

log('Hello');

window.addEventListener('load', init);

function init() {

	var myCanvas = new MyCanvas();

}



function MyDom() { constructorCall(arguments, this); }

method(MyDom, 'constructor', function() {
	log('MyDom constructor called.');
	this.children = [];
});

method(MyDom, 'append', function(anotherMyDom) {
	this.children.push(anotherMyDom);
});



extend(MyCanvas, MyDom);
function MyCanvas() { constructorCall(arguments, this); }

method(MyCanvas, 'constructor', function() {
	supercall(MyDom, 'constructor', this);
});





















function method(Class, methodname, func) {
	Class.prototype[methodname] = func;
}

function supercall(Class, methodname, context, args) {
	Class.prototype[methodname].apply(context, args);
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
