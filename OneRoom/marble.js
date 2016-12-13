function Marble(vecPos, vecDest)
{
	this.position = {x:0, y:0};
	this.position.x = vecPos.x;
	this.position.y = vecPos.y;
	this.destination = {x:0, y:0};
	this.destination.x = vecDest.x;
	this.destination.y = vecDest.y;
	this.dead = false;
}

Marble.prototype.update = function()
{
	this.position.x += vectorFromPoints(this.position, this.destination).x/2;
	this.position.y += vectorFromPoints(this.position, this.destination).y/2;

	if(getNorm(vectorFromPoints(this.position, this.destination))<1)
	{
		this.dead = true;
	}
}

Marble.prototype.draw = function(context)
{
	context.drawImage(img_marble, this.position.x - img_marble.height/2, this.position.y - img_marble.height/2);
}

Marble.prototype.isDead = function()
{
	return this.dead;
}
