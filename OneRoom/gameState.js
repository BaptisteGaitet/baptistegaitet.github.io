function GameState()
{
	this.enemies = [];
	this.bullets = [];
	this.marbles = [];
	this.button = new Button({x:165, y:140}, img_button);
	this.buttonB = new Button({x:165, y:215}, img_button);
	this.buttonC = new Button({x:22, y:510}, img_button);
	this.potatoButton = new Button({x:145, y:400}, img_turretbutton);
	this.potatoButton.setCooldown(1);
	this.trainButton = new TrainButton({x:120, y:385});
	this.knob = new Knob({x:70, y:335});
	this.slingButton = new SlingButton({x:185, y:65});

	this.pikes = new Pikes({x:1066-100, y:300}, this.button);
	this.pikesB = new Pikes({x:1066-100, y:500}, this.buttonB);
	this.pikesC = new Pikes({x:400, y:520}, this.buttonC);
	this.turret = new Turret({x:410, y:250});

	this.lampA = new Lamp({x:500, y:120}, 1);
	this.lampB = new Lamp({x:766, y:300}, 2);
	this.lampC = new Lamp({x:466, y:450}, 3);

	this.switchA = new Switch({x:80, y:170}, 1, true);
	this.switchB = new Switch({x:80, y:215}, 2, false);
	this.switchC = new Switch({x:80, y:260}, 3, false);

	this.currentLamp = 1;

	this.train = new Train({x:750, y:365});
	this.slingshot = new Slingshot({x:995, y:120});

	this.gameover = false;
}

GameState.prototype.update = function()
{
	this.lampA.update();
	this.lampB.update();
	this.lampC.update();
	this.switchA.update();
	this.switchB.update();
	this.switchC.update();

	this.trainButton.update();
	this.train.setAngle(this.trainButton.getAngle());
	this.train.update();

	this.slingButton.update();

	this.slingshot.setStrength(this.slingButton.getStrength());
	this.slingshot.setDirection(this.slingButton.getDirection());

	this.slingshot.update();
	if(this.slingButton.isShooting())
	{
		for(var i = 0; i < 50; i++)
		{
			this.marbles.push(new Marble(this.slingshot.getMarblePosition(), this.slingshot.getRandomTargetPosition()));
		}
	}

	if(this.switchA.isClicked())
	{
		this.currentLamp = this.switchA.getId();
		this.switchA.setOn(true);
		this.switchB.setOn(false);
		this.switchC.setOn(false);
		this.lampA.setOn(true);
		this.lampB.setOn(false);
		this.lampC.setOn(false);
	}else if(this.switchB.isClicked())
	{
		this.currentLamp = this.switchB.getId();
		this.switchA.setOn(false);
		this.switchB.setOn(true);
		this.switchC.setOn(false);
		this.lampA.setOn(false);
		this.lampB.setOn(true);
		this.lampC.setOn(false);
	}else if(this.switchC.isClicked())
	{
		this.currentLamp = this.switchC.getId();
		this.switchA.setOn(false);
		this.switchB.setOn(false);
		this.switchC.setOn(true);
		this.lampA.setOn(false);
		this.lampB.setOn(false);
		this.lampC.setOn(true);
	}

	if(Math.random()*10 <= 1)
	{
		
		var rand = Math.random() * 100;
		if(rand < 10)
		{
			var tmp = new Enemy(3);
			this.enemies.push(tmp);
		}else if(rand < 30)
		{
			var tmp = new Enemy(2);
			this.enemies.push(tmp);
		}else
		{
			var tmp = new Enemy(1);
			this.enemies.push(tmp);
		}
		
	}

	this.sortEnemies();

	for(var i = 0; i < this.enemies.length; i++)
	{
		this.enemies[i].update();

		var bedRect = {x:270, y:360, width:130, height:90};
		if(this.collide(this.enemies[i].getRect(), bedRect))
		{
			this.gameover = true;
		}

		if(this.currentLamp == 1 && this.enemies[i].isWithin(this.lampA.getCenter(),100))
		{
			this.enemies[i].kill();
		}

		if(this.currentLamp == 2 && this.enemies[i].isWithin(this.lampB.getCenter(),100))
		{
			this.enemies[i].kill();
		}

		if(this.currentLamp == 3 && this.enemies[i].isWithin(this.lampC.getCenter(),100))
		{
			this.enemies[i].kill();
		}

		if(this.enemies[i].getCenter().x < 266)
		{
			this.enemies[i].kill();
		}
		for(var j = 0; j < this.bullets.length; j++)
		{
			if(this.collide(this.bullets[j].getRect(), this.enemies[i].getRect()))
			{
				this.bullets[j].kill();
				this.enemies[i].kill();
			}
		}

		if(this.train.isMoving())
		{
			if(this.collide(this.train.getRect(), this.enemies[i].getRect()))
			{
				this.enemies[i].kill();
			}
		}

		if(this.enemies[i].isWithin(this.slingshot.getTargetPosition(), 40) && this.slingButton.isShooting())
		{
			this.enemies[i].stun();
		}
	}
	for(var i = 0; i < this.bullets.length; i++)
	{
		this.bullets[i].update();
		if(this.bullets[i].getCenter().x < 266 || this.bullets[i].getCenter().x > 1066 || this.bullets[i].getCenter().y < 0 || this.bullets[i].getCenter().y > 600)
		{
			this.bullets[i].kill();
		}
	}

	for(var i = 0; i < this.marbles.length; i++)
	{
		this.marbles[i].update();
	}

	this.button.update();
	this.buttonB.update();
	this.buttonC.update();
	this.potatoButton.update();
	this.knob.update();
	this.pikes.update();
	this.pikesB.update();
	this.pikesC.update();
	this.turret.setRotation(this.knob.getRotation());
	this.turret.update();

	if(this.button.isClicked())
	{
		for(var i = 0; i < this.enemies.length; i++)
		{
			if(this.enemies[i].isWithin(this.pikes.getCenter(), 64))
			{
				this.enemies[i].kill();
			}
		}
	}

	if(this.buttonB.isClicked())
	{
		for(var i = 0; i < this.enemies.length; i++)
		{
			if(this.enemies[i].isWithin(this.pikesB.getCenter(), 64))
			{
				this.enemies[i].kill();
			}
		}
	}

	if(this.buttonC.isClicked())
	{
		for(var i = 0; i < this.enemies.length; i++)
		{
			if(this.enemies[i].isWithin(this.pikesC.getCenter(), 64))
			{
				this.enemies[i].kill();
			}
		}
	}

	if(this.potatoButton.isClicked())
	{
		snd_patator.stop();
		snd_patator.play();
		var vel = vectorFromAngle(this.knob.getRotation());
		this.bullets.push(new Bullet({x:this.turret.getCenter().x, y:this.turret.getCenter().y}, vel, 20));
	}

	for(var i = 0; i < this.enemies.length; i++)
	{
		if(this.enemies[i].isDead())
		{
			this.enemies.splice(i, 1);
		}
	}

	for(var i = 0; i < this.bullets.length; i++)
	{
		if(this.bullets[i].isDead())
		{
			this.bullets.splice(i, 1);
		}
	}

	for(var i = 0; i < this.marbles.length; i++)
	{
		if(this.marbles[i].isDead())
		{
			this.marbles.splice(i, 1);
		}
	}
}

GameState.prototype.draw = function(context)
{
	//context.drawImage(img_panel, 0,0);
	context.drawImage(img_room, 0,0);

	this.pikes.draw(context);
	this.pikesB.draw(context);
	this.pikesC.draw(context);
	this.turret.draw(context);

	this.lampA.draw(context);
	this.lampB.draw(context);
	this.lampC.draw(context);

	this.train.draw(context);
	this.slingshot.draw(context);

	for(var i = 0; i < this.enemies.length; i++)
	{
		this.enemies[i].draw(context);
	}

	for(var i = 0; i < this.bullets.length; i++)
	{
		this.bullets[i].draw(context);
	}

	for(var i = 0; i < this.marbles.length; i++)
	{
		this.marbles[i].draw(context);
	}

	this.button.draw(context);
	this.buttonB.draw(context);
	this.buttonC.draw(context);
	this.potatoButton.draw(context);
	this.knob.draw(context);

	this.switchA.draw(context);
	this.switchB.draw(context);
	this.switchC.draw(context);

	this.trainButton.draw(context);

	this.slingButton.draw(context);

	context.globalCompositeOperation='lighter';
	if(this.currentLamp == 1)
	{
		this.lampA.drawLight(context);
	}
	
	if(this.currentLamp == 2)
	{
		this.lampB.drawLight(context);
	}

	if(this.currentLamp == 3)
	{
		this.lampC.drawLight(context);
	}

	context.drawImage(img_highlight, 0,0);

	context.globalCompositeOperation='source-over';


}

GameState.prototype.collide = function(rectA, rectB)
{
	var res = false;
	if (
		rectA.x < rectB.x + rectB.width 	&&
   		rectA.x + rectA.width > rectB.x		&&
  		rectA.y < rectB.y + rectB.height 	&&
   		rectA.height + rectA.y > rectB.y
   		)
	{
    	res = true;
	}
	return res;
}

GameState.prototype.sortEnemies = function()
{
	var sorted = false;

	while(!sorted)
	{
		sorted = true;

		for(var i = 0; i < this.enemies.length -1; i++)
		{
			if(this.enemies[i].getPosition().y > this.enemies[i+1].getPosition().y)
			{
				var tmpEnemy = this.enemies[i];
				this.enemies[i] = this.enemies[i+1];
				this.enemies[i+1] = tmpEnemy;
				sorted = false;
			}
		}
	}
}

GameState.prototype.getNextState = function()
{
	res = "";
	if(this.gameover)
	{
		res = "gameover";
	}
	return res;
}

GameState.prototype.reset = function()
{
	this.gameover = false;
	this.enemies.splice(0, this.enemies.length);
	this.bullets.splice(0, this.bullets.length);
	this.marbles.splice(0, this.marbles.length);
}
