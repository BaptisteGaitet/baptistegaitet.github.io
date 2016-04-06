function init()
{
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;

	resizeCanvas(screenWidth, screenHeight);
}

function onResize()
{
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;
	resizeCanvas(screenWidth, screenHeight);
	windowSizeChanged = true;
}

function resizeCanvas(_width, _height)
{
	document.getElementById("game").width = _width;
	document.getElementById("game").height = _height;
}

function getScreenCenter()
{
	var centerV2 = {x:0, y:0};
	centerV2.x = screenWidth / 2;
	centerV2.y = screenHeight /2;
	return centerV2;
}

var screenWidth = 0;
var screenHeight = 0;
var windowSizeChanged = true;

init();