function GameOverState()
{
	this.toTitle = false;
}

GameOverState.prototype.update = function()
{
	if(mouseClic)
	{
		this.toTitle = true;
	}
}

GameOverState.prototype.draw = function(context)
{
	context.drawImage(img_gameover, 0,0);
}

GameOverState.prototype.getNextState = function()
{
	var res = "";

	if(this.toTitle)
	{
		res = "title";
	}

	return res;
}

GameOverState.prototype.reset = function(context)
{
	this.toTitle = false;
}