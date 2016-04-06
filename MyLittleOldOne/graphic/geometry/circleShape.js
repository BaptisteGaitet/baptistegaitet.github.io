function CircleShape(_left, _top, _radius, _color)
{
	this.left = _left;
	this.top = _top;
	this.radius = _radius;
	this.color = _color;

	this.startingAngle = 0;
	this.endingAngle = 2 * Math.PI;
}

CircleShape.prototype.setLeft = function(_left)
{
	this.left = _left;
}

CircleShape.prototype.getLeft = function()
{
	return this.left;
}

CircleShape.prototype.setTop = function(_top)
{
	this.top = _top;
}

CircleShape.prototype.getTop = function()
{
	return this.top;
}

CircleShape.prototype.setRadius = function(_radius)
{
	this.radius = _radius;
}

CircleShape.prototype.getRadius = function()
{
	return this.radius;
}

CircleShape.prototype.setStartingAngle = function(_startingAngle)
{
	this.startingAngle = _startingAngle;
}

CircleShape.prototype.getStartingAngle = function()
{
	return this.startingAngle;
}

CircleShape.prototype.setEndingAngle = function(_endingAngle)
{
	this.endingAngle = _endingAngle;
}

CircleShape.prototype.getEndingAngle = function()
{
	return this.endingAngle;
}

CircleShape.prototype.setColor = function(_color)
{
	this.color = _color;
}

CircleShape.prototype.getColor = function()
{
	return this.color;
}

CircleShape.prototype.draw = function()
{
	var canvas = document.getElementById("game");
	var context = canvas.getContext("2d");

	context.beginPath();
    context.arc(this.left, this.top, this.radius, this.startingAngle, this.endingAngle);
    context.fillStyle = this.color;
    context.fill();
}