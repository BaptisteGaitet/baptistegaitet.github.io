function Lamp(vecPos, id)
{
	this.position = {x:0, y:0};
	this.position.x = vecPos.x;
	this.position.y = vecPos.y;
	this.id = id;
	this.on = false;
}

Lamp.prototype.getId = function()
{
	return this.id;
}

Lamp.prototype.update = function()
{

}

Lamp.prototype.draw = function(context)
{
	if(this.on)
		context.drawImage(img_lamp, img_lamp.width/2, 0, img_lamp.width/2, img_lamp.height, this.getCenter().x - img_lamp.width/4, this.getCenter().y - img_lamp.height/2, img_lamp.width/2, img_lamp.height);
	else
		context.drawImage(img_lamp, 0, 0, img_lamp.width/2, img_lamp.height, this.getCenter().x - img_lamp.width/4, this.getCenter().y - img_lamp.height/2, img_lamp.width/2, img_lamp.height);
}

Lamp.prototype.drawLight = function(context)
{
	context.drawImage(img_lampLight, this.getCenter().x - img_lampLight.width/2, this.getCenter().y - img_lampLight.height/2);
}

Lamp.prototype.getCenter = function()
{
	return {x:this.position.x + (img_lamp.width/2), y:this.position.y + (img_lamp.height/2)};
}

Lamp.prototype.setOn = function(value)
{
	this.on = value;
}