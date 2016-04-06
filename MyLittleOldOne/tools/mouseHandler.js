var mouseX = 0;
var mouseY = 0;
var mouseDown = false;
var lastMouseDown = false;
var mouseClic = false;

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
	lastMouseDown = mouseDown;
}