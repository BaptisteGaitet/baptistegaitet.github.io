function getRandomColor()
{
	res = {r:0, g:0, b:0};

	res.r = 50 + (Math.floor(Math.random() * 205));
	res.g = 50 + (Math.floor(Math.random() * 205));
	res.b = 50 + (Math.floor(Math.random() * 205));

	return res;
}

function toHexString(_color)
{
	res = "";

	var strRed = _color.r.toString(16);
	if(strRed.length <= 1)
		strRed = "0" + strRed;

	var strGreen = _color.g.toString(16);
	if(strGreen.length <= 1)
		strGreen = "0" + strGreen;

	var strBlue = _color.b.toString(16);
	if(strBlue.length <= 1)
		strBlue = "0" + strBlue;

	res = '#' + strRed +""+ strGreen +""+ strBlue;

	return res;
}

function getDarkerColor(_color)
{
	res = {r:0, g:0, b:0};

	res.r = _color.r - 40;
	res.g = _color.g - 40;
	res.b = _color.b - 40;

	return res;
}

function getInverseColor(_color)
{
	res = {r:0, g:0, b:0};

	res.r = 215 - _color.r;
	res.g = 215 - _color.g;
	res.b = 215 - _color.b;

	return res;
}