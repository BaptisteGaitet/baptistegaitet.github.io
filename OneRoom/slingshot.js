function Slingshot(vecPos)
{
	this.position = {x:0, y:0};
	this.position.x = vecPos.x;
	this.position.y = vecPos.y;
	this.direction = {x:0, y:0};
	this.strength = 0;
	this.targetPosition = {x:0, y:0};
}

Slingshot.prototype.update = function()
{

}

Slingshot.prototype.draw = function(context)
{
	//context.drawImage(img_sling, this.position.x - img_sling.height/2, this.position.y - img_sling.height/2);
	
	context.strokeStyle="#aa704a";

	context.beginPath();
	context.moveTo(this.position.x - 4, this.position.y - 2);
	context.lineTo(this.position.x - (this.direction.x * this.strength * 2), this.position.y - (this.direction.y * this.strength * 2));
	context.stroke();

	context.beginPath();
	context.moveTo(this.position.x + 8, this.position.y + 8);
	context.lineTo(this.position.x - (this.direction.x * this.strength * 2), this.position.y - (this.direction.y * this.strength * 2));
	context.stroke();

	context.drawImage(img_piece, this.position.x - img_piece.height/2 - (this.direction.x * this.strength * 2), this.position.y - img_piece.height/2 - (this.direction.y * this.strength * 2));

	if(getNorm(vectorFromPoints(this.position, {x:this.position.x + this.direction.x * this.strength, y:this.position.y + this.direction.y * this.strength}))> 1 && mouseDown)
	{
		this.targetPosition.x = this.position.x - img_area.height/2 + (this.direction.x * this.strength * 20);
		this.targetPosition.y = this.position.y - img_area.height/2 + (this.direction.y * this.strength * 20);
		context.drawImage(img_area,this.targetPosition.x - img_area.height/2, this.targetPosition.y- img_area.height/2);
	}
}

Slingshot.prototype.setStrength = function(value)
{
	this.strength = value;
}

Slingshot.prototype.setDirection = function(vector)
{
	this.direction = vector;
}

Slingshot.prototype.getMarblePosition = function()
{
	return {x:this.position.x - img_piece.height/2 - (this.direction.x * this.strength), y:this.position.y - 16 - img_piece.height/2 - (this.direction.y * this.strength)};
}

Slingshot.prototype.getTargetPosition = function()
{
	return this.targetPosition;
}

Slingshot.prototype.getRandomTargetPosition = function()
{
	var res = {x:0, y:0};
	var angle = Math.random() * 360;
	var amount = Math.random() * 10;
	res = this.targetPosition;

	res.x += vectorFromAngle(angle).x * amount;
	res.y += vectorFromAngle(angle).y * amount;

	return res;
}