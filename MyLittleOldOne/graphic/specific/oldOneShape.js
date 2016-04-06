function OldOneShape(_left, _top, _width, _height, _color, _altColor)
{
	this.left = _left;
	this.top = _top;
	this.baseLeft = _left;
	this.baseTop = _top;
	this.width = _width;
	this.height = _height;
	this.color = _color;
	this.altColor = _altColor;

	this.body = new CircleShape(this.left, this.top, this.width/2, this.color);
	this.bumps = [];
	this.tentacles = [];
	this.eye = new EyeShape(this.left, this.top, this.height/4, this.color);

	this.movementTimer = 0;
	this.nextMovement = 0;
	this.destination = {x:this.left,y:this.top};
}

OldOneShape.prototype.setLeft = function(_left)
{
	this.left = _left;
}

OldOneShape.prototype.getLeft = function()
{
	return this.left;
}

OldOneShape.prototype.setTop = function(_top)
{
	this.top = _top;
}

OldOneShape.prototype.getTop = function()
{
	return this.top;
}

OldOneShape.prototype.setBaseLeft = function(_baseLeft)
{
	this.baseLeft = _baseLeft;
}

OldOneShape.prototype.getBaseLeft = function()
{
	return this.baseLeft;
}

OldOneShape.prototype.setBaseTop = function(_baseTop)
{
	this.baseTop = _baseTop;
}

OldOneShape.prototype.getBaseTop = function()
{
	return this.baseTop;
}

OldOneShape.prototype.setWidth = function(_width)
{
	this.width = _width;
}

OldOneShape.prototype.getWidth = function()
{
	return this.width;
}

OldOneShape.prototype.setHeight = function(_height)
{
	this.height = _height;
}

OldOneShape.prototype.getHeight = function()
{
	return this.height;
}

OldOneShape.prototype.setColor = function(_color)
{
	this.color = _color;
}

OldOneShape.prototype.getColor = function()
{
	return this.color;
}

OldOneShape.prototype.resize = function()
{
	this.body.setLeft(this.left);
	this.body.setTop(this.top);
	this.body.setRadius(this.height);

	this.eye.setLeft(this.left);
	this.eye.setTop(this.top);
	this.eye.setRadius(this.height/4);
	this.eye.resize();

	for(var i = 0; i < this.bumps.length; i++)
	{
		this.bumps[i].setLeft(this.left);
		this.bumps[i].setTop(this.top);

		this.bumps[i].setCenterLeft(this.left);
		this.bumps[i].setCenterTop(this.top);

		this.bumps[i].setBaseRadius(this.height);
	}

	for(var i = 0; i < this.tentacles.length; i++)
	{
		this.tentacles[i].setBaseLength(Math.random() * this.height + this.height * 2);
		this.tentacles[i].setStartX(this.left);
		this.tentacles[i].setStartY(this.top);
		this.tentacles[i].calculateCtrlPts();
	}
}

OldOneShape.prototype.translate = function()
{
	this.body.setLeft(this.left);
	this.body.setTop(this.top);

	this.eye.setLeft(this.left);
	this.eye.setTop(this.top);
	this.eye.resize();

	for(var i = 0; i < this.bumps.length; i++)
	{
		this.bumps[i].setCenterLeft(this.left);
		this.bumps[i].setCenterTop(this.top);
	}

	for(var i = 0; i < this.tentacles.length; i++)
	{
		this.tentacles[i].setStartX(this.left);
		this.tentacles[i].setStartY(this.top);
	}
}

OldOneShape.prototype.setHappyness = function(_health)
{
	this.eye.setHappyness(_health);
}

OldOneShape.prototype.update = function()
{
	if(this.movementTimer >= this.nextMovement)
	{
		this.movementTimer = 0;
		this.nextMovement = Math.random() * 60 + 60;

		this.destination.x = this.baseLeft + (Math.random() * 100) - 50;
		this.destination.y = this.baseTop;

		var randomAngle = (Math.random() * 360 * Math.PI) / 180; 
		var tmpDestination = this.destination;

		this.destination.x = ((tmpDestination.x - this.baseLeft) * Math.cos(randomAngle)) - ((this.baseTop - tmpDestination.y) * Math.sin(randomAngle)) + this.baseLeft;
		this.destination.y = ((this.baseTop - tmpDestination.y) * Math.cos(randomAngle)) - ((tmpDestination.x - this.baseLeft) * Math.sin(randomAngle)) + this.baseTop;	
	}else
	{
		this.movementTimer ++;

		
	}

	this.left += (this.destination.x - this.left) / 128;
	this.top += (this.destination.y - this.top) / 128;

	this.translate();

	if(this.bumps.length == 0)
	{
		for(var i = 0; i < 40; i++)
		{
			this.bumps[i] = new BodyBumpShape(this.left, this.top, this.left, this.top, this.height, this.color);
		}
	}else
	{
		for(var i = 0; i < this.bumps.length; i ++)
		{
			this.bumps[i].update();
		}
	}

	if(this.tentacles.length == 0)
	{
		for(var i = 0; i < 40; i++)
		{
			this.tentacles[i] = new TentacleShape(this.left, this.top, Math.random() * 90 + 225, Math.random() * this.height + this.height * 2, this.altColor);
		}
	}else
	{
		for(var i = 0; i < this.tentacles.length; i ++)
		{
			this.tentacles[i].update();
		}
	}

	this.eye.update();
}

OldOneShape.prototype.draw = function()
{
	for(var i = 0; i < this.tentacles.length; i ++)
	{
		this.tentacles[i].draw();
	}

	this.body.draw();

	for(var i = 0; i < this.bumps.length; i ++)
	{
		this.bumps[i].draw();
	}

	this.eye.draw();
}