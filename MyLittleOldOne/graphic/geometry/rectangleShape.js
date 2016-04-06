function RectangleShape(_left, _top, _width, _height, _color)
{
	this.left = _left;
	this.top = _top;
	this.width = _width;
	this.height = _height;
	this.color = _color;
}

RectangleShape.prototype.setTop = function(_top)
{
	this.top = _top;
}

RectangleShape.prototype.getTop = function()
{
	return this.top;
}

RectangleShape.prototype.setLeft = function(_left)
{
	this.left = _left;
}

RectangleShape.prototype.getLeft = function()
{
	return this.left;
}

RectangleShape.prototype.setWidth = function(_width)
{
	this.width = _width;
}

RectangleShape.prototype.getWidth = function()
{
	return this.width;
}

RectangleShape.prototype.setHeight = function(_height)
{
	this.height = _height;
}

RectangleShape.prototype.getHeight = function()
{
	return this.height;
}

RectangleShape.prototype.setColor = function(_color)
{
	this.color = _color;
}

RectangleShape.prototype.getColor = function()
{
	return this.color;
}

RectangleShape.prototype.draw = function()
{
	var canvas = document.getElementById("game");
	var context = canvas.getContext("2d");
	context.fillStyle = this.color;
	context.fillRect(this.left, this.top, this.width, this.height);
}