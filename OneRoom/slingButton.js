function SlingButton(vecPos)
{
	this.position = {x:0, y:0};
	this.position.x = vecPos.x;
	this.position.y = vecPos.y;
	this.buttonPosition = {x:0, y:0};
	this.buttonPosition.x = this.position.x;
	this.buttonPosition.y = this.position.y;
	this.selected = false;
	this.shoot = false;
	this.shotDirection = {x:0, y:0};
	this.shotStrength = 0;
}

SlingButton.prototype.update = function()
{
	this.shoot = false;
	var rect = {x:this.buttonPosition.x, y:this.buttonPosition.y, width:img_slingButton.height, height:img_slingButton.height};
	if(mouseIsOver(rect) && mousePress)
	{
		snd_elastic.play();
		this.selected = true;
	}

	if(this.selected)
	{
		if(getNorm(vectorFromPoints({x:mouseX, y:mouseY}, this.position)) > 30)
		{
			this.buttonPosition.x = this.position.x + normalize(vectorFromPoints(this.position, {x:mouseX, y:mouseY})).x * 29;
			this.buttonPosition.y = this.position.y + normalize(vectorFromPoints(this.position, {x:mouseX, y:mouseY})).y * 29;
		}else
		{
			this.buttonPosition.x = mouseX;
			this.buttonPosition.y = mouseY;
		}
	}else
	{
		var difference = {x: this.position.x -this.buttonPosition.x, y:this.position.y -this.buttonPosition.y};
		difference.x /= 1.5;
		difference.y /= 1.5;
		this.buttonPosition.x += difference.x;
		this.buttonPosition.y += difference.y;
	}

	if(getNorm(vectorFromPoints(this.buttonPosition, this.position))>1)
		this.shotDirection = normalize(vectorFromPoints(this.buttonPosition, this.position));
	this.shotStrength = getNorm(vectorFromPoints(this.buttonPosition, this.position));

	if(!mouseDown)
	{
		if(this.selected)
		{
			snd_marble.play();
			this.shoot = true;
		}
		this.selected = false;
	}
}

SlingButton.prototype.draw = function(context)
{
	//context.drawImage(img_slingArea, this.position.x - img_slingArea.height/2, this.position.y - img_slingArea.height/2);
	context.drawImage(img_slingButton, this.buttonPosition.x - img_slingButton.height/2, this.buttonPosition.y - img_slingButton.height/2);
}

SlingButton.prototype.isShooting = function()
{
	return this.shoot;
}

SlingButton.prototype.getDirection = function()
{
	return this.shotDirection;
}

SlingButton.prototype.getStrength = function()
{
	return this.shotStrength;
}