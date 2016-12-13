function Button(vecPos, image)
{
	this.position = {x:0, y:0};
	this.position.x = vecPos.x;
	this.position.y = vecPos.y;
	this.state = "idle";
	this.image = image;
	this.clic = false;
	this.cooldown = 60;
	this.timer = this.cooldown;
}

Button.prototype.update = function()
{
	if(this.timer < this.cooldown)
	{
		this.timer ++;
		this.state = "press";
	}else if(this.timer >= this.cooldown && this.state == "press")
	{
		this.state = "idle";
	}

	var rect = {x:this.position.x, y:this.position.y, width:this.image.height, height:this.image.height};

	this.clic = false;
	if(mouseClic && mouseIsOver(rect) && this.timer >= this.cooldown)
	{
		this.clic = true;
		this.timer = 0;
		snd_btnpush.play();
	}

	if(mouseIsOver(rect) && this.timer >= this.cooldown)
	{
		if(mousePress)
		{
			this.state = "press";	
		}else
		{
			this.state = "hover";
		}
		
	}else if(this.timer >= this.cooldown)
	{
		
		if(this.state == "press")
			snd_btnrelease.play();
		this.state = "idle";
	}
}

Button.prototype.draw = function(context)
{
	if(this.state == "idle" || this.state == "hover")
	{
		context.drawImage(this.image, 0, 0, this.image.width/2, this.image.height, this.position.x, this.position.y, this.image.width/2, this.image.height);
	}else{
		context.drawImage(this.image, this.image.width/2, 0, this.image.width/2, this.image.height,this.position.x, this.position.y, this.image.width/2,this.image.height);
	}
}

Button.prototype.isClicked = function()
{
	return this.clic;
}

Button.prototype.getState = function()
{
	return this.state;
}

Button.prototype.setCooldown = function(val)
{
	this.cooldown = val;
}