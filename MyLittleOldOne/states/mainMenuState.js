function MainMenuState()
{
	this.background = new RectangleShape(0,0,screenWidth,screenHeight,"#101010");
	this.title = new Label("My Little Old One", "60px Lucida Console", 400, 100, "center", "#e0e0e0");
	this.punchline = new Label("The Cosmos is empty right now:", "20px Lucida Console", 400, 200, "center", "#e0e0e0");
	this.startButton = new Button("Pray", "40px Lucida Console", 300, 300, 200, 100, "#404040", "#a0a0a0", "#f0f0f0");
	this.instruction = new Label(
		"Gods tend to disappear if nobody aknowledges them",
		"14px Lucida Console",
		400,
		550,
		"center",
		"#e0e0e0"
	);
	this.disclaimer = new Label(
		"(This \"game\" uses cookies)",
		"14px Lucida Console",
		400,
		550,
		"center",
		"#e0e0e0"
	);
}

MainMenuState.prototype.init = function()
{

}

MainMenuState.prototype.update = function()
{

}

MainMenuState.prototype.newGame = function()
{
	return this.startButton.isClicked();
}

MainMenuState.prototype.resize = function()
{
	this.background.setWidth(screenWidth);
	this.background.setHeight(screenHeight);

	this.title.setLeft(getScreenCenter().x);
	this.title.setTop(getScreenCenter().y - 4*(screenHeight / 16));

	this.punchline.setLeft(getScreenCenter().x);
	this.punchline.setTop(getScreenCenter().y);

	this.startButton.setLeft(getScreenCenter().x - this.startButton.getWidth() / 2);
	this.startButton.setTop((getScreenCenter().y + 2*(screenHeight / 16)));

	this.instruction.setLeft(getScreenCenter().x);
	this.instruction.setTop(getScreenCenter().y + 6*(screenHeight / 16));
	this.disclaimer.setLeft(getScreenCenter().x);
	this.disclaimer.setTop(getScreenCenter().y + 7*(screenHeight / 16));
}

MainMenuState.prototype.draw = function()
{
	this.background.draw();
	this.title.draw();
	this.punchline.draw();
	this.startButton.draw();
	this.instruction.draw();
	this.disclaimer.draw();
}