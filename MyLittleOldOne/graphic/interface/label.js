function Label(_text, _font, _left, _top, _align, _color)
{
	this.text = _text;
	this.font = _font;
	this.left = _left;
	this.top = _top;
	this.align = _align;
	this.color = _color;
}

Label.prototype.setText = function(_text)
{
	this.text = _text;
}

Label.prototype.getText = function()
{
	return this.text;
}

Label.prototype.setFont = function(_font)
{
	this.font = _font;
}

Label.prototype.getFont = function()
{
	return this.font;
}

Label.prototype.setLeft = function(_left)
{
	this.left = _left;
}

Label.prototype.getLeft = function()
{
	return this.left;
}

Label.prototype.setTop = function(_top)
{
	this.top = _top;
}

Label.prototype.getTop = function()
{
	return this.top;
}

Label.prototype.setAlign = function(_align)
{
	this.align = _align;
}

Label.prototype.getAlign = function()
{
	return this.align;
}

Label.prototype.setColor = function(_color)
{
	this.color = _color;
}

Label.prototype.getColor = function()
{
	return this.color;
}

Label.prototype.draw = function()
{
	var canvas = document.getElementById("game");
	var context = canvas.getContext("2d");
	
	context.font = this.font;
	context.fillStyle = this.color;
	context.textAlign = this.align;
	context.fillText(this.text, this.left, this.top);
}