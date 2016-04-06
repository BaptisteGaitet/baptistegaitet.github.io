function RoundedLine(_left, _top, _width, _height, _color)
{
	this.left = _left;
	this.top = _top;
	this.width = _width;
	this.height = _height;
	this.color = _color;
}

RoundedLine.prototype.setLeft = function(_left)
{
	this.left = _left;
}

RoundedLine.prototype.getLeft = function()
{
	return this.left;
}

RoundedLine.prototype.setTop = function(_top)
{
	this.top = _top;
}

RoundedLine.prototype.getTop = function()
{
	return this.top;
}

RoundedLine.prototype.setWidth = function(_width)
{
	this.width = _width;
}

RoundedLine.prototype.getWidth = function()
{
	return this.width;
}

RoundedLine.prototype.setHeight = function(_height)
{
	this.height = _height;
}

RoundedLine.prototype.getHeight = function()
{
	return this.height;
}

RoundedLine.prototype.setColor = function(_color)
{
	this.color = _color;
}

RoundedLine.prototype.getColor = function()
{
	return this.color;
}

RoundedLine.prototype.draw = function()
{
	var canvas = document.getElementById("game");
	var context = canvas.getContext("2d");

	context.beginPath();
	context.lineCap = "round";
	context.strokeStyle = this.color;
	context.lineWidth = this.height;
	context.moveTo(this.left,this.top);
	context.lineTo(this.left + this.width, this.top);
	context.stroke();
}