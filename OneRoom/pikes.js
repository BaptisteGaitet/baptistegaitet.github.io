function Pikes(vecPos, button)
{
	this.position = {x:0, y:0};
	this.position.x = vecPos.x;
	this.position.y = vecPos.y;
	this.on = false;
	this.button = button;
}

Pikes.prototype.isOn = function()
{
	return this.on;
}

Pikes.prototype.update = function()
{
	if(this.button.getState() == "press")
	{
		this.on = true;
	}else
	{
		this.on = false;
	}
}

Pikes.prototype.draw = function(context)
{
	if(this.on)
	{
		context.drawImage(img_pikes, img_pikes.width/2, 0, img_pikes.width/2, img_pikes.height,this.position.x - img_pikes.width/4, this.position.y - img_pikes.height/2, img_pikes.width/2, img_pikes.height);
	}else
	{
		context.drawImage(img_pikes, 0, 0, img_pikes.width/2, img_pikes.height,this.position.x - img_pikes.width/4, this.position.y - img_pikes.height/2, img_pikes.width/2, img_pikes.height);
	}
}

Pikes.prototype.getPosition = function()
{
	return this.position;
}

Pikes.prototype.getCenter = function()
{
	return {x:this.position.x + img_pikes.width/4, y:this.position.y};
}