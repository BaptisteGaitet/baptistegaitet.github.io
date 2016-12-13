function TrainButton(vecPos)
{
	this.position = {x:0, y:0};
	this.position.x = vecPos.x;
	this.position.y = vecPos.y;
	this.angle = 0;
	this.selected = false;
}

TrainButton.prototype.update = function()
{

	if(this.angle>=360)
	{
		this.angle = 0;
	}

	var translation = {x:0, y:0};
	translation = vectorFromAngle(this.angle);
	var rect = {x:this.position.x - (img_buttonTrain.width/2) + (translation.x * 90), y:this.position.y - (img_buttonTrain.height/2) + (translation.y * 90), width:img_buttonTrain.height, height:img_buttonTrain.height};
	if(mouseIsOver(rect) && mousePress)
	{
		this.selected = true;
	}
	if(!mouseDown)
	{
		this.selected = false;
	}

	if(this.selected)
	{
		this.angle = angleFromVector(vectorFromPoints({x:this.getCenter().x, y:this.getCenter().y}, {x:mouseX, y:mouseY}));
	}
}

TrainButton.prototype.draw = function(context)
{
	var translation = {x:0, y:0};
	translation = vectorFromAngle(this.angle);

	context.translate(this.position.x  + translation.x * 84,this.position.y + translation.y * 84);
	context.rotate(this.angle * Math.PI / 180);

	context.drawImage(img_buttonTrain, - img_buttonTrain.width/2, - img_buttonTrain.height/2);

	context.rotate(-this.angle * Math.PI / 180);
	context.translate(-this.position.x  - translation.x * 84, -this.position.y  - translation.y * 84);
}

TrainButton.prototype.getAngle = function()
{
	return this.angle;
}

TrainButton.prototype.getCenter = function()
{
	return {x:this.position.x, y:this.position.y};
}