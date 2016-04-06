function Button(_text, _font, _left, _top, _width, _height, _idleColor, _hoverColor, _clicColor)
{
	this.left = _left;
	this.top = _top;
	this.width = _width;
	this.height = _height;
	this.idleColor = _idleColor;
	this.hoverColor = _hoverColor;
	this.clicColor = _clicColor;
	this.label = new Label(_text, _font, _left + (_width / 2), _top + (_height / 2), "center", this.idleColor);

	this.soundPlayed = false;
}

Button.prototype.setText = function(_text)
{
	this.label = this.label.setText(_text);
}

Button.prototype.getText = function()
{
	return this.label.getText();
}

Button.prototype.setFont = function(_font)
{
	this.label = this.label.setFont(_font);
}

Button.prototype.getFont = function()
{
	return this.label.getFont();
}

Button.prototype.setLeft = function(_left)
{
	this.left = _left;
	this.label.setLeft(_left + this.width / 2);
}

Button.prototype.getLeft = function()
{
	return this.left;
}

Button.prototype.setTop = function(_top)
{
	this.top = _top;
	this.label.setTop(_top + this.height / 2);
}

Button.prototype.getTop = function()
{
	return this.top;
}

Button.prototype.setWidth = function(_width)
{
	this.width = _width;
}

Button.prototype.getWidth = function()
{
	return this.width;
}

Button.prototype.setHeight = function(_height)
{
	this.height = _height;
}

Button.prototype.getHeight = function()
{
	return this.height;
}

Button.prototype.setTextColor = function(_textColor)
{
	this.label.setColor(_textColor);
}

Button.prototype.getTextColor = function()
{
	return this.label.getColor();
}

Button.prototype.setIdleColor = function(_idleColor)
{
	this.idleColor = _idleColor;
}

Button.prototype.getIdleColor = function()
{
	return this.idleColor;
}

Button.prototype.setHoverColor = function(_hoverColor)
{
	this.hoverColor = _hoverColor;
}

Button.prototype.getHoverColor = function()
{
	return this.hoverColor;
}

Button.prototype.setClicColor = function(_clicColor)
{
	this.clicColor = _clicColor;
}

Button.prototype.getclicColor = function()
{
	return this.clicColor;
}

Button.prototype.draw = function()
{
	if(mouseX >= this.left && mouseX <= (this.left + this.width) && mouseY >= this.top && mouseY <= (this.top + this.height))
	{
		if(mouseDown)
		{
			this.label.setColor(this.clicColor);
		}
		else
		{
			this.label.setColor(this.hoverColor);
		}
	}
	else
	{
		this.label.setColor(this.idleColor);
	}

	this.label.draw();
}

Button.prototype.isClicked = function()
{
	var res = false;

	if(mouseX >= this.left && mouseX <= (this.left + this.width) && mouseY >= this.top && mouseY <= (this.top + this.height) && mouseClic)
	{
		res = true;
		play("confirm");
	}else if(mouseX >= this.left && mouseX <= (this.left + this.width) && mouseY >= this.top && mouseY <= (this.top + this.height))
	{
		if(!this.soundPlayed)
		{
			play("hover");
			this.soundPlayed = true;
		}
	}else
	{
		this.soundPlayed = false;
	}

	return res;
}