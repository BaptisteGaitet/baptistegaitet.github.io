function OldOne()
{
	this.name = "Undefined";
	this.health = 0;
	this.birthDate = new Date();
	this.healthTimer = 0;
	this.dead = false;
}

OldOne.prototype.setName = function(_name)
{
	this.name = _name;
}

OldOne.prototype.getName = function()
{
	return this.name;
}

OldOne.prototype.setHealth = function(_health)
{
	this.health = _health;
}

OldOne.prototype.getHealth = function()
{
	return this.health;
}

OldOne.prototype.setBirthDate = function(_birthDate)
{
	this.birthDate = _birthDate;
}

OldOne.prototype.getBirthDate = function()
{
	return this.birthDate;
}

OldOne.prototype.save = function()
{
	addCookie("name", this.name);

	addCookie("health", this.health.toString());

	addCookie("birthDate", this.birthDate.getTime());

	var now = new Date();
	addCookie("lastUpdate", now.getTime());
}

OldOne.prototype.load = function()
{
	if(getCookieValue("name") != "")
	{
		this.name = getCookieValue("name");
	}
	else
	{
		console.log("Couldn't load name cookie");
		this.dead = true;
	}
	
	if(getCookieValue("health") != "")
	{
		this.health = parseFloat(getCookieValue("health"));
	}
	else
	{
		console.log("Couldn't load health cookie");
		this.dead = true;
	}

	if(getCookieValue("birthDate") != "")
	{
		this.birthDate = new Date(parseInt(getCookieValue("birthDate")));
	}
	else
	{
		console.log("Couldn't load birthDate cookie");
		this.dead = true;
	}
	
	this.calculateHealthLoss();
}

OldOne.prototype.calculateHealthLoss = function()
{
	var lastUpdate = new Date(parseInt(getCookieValue("lastUpdate")));
	var now = new Date();
	var difference = now.getTime() - lastUpdate.getTime();

	this.health -= (difference / (24*60*60*10)) / 100;
}

OldOne.prototype.isDead = function()
{
	return this.dead;
}

OldOne.prototype.getAgeString = function()
{
	var res = "";
	var now = new Date;
	var ageInMilliseconds = now.getTime() - this.birthDate.getTime();
	var nbOfSeconds = Math.floor(ageInMilliseconds / 1000);
	var nbOfMinutes = Math.floor(ageInMilliseconds / (1000 * 60));
	var nbOfHours = Math.floor(ageInMilliseconds / (1000 * 60 * 60));
	var nbOfDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

	res += (nbOfDays) + "d : " + (nbOfHours % 24) + "h : " + (nbOfMinutes % 60) + "m : " + (nbOfSeconds % 60) + "s";

	return res;
}

OldOne.prototype.update = function()
{
	this.healthTimer ++;
	if(this.healthTimer >= 60)
	{
		this.healthTimer = 0;

		this.health += 100 / 600;
		if(this.health > 100)
		{
			this.health = 100;
		}

		this.save();
	}

	if(this.health <= 0)
	{
		this.dead = true;
	}
}