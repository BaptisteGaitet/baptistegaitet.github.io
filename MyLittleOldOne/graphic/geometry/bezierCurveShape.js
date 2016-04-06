function BezierCurveShape(_startX, _startY, _endX, _endY, _ctrlPtOneX, _ctrlPtOneY, _ctrlPtTwoX, _ctrlPtTwoY, _color)
{
	this.startX = _startX;
	this.startY = _startY;
	this.endX = _endX;
	this.endY = _endY;
	this.ctrlPtOneX = _ctrlPtOneX;
	this.ctrlPtOneY = _ctrlPtOneY;
	this.ctrlPtTwoX = _ctrlPtTwoX;
	this.ctrlPtTwoY = _ctrlPtTwoY;
	this.color = _color;
}

BezierCurveShape.prototype.setStartX = function(_startX)
{
	this.startX = _startX;
}

BezierCurveShape.prototype.getStartX = function()
{
	return this.startX;
}

BezierCurveShape.prototype.setStartY = function(_startY)
{
	this.startY = _startY;
}

BezierCurveShape.prototype.getStartY = function()
{
	return this.startY;
}

BezierCurveShape.prototype.setEndX = function(_endX)
{
	this.endX = _endX;
}

BezierCurveShape.prototype.getEndX = function()
{
	return this.endX;
}

BezierCurveShape.prototype.setEndY = function(_endY)
{
	this.endY = _endY;
}

BezierCurveShape.prototype.getEndY = function()
{
	return this.endY;
}

BezierCurveShape.prototype.setCtrlPtOneX = function(_ctrlPtOneX)
{
	this.ctrlPtOneX = _ctrlPtOneX;
}

BezierCurveShape.prototype.getCtrlPtOneX = function()
{
	return this.ctrlPtOneX;
}

BezierCurveShape.prototype.setCtrlPtOneY = function(_ctrlPtOneY)
{
	this.ctrlPtOneY = _ctrlPtOneY;
}

BezierCurveShape.prototype.getCtrlPtOneY = function()
{
	return this.ctrlPtOneY;
}

BezierCurveShape.prototype.setCtrlPtTwoX = function(_ctrlPtTwoX)
{
	this.ctrlPtTwoX = _ctrlPtTwoX;
}

BezierCurveShape.prototype.getCtrlPtTwoX = function()
{
	return this.ctrlPtTwoX;
}

BezierCurveShape.prototype.setCtrlPtTwoY = function(_ctrlPtTwoY)
{
	this.ctrlPtTwoY = _ctrlPtTwoY;
}

BezierCurveShape.prototype.getCtrlPtTwoY = function()
{
	return this.ctrlPtTwoY;
}

BezierCurveShape.prototype.draw = function()
{
	var canvas = document.getElementById("game");
	var context = canvas.getContext("2d");

	context.beginPath();
	context.lineCap = "round";
	context.strokeStyle = this.color;
	context.lineWidth = 16;
	context.moveTo(this.startX,this.startY);
	context.bezierCurveTo(this.ctrlPtOneX,this.ctrlPtOneY,this.ctrlPtTwoX,this.ctrlPtTwoY,this.endX,this.endY);
	context.stroke();
}