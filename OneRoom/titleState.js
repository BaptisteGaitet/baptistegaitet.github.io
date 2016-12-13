function TitleState()
{
	this.toGame = false;
}

TitleState.prototype.update = function()
{
	if(mouseClic)
	{
		this.toGame = true;
	}
}

TitleState.prototype.draw = function(context)
{
	context.drawImage(img_title, 0,0);
}

TitleState.prototype.getNextState = function()
{
	var res = "";

	if(this.toGame)
	{
		res = "game";
	}

	return res;
}

TitleState.prototype.reset = function()
{
	this.toGame = false;
}