function angleFromVector(vector)
{
	var res = 0;

	var normalized = normalize(vector);
	res = Math.atan2(normalized.y, normalized.x);
	res = res * 180 / Math.PI;

	return res;
}

function vectorFromPoints(pointA, pointB)
{
	var res = {x:0, y:0};

	res.x = pointB.x - pointA.x;
	res.y = pointB.y - pointA.y;

	return res;
}

function normalize(vector)
{
	var res = {x:0, y:0};

	var norm = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));

	res.x = vector.x / norm;
	res.y = vector.y / norm;

	return res;
}

function vectorFromAngle(angle)
{
	var res = {x:0, y:0};

	res.x = Math.cos(angle * Math.PI / 180);
	res.y = Math.sin(angle * Math.PI / 180);

	res = normalize(res);

	return res;
}

function getNorm(vector)
{
	res = 0;

	res = Math.sqrt(Math.pow(vector.x,2) + Math.pow(vector.y, 2));

	return res;
}
