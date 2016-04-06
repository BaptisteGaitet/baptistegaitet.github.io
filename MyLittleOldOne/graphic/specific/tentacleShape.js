function TentacleShape(_startX, _startY, _angle, _length, _color)
{
	this.startX = _startX;
	this.startY = _startY;
	this.baseAngle = _angle;
	this.baseLength = _length;
	this.angle = _angle;
	this.length = _length;
	this.color = _color;

	this.movementTimer = 0;
	this.nextMovement = 0;
	this.nextLength = this.length;
	this.nextAngle = this.angle;

	this.bezierShape = new BezierCurveShape(0,0,0,0,0,0,0,0, this.color);
}

TentacleShape.prototype.setStartX = function(_startX)
{
	this.startX = _startX;
}

TentacleShape.prototype.getStartX = function()
{
	return this.startX;
}

TentacleShape.prototype.setStartY = function(_startY)
{
	this.startY = _startY;
}

TentacleShape.prototype.getStartY = function()
{
	return this.startY;
}

TentacleShape.prototype.setBaseLength = function(_baseLength)
{
	this.baseLength = _baseLength;
}

TentacleShape.prototype.calculateCtrlPts = function()
{
	this.bezierShape.setStartX(this.startX);
	this.bezierShape.setStartY(this.startY);

	this.calculateEnd();

	this.bezierShape.setCtrlPtOneX((this.bezierShape.getEndX() + this.startX*4) / 5);
	this.bezierShape.setCtrlPtOneY((this.bezierShape.getEndY() + this.startY*4) / 5);
	this.bezierShape.setCtrlPtTwoX((this.bezierShape.getEndX()*4 + this.startX) / 5);
	this.bezierShape.setCtrlPtTwoY((this.bezierShape.getEndY()*4 + this.startY) / 5);	
}

TentacleShape.prototype.calculateEnd = function()
{
	this.bezierShape.setStartX(this.startX);
	this.bezierShape.setStartY(this.startY);

	this.bezierShape.setEndX(this.startX + this.length);
	this.bezierShape.setEndY(this.startY);

	var endPoint = {x:this.bezierShape.getEndX(), y:this.bezierShape.getEndY()};
	var radAngle = (this.angle * Math.PI) / 180;

	endPoint.x = ((this.bezierShape.getEndX() - this.startX) * Math.cos(radAngle)) - ((this.startY - this.bezierShape.getEndY()) * Math.sin(radAngle)) + this.startX;
	endPoint.y = ((this.startY - this.bezierShape.getEndY()) * Math.cos(radAngle)) - ((this.bezierShape.getEndX() - this.startX) * Math.sin(radAngle)) + this.startY;

	this.bezierShape.setEndX(endPoint.x);
	this.bezierShape.setEndY(endPoint.y);
}

TentacleShape.prototype.update = function()
{
	if(this.movementTimer >= this.nextMovement)
	{
		this.movementTimer = 0;
		this.nextMovement = Math.random() * 60 + 60;

		this.nextAngle = this.baseAngle + (Math.random() * 90) - 45;
		this.nextLength = this.baseLength + (Math.random() * 100) - 50;
	}else
	{
		this.movementTimer ++;

		this.angle += (this.nextAngle - this.angle) / 64;
		this.length += (this.nextLength - this.length) / 64;
	}

	this.calculateEnd();

	if(this.bezierShape.getCtrlPtOneX() == 0 || this.bezierShape.getCtrlPtOneY() == 0 || this.bezierShape.getCtrlPtTwoX() == 0 || this.bezierShape.getCtrlPtTwoY() == 0)
	{
		this.calculateCtrlPts()
	}
}

TentacleShape.prototype.draw = function()
{
	this.bezierShape.draw();
}