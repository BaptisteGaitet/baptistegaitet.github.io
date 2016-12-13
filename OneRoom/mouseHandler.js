var mouseX = 0;
var mouseY = 0;
var mouseDown = false;
var lastMouseDown = false;
var mouseClic = false;
var mousePress = false;

function onMouseMove(e)
{
	mouseX = e.clientX;
	mouseY = e.clientY;
}

function onMouseDown()
{
	mouseDown = true;
}

function onMouseUp()
{
	mouseDown = false;
}

function mouseUpdate()
{
	if(!mouseDown && lastMouseDown)
	{
		mouseClic = true;
	}
	else
	{
		mouseClic = false;
	}

	if(!lastMouseDown && mouseDown)
	{
		mousePress = true;
	}else
	{
		mousePress = false;
	}

	lastMouseDown = mouseDown;
}

function mouseIsOver(rect)
{
	res = false;

	if(mouseX > rect.x && mouseX < rect.x + rect.width && mouseY > rect.y && mouseY < rect.y + rect.height)
	{
		res = true;
	}

	return res;
}