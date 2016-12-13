function Train(vecPos)
{
	this.position = {x:0, y:0};
	this.position.x = vecPos.x;
	this.position.y = vecPos.y;
	this.angle = 0;
	this.moving = false;
	this.lastPosition = {x:0, y:0};
}

Train.prototype.update = function()
{
	this.moving = false;
	if(this.lastPosition.x != this.getTrainPosition().x || this.lastPosition.y != this.getTrainPosition().y)
	{
		this.moving = true;
	}

	if(this.moving)
	{
		snd_train.play();
	}else
	{
		snd_train.pause();
	}

	this.lastPosition = this.getTrainPosition();
}

Train.prototype.draw = function(context)
{
	var translation = {x:0, y:0};
	translation = vectorFromAngle(this.angle);
	context.translate(translation.x * 175, translation.y * 175);

	context.translate(this.position.x, this.position.y);
	context.rotate((130 + this.angle) * Math.PI / 180);

	context.drawImage(img_train, - img_train.width/2, - img_train.height/2);

	context.rotate(- ((130 + this.angle) * Math.PI / 180));
	context.translate(-this.position.x, -this.position.y);

	context.translate(-translation.x * 175, -translation.y * 175);
}

Train.prototype.getCenter = function()
{
	return {x:this.position.x + img_track.width/2, y:this.position.y + img_track.height/2};
}

Train.prototype.setAngle = function(value)
{
	this.angle = value;
}

Train.prototype.getTrainPosition = function()
{
	var translation = {x:0, y:0};
	translation = vectorFromAngle(this.angle);
	return {x:this.position.x  + (translation.x * 50), y:this.position.y + (translation.y * 50)};
}

Train.prototype.getRect = function()
{
	var res = {x:0, y:0, width:0, height:0};

	var translation = {x:0, y:0};
	translation = vectorFromAngle(this.angle);

	res.x = this.position.x -(img_train.height/4) + (translation.x * 140);
	res.y = this.position.y - (img_train.height/4) + (translation.y * 140);
	res.width = img_train.height/2;
	res.height = img_train.height/2;

	return res;
}

Train.prototype.isMoving = function()
{
	return this.moving;
}