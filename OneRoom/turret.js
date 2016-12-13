function Turret(vecPos)
{
	this.position = {x:0, y:0};
	this.position.x = vecPos.x;
	this.position.y = vecPos.y;
	this.rotation = 0;
	this.lastRotation = 0;
}

Turret.prototype.update = function()
{

}

Turret.prototype.draw = function(context)
{
	context.translate(this.getCenter().x, this.getCenter().y);
	
	context.drawImage(img_turretFoot, -img_turret.width/2 + 45,-img_turret.height/2 + 20);
	
	context.rotate(this.rotation * Math.PI / 180);

	context.drawImage(img_turret, -img_turret.width/2, -img_turret.height/2);

	context.rotate(-(this.rotation * Math.PI / 180));
	context.translate(-this.getCenter().x, -this.getCenter().y);

	if(this.lastRotation != this.rotation)
	{
		snd_btnturn.play();		
	}else
	{
		snd_btnturn.stop();		
	}

	this.lastRotation = this.rotation;
}

Turret.prototype.getCenter = function()
{
	return {x:this.position.x + (img_turret.width /2), y:this.position.y + (img_turret.height / 2)};
}

Turret.prototype.setRotation = function(rotation)
{
	this.rotation = rotation;
}