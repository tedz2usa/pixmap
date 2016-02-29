
function Pixel(x, y) {

	this.x = x;
	this.y = y;

	// Uint8ClammpedArray.
	this.sourceDataIndex = Pixel.sourceDataIndex(x, y);
	this.pixelData = Pixel.sourceImageData.data.slice(this.sourceDataIndex, this.sourceDataIndex+4);

	this.r = this.pixelData[0];
	this.g = this.pixelData[1];
	this.b = this.pixelData[2];
	this.a = this.pixelData[3];

}


Pixel.init = (function(sourceImageData) {
	Pixel.sourceImageData = sourceImageData;
})

Pixel.sourceDataIndex = (function(x, y) {
	var data = Pixel.sourceImageData.data;
	return (Pixel.sourceImageData.width*y + x) * 4;

});


