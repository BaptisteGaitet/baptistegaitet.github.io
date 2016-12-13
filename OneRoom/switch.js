function Switch(vecPos, id, on)
{
	this.position = {x:0, y:0};
	this.position.x = vecPos.x;
	this.position.y = vecPos.y;
	this.on = on;
	this.id = id;
	this.clic = false;
}

Switch.prototype.update = function()
{
	var rect = {x:this.position.x - img_switch.width/4, y:this.position.y - img_switch.height/2, width:img_switch.width/2, height:img_switch.height};
	if(mouseIsOver(rect) && mouseClic)
	{
		this.clic = true;
		snd_switch.play();
	}else
	{
		this.clic = false;
	}
}

Switch.prototype.draw = function(context)
{
	if(this.on)
	{
		context.drawImage(img_switch, img_switch.width/2, 0, img_switch.width/2, img_switch.height, this.position.x - img_switch.width/4, this.position.y - img_switch.height/2, img_switch.width/2, img_switch.height);
	}else
	{
		context.drawImage(img_switch, 0,0, img_switch.width/2, img_switch.height,this.position.x - img_switch.width/4, this.position.y - img_switch.height/2, img_switch.width/2,img_switch.height);
	}
}

Switch.prototype.isOn = function()
{
	return this.on;
}

Switch.prototype.setOn = function(value)
{
	this.on = value;
}

Switch.prototype.getState = function()
{
	return this.state;
}

Switch.prototype.getId = function()
{
	return this.id;
}

Switch.prototype.isClicked = function()
{
	return this.clic;
}