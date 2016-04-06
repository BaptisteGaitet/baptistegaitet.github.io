function EyeShape(_left, _top, _radius, _color)
{
	this.left = _left;
	this.top = _top;
	this.radius = _radius;
	this.color = _color;

	this.blinkTimer = 0;
	this.blinkDuration = 6;
	this.nextBlink = 0;

	this.blinking = false;
	this.happyness = 2;

	this.eye = new CircleShape(this.left, this.top, this.radius, "#f0f0f0");
	this.pupil = new CircleShape(this.left, this.top, this.radius / 2, "#101010");

	this.blinkRect = new RectangleShape(this.left, this.top, this.radius, this.radius, this.color);
	this.boredRect = new RectangleShape(this.left, this.top, this.radius, this.radius/2, this.color);
	this.happyCircle = new CircleShape(this.left, this.top + (this.radius * 2), this.radius*2, this.color);
}

EyeShape.prototype.setLeft = function(_left)
{
	this.left = _left;
}

EyeShape.prototype.getLeft = function()
{
	return this.left;
}

EyeShape.prototype.setTop = function(_top)
{
	this.top = _top;
}

EyeShape.prototype.getTop = function()
{
	return this.top;
}

EyeShape.prototype.setRadius = function(_radius)
{
	this.radius = _radius;
}

EyeShape.prototype.getRadius = function()
{
	return this.radius;
}

EyeShape.prototype.setHappyness = function(_health)
{
	if(_health <= 25)
	{
		this.happyness = 0; 
	}else if(_health >= 75)
	{
		this.happyness = 2;
	}else
	{
		this.happyness = 1;
	}
}

EyeShape.prototype.resize = function()
{
	this.eye.setLeft(this.left);
	this.eye.setTop(this.top);
	this.eye.setRadius(this.radius);

	this.pupil.setLeft(this.left);
	this.pupil.setTop(this.top);
	this.pupil.setRadius(this.radius / 2);

	this.happyCircle.setLeft(this.left);
	this.happyCircle.setTop(this.top + (this.radius * 2));
	this.happyCircle.setRadius(this.radius*2);
	this.happyCircle.setStartingAngle(Math.PI);
	this.happyCircle.setEndingAngle(0);

	this.blinkRect.setLeft(this.left - this.radius - 4);
	this.blinkRect.setTop(this.top - this.radius - 4);
	this.blinkRect.setWidth((this.radius * 2) + 8);
	this.blinkRect.setHeight((this.radius * 2) + 8);

	this.boredRect.setLeft(this.left - this.radius - 4);
	this.boredRect.setTop(this.top - this.radius - 4);
	this.boredRect.setWidth((this.radius * 2) + 8);
	this.boredRect.setHeight(this.radius + 8);
}

EyeShape.prototype.movePupil = function()
{
	var directionToMouse = {x:0, y:0};

	directionToMouse.x = mouseX - this.left;
	directionToMouse.y = mouseY - this.top;

	var norm = Math.sqrt(Math.pow(directionToMouse.x, 2) + Math.pow(directionToMouse.y, 2));
	directionToMouse.x = directionToMouse.x / norm;
	directionToMouse.y = directionToMouse.y / norm;

	this.pupil.setLeft(this.left + (directionToMouse.x * (this.radius / 4)));
	this.pupil.setTop(this.top + (directionToMouse.y * (this.radius / 4)));
}

EyeShape.prototype.update = function()
{
	this.movePupil();

	if(this.blinkTimer >= this.nextBlink)
	{
		if(this.blinkDuration > 0)
		{
			this.blinking = true;
			this.blinkDuration --;
		}else
		{
			this.blinkDuration = 6;
			this.blinkTimer = 0;
			this.nextBlink = Math.random() * 30 + 120;
		}
	}else
	{
		this.blinkTimer ++;
		this.blinking = false;
	}
}

EyeShape.prototype.draw = function()
{
	this.eye.draw();
	this.pupil.draw();

	if(this.blinking)
	{
		this.blinkRect.draw();
	}

	switch(this.happyness)
	{
		case 0:
			this.boredRect.draw();
			break;
		case 2:
			this.happyCircle.draw();
			break;
		default:
			break;
	}
}