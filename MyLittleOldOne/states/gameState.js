function GameState()
{
	this.oldOne = new OldOne();
	this.background = new RectangleShape(0,0,screenWidth,screenHeight,"#101010");
	this.nameLabel = new Label(this.oldOne.getName().toString(), "20px Lucida Console", 100,50,"center", "#e0e0e0");
	this.healthLabel = new Label("Omnipotence", "20px Lucida Console", 100, 100, "center", "#e0e0e0");
	this.ageLabel = new Label("", "12px Lucida Console", 100, 150, "center", "#e0e0e0");

	this.nameBackground = new RoundedLine(100, 50, 100, 30, "#101010");
	this.ageBackground = new RoundedLine(100, 50, 100, 20, "#101010");
	this.healthBackground = new RoundedLine(100,50,100,40,"#101010");

	this.healthGauge = new RectangleShape(10,10,100,100,"#50a050");

	this.oldOneShape = new OldOneShape(getScreenCenter().x, getScreenCenter().y - 2*(screenHeight / 16), screenWidth/4, screenHeight/4, "#909090");

	this.noiseSpammer = new NoiseSpammer();
}

GameState.prototype.init = function()
{
	this.oldOne.load();
	this.nameLabel.setText(this.oldOne.getName());
	this.oldOneShape = new OldOneShape(getScreenCenter().x, getScreenCenter().y - 2*(screenHeight / 16), screenWidth/4, screenHeight/4, getCookieValue("color"), getCookieValue("altColor"));
}

GameState.prototype.returnToMenu = function()
{
	return this.oldOne.isDead();
}

GameState.prototype.createNewOldOne = function()
{
	this.oldOne = new OldOne();
	this.oldOne.setName(getRandomName(2,2));
	this.oldOne.setHealth(10);
	this.oldOne.setBirthDate(new Date());
	this.oldOne.save();

	this.nameLabel.setText(this.oldOne.getName());

	var color = getRandomColor();
	var altColor = getDarkerColor(color);

	this.oldOneShape = new OldOneShape(getScreenCenter().x, getScreenCenter().y - 2*(screenHeight / 16), screenWidth/4, screenHeight/4, toHexString(color), toHexString(altColor));

	addCookie("color", toHexString(color));
	addCookie("altColor", toHexString(altColor));

	this.resize();
}

GameState.prototype.healthGaugeUpdate = function()
{
	this.healthGauge.setWidth((this.oldOne.getHealth() / 100) * 4 * (screenWidth / 16));
	this.healthGauge.setHeight((screenHeight/16)/2);
	this.healthGauge.setLeft(getScreenCenter().x - 4 * ((screenWidth / 16)  / 2));
	this.healthGauge.setTop(getScreenCenter().y + 4.6 * (screenHeight / 16));

	this.healthBackground.setWidth(4*(screenWidth/16));
	this.healthBackground.setHeight((screenHeight/16));
	this.healthBackground.setLeft(getScreenCenter().x - 4 * ((screenWidth / 16)  / 2));
	this.healthBackground.setTop(getScreenCenter().y + 4.6 * (screenHeight / 16) + (this.healthGauge.getHeight()/2));
}

GameState.prototype.resize = function()
{
	this.healthGaugeUpdate();

	this.nameBackground.setWidth((this.nameLabel.getText().length * 30)/2);
	this.nameBackground.setLeft(getScreenCenter().x - (this.nameBackground.getWidth()/2));
	this.nameBackground.setTop(getScreenCenter().y + 4 * (screenHeight / 16) - 8);

	this.ageBackground.setWidth((this.oldOne.getAgeString().length * 20)/2);
	this.ageBackground.setLeft(getScreenCenter().x - (this.ageBackground.getWidth()/2));
	this.ageBackground.setTop(getScreenCenter().y + 6 * (screenHeight / 16) - 4);
	
	this.nameLabel.setLeft(getScreenCenter().x);
	this.nameLabel.setTop(getScreenCenter().y + 4*(screenHeight/16));

	this.healthLabel.setLeft(getScreenCenter().x);
	this.healthLabel.setTop(getScreenCenter().y + 5*(screenHeight / 16));

	this.ageLabel.setLeft(getScreenCenter().x);
	this.ageLabel.setTop(getScreenCenter().y + 6*(screenHeight / 16));

	this.background.setWidth(screenWidth);
	this.background.setHeight(screenHeight);

	this.oldOneShape.setLeft(getScreenCenter().x);
	this.oldOneShape.setBaseLeft(getScreenCenter().x);
	this.oldOneShape.setTop(getScreenCenter().y - 2*(screenHeight / 16));
	this.oldOneShape.setBaseTop(getScreenCenter().y - 2*(screenHeight / 16));
	this.oldOneShape.setWidth(screenWidth/4);
	this.oldOneShape.setHeight(screenHeight/4);

	this.oldOneShape.resize();
}

GameState.prototype.update = function()
{
	this.oldOne.update();
	this.oldOneShape.update();
	this.oldOneShape.setHappyness(this.oldOne.getHealth());

	this.ageLabel.setText(this.oldOne.getAgeString());

	this.healthGaugeUpdate();

	this.noiseSpammer.update();
}

GameState.prototype.draw = function()
{
	this.background.draw();

	this.oldOneShape.draw();

	this.nameBackground.draw();
	this.ageBackground.draw();
	this.healthBackground.draw();

	this.nameLabel.draw();
	this.healthGauge.draw();
	this.healthLabel.draw();
	this.ageLabel.draw();
}

