var sndHover = new Audio("snd/hover.mp3");
var sndConfirm = new Audio("snd/confirm.mp3");
var growlOne = new Audio("snd/oo1.mp3");
var growlTwo = new Audio("snd/oo2.mp3");
var growlThree = new Audio("snd/oo3.mp3");
var growlFour = new Audio("snd/oo4.mp3");
var growlFive = new Audio("snd/oo5.mp3");

function play(_id)
{
	if(_id == "hover")
	{
		sndHover.play();
	}else if(_id == "confirm")
	{
		sndConfirm.play();
	}else if(_id == "grunt1")
	{
		growlOne.play();
	}else if(_id == "grunt2")
	{
		growlTwo.play();
	}else if(_id == "grunt3")
	{
		growlThree.play();
	}else if(_id == "grunt4")
	{
		growlFour.play();
	}else if(_id == "grunt5")
	{
		growlFive.play();
	}
}

function playRandomGrowl()
{
	var randomGrunt = Math.floor((Math.random() * 5) + 1);
	switch(randomGrunt)
	{
		case 1:
			play("grunt1");
			break;
		case 2:
			play("grunt2");
			break;
		case 3:
			play("grunt3");
			break;
		case 4:
			play("grunt4");
			break;
		case 5:
			play("grunt5");
			break;
		default:	
			break;
	}
}