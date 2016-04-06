function BodyBumpShape(_centerLeft, _centerTop, _left, _top, _radius, _color)
{
	this.centerLeft = _centerLeft;
	this.centerTop = _centerTop;
	this.left = _left;
	this.top = _top;
	this.baseRadius = _radius;
	this.radius = _radius;
	this.color = _color;

	this.movementTimer = 0;
	this.nextMovement = 0;

	this.destination = {x:0, y:0};
	this.nextRadius = this.radius;
	this.speed = 1;

	this.circleShape = new CircleShape(_left, _top, _radius, this.color);
}

BodyBumpShape.prototype.setCenterLeft = function(_centerLeft)
{
	this.centerLeft = _centerLeft;
}

BodyBumpShape.prototype.getCenterLeft = function()
{
	return this.centerLeft;
}

BodyBumpShape.prototype.setCenterTop = function(_centerTop)
{
	this.centerTop = _centerTop;
}

BodyBumpShape.prototype.getCenterTop = function()
{
	return this.centerTop;
}

BodyBumpShape.prototype.setLeft = function(_left)
{
	this.left = _left;
}

BodyBumpShape.prototype.getLeft = function()
{
	return this.left;
}

BodyBumpShape.prototype.setTop = function(_top)
{
	this.top = _top;
}

BodyBumpShape.prototype.getTop = function()
{
	return this.top;
}

BodyBumpShape.prototype.setBaseRadius = function(_baseRadius)
{
	this.baseRadius = _baseRadius;
}

BodyBumpShape.prototype.getBaseRadius = function()
{
	return this.baseRadius;
}

BodyBumpShape.prototype.setRadius = function(_radius)
{
	this.radius = _radius;
}

BodyBumpShape.prototype.getRadius = function()
{
	return this.radius;
}

BodyBumpShape.prototype.resetDestination = function()
{
	destination.x = this.left;
	destination.y = this.top;
}

BodyBumpShape.prototype.update = function()
{
	if(this.movementTimer >= this.nextMovement)
	{
		this.movementTimer = 0;
		this.nextMovement = Math.random() * 60 + 60;

		this.destination.x = this.centerLeft + (this.baseRadius / 2) + (Math.random() * (this.baseRadius / 2));
		this.destination.y = this.centerTop;

		var randomAngle = (Math.random() * 360 * Math.PI) / 180;
		var newDestination = {x:0, y:0};

		newDestination.x = ((this.destination.x - this.centerLeft) * Math.cos(randomAngle)) - ((this.centerTop - this.destination.y) * Math.sin(randomAngle)) + this.centerLeft;
		newDestination.y = ((this.centerTop - this.destination.y) * Math.cos(randomAngle)) - ((this.destination.x - this.centerLeft) * Math.sin(randomAngle)) + this.centerTop;

		this.destination = newDestination;

		this.nextRadius = this.baseRadius / (((Math.random() * 200) / 100) + 1.6);
	}else
	{
		this.movementTimer ++;

		this.radius += (this.nextRadius - this.radius) / 32;
		this.left += (this.destination.x - this.left) / 32;
		this.top += (this.destination.y - this.top) / 32;
	}

	this.circleShape.setLeft(this.left);
	this.circleShape.setTop(this.top);
	this.circleShape.setRadius(this.radius);
}

BodyBumpShape.prototype.draw = function()
{
	this.circleShape.draw();
}