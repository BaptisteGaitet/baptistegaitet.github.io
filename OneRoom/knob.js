function Knob(vecPos)
{
	this.position = {x:0, y:0};
	this.position.x = vecPos.x;
	this.position.y = vecPos.y;
	this.rotation = 0;
	this.state = "idle";
	this.clicked = false;
}

Knob.prototype.update = function()
{
	if(this.rotation >= 360)
	{
		this.rotation = 0;
	}

	var rect = {x:this.getCenter().x - img_knob.width/2, y:this.getCenter().y - img_knob.height/2, width:img_knob.width, height:img_knob.height};

	if(mouseIsOver(rect))
	{
		if(mousePress)
		{
			this.clicked = true;
		}else if(!mouseDown)
		{
			this.clicked = false;
		}
		this.state = "hover";
	}else if(!this.clicked)
	{
		this.state = "idle";
	}else if(!mouseDown)
	{
		this.clicked = false;
		this.state = "idle";
	}

	if(this.clicked)
	{
		this.rotation = angleFromVector(vectorFromPoints(this.getCenter(), {x:mouseX, y:mouseY}));
	}
}

Knob.prototype.draw = function(context)
{
	context.translate(this.getCenter().x, this.getCenter().y);
	context.rotate((80 + this.rotation) * Math.PI / 180);

	context.drawImage(img_knob, -img_knob.width/2, -img_knob.height/2);

	context.rotate(-((80 + this.rotation) * Math.PI / 180));
	context.translate(-this.getCenter().x, -this.getCenter().y);
}

Knob.prototype.getCenter = function()
{
	return {x:this.position.x + (img_knob.width /2), y:this.position.y + (img_knob.height / 2)};
}

Knob.prototype.getRotation = function()
{
	return this.rotation;
}