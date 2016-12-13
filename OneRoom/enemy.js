function Enemy(spawn)
{
	this.position = {x:0, y:0};
	this.velocity = {x:0, y:0};
	this.dead = false;
	this.slowed = false;
	this.stuned = false;
	this.stunTimer = 0;
	this.stunCooldown = 120;
	this.path = [];
	this.path = this.initPath(spawn);
	this.position = this.initPosition(spawn);
	this.currentDestination = 0;

	this.speed = Math.random() * 0.5;
}

Enemy.prototype.update = function()
{
	this.velocity = normalize(vectorFromPoints(this.position, this.path[this.currentDestination]));
	this.velocity.x *= this.speed;
	this.velocity.y *= this.speed;

	if(getNorm(vectorFromPoints(this.position, this.path[this.currentDestination])) < 1 && this.currentDestination < this.path.length-1)
	{
		this.currentDestination ++;
	}

	if(this.stuned && this.stunTimer <= 0)
	{
		this.stuned = false;;
	}
	else if(this.stuned)
	{
		this.stunTimer--;
	}else
	{
		if(!this.slowed)
		{
			this.position.x += this.velocity.x;
			this.position.y += this.velocity.y;
		}else
		{
			this.position.x += this.velocity.x/4;
			this.position.y += this.velocity.y/4;
		}
	}
}

Enemy.prototype.draw = function(context)
{

	context.drawImage(img_enemy, this.position.x - img_enemy.height/2, this.position.y - img_enemy.height/2);	
	
}

Enemy.prototype.isWithin = function(vecPos, radius)
{
	res = false;

	var vecDiff = {x:vecPos.x - this.getCenter().x, y:vecPos.y - this.getCenter().y};
	var dist = Math.sqrt(Math.pow(vecDiff.x, 2)+Math.pow(vecDiff.y,2));
	if(dist < radius)
	{
		res = true;
	}

	return res;
}

Enemy.prototype.kill = function()
{
	this.dead = true;
}

Enemy.prototype.isDead = function()
{
	return this.dead;
}

Enemy.prototype.getCenter = function()
{
	return {x: this.position.x, y: this.position.y};
}

Enemy.prototype.getRect = function()
{
	var res = {x:0, y:0, width:0, height:0};

	res.x = this.position.x - img_enemy.height/2;
	res.y = this.position.y- img_enemy.height/2;
	res.width = img_enemy.height;
	res.height = img_enemy.height;

	return res;
}

Enemy.prototype.setSlowed = function(value)
{
	this.slowed = value;
}

Enemy.prototype.stun = function()
{
	this.stuned = true;
	this.stunTimer = this.stunCooldown;
}

Enemy.prototype.initPath = function(spawn)
{
	var res = [];
	switch(spawn)
	{
		case 1:
			res = getPath(1);
			break;
		case 2:
			res = getPath(2);
			break;
		case 3:
			res = getPath(3);
			break;
	}
	return res;
}

Enemy.prototype.initPosition = function(spawn)
{
	var res = {x:0,y:0};
	switch(spawn)
	{
		case 1:
			res = {x:800 + 266,y:350};
			break;
		case 2:
			res = {x:690,y:150};
			break;
		case 3:
			res = {x:420,y:100};
			break;
	}
	
	return res;
}

Enemy.prototype.getPosition = function()
{
	return this.position;
}