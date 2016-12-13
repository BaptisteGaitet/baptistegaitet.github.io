function Bullet(vecPos, vecVel, speed)
{
	this.position = {x:0, y:0};
	this.position.x = vecPos.x;
	this.position.y = vecPos.y;
	this.velocity = {x:0, y:0};
	this.velocity.x = vecVel.x;
	this.velocity.y = vecVel.y;
	this.dead = false;
	this.speed = speed;
}

Bullet.prototype.update = function()
{
	this.position.x += this.velocity.x * this.speed;
	this.position.y += this.velocity.y * this.speed;
}

Bullet.prototype.draw = function(context)
{
	context.drawImage(img_potato, this.position.x - img_potato.height/2, this.position.y - img_potato.height/2);
}

Bullet.prototype.kill = function()
{
	this.dead = true;
}

Bullet.prototype.isDead = function()
{
	return this.dead;
}

Bullet.prototype.getRect = function()
{
	var res = {x:0, y:0, width:0, height:0};

	res.x = this.position.x;
	res.y = this.position.y;
	res.width = img_potato.height;
	res.height = img_potato.height;

	return res;
}

Bullet.prototype.getCenter=function()
{
	var res = {x:0, y:0};

	res.x = this.position.x;
	res.y = this.position.y;

	return res;
}