var firstRow = [];
firstRow[0] = {x:700 + 266, y:200, radius:100};
firstRow[1] = {x:700 + 266, y:300, radius:100};
firstRow[2] = {x:700 + 266, y:500, radius:100};

var secondRow = [];
secondRow[0] = {x:450 + 266, y:200, radius:100};
secondRow[1] = {x:450 + 266, y:300, radius:100};
secondRow[2] = {x:450 + 266, y:500, radius:100};
	
var thirdRow = [];
thirdRow[0] = {x:250 + 266, y:200, radius:100};
thirdRow[1] = {x:250 + 266, y:300, radius:100};
thirdRow[2] = {x:250 + 266, y:500, radius:100};

var fourthRow = [];
fourthRow[0] = {x:100 + 266, y:400, radius:100};
fourthRow[1] = {x:100 + 266, y:150, radius:100};

var finalPosition = {x:360, y:380, radius:0};

function getDestination(rowNb)
{
	var res = {x:0, y:0};
	var randomDisplacement = {x:0, y:0};
	var random = Math.floor(Math.random() * 3);

	if(rowNb == 4)
	{
		random = Math.floor(Math.random() * 2);
	}

	switch(rowNb)
	{
		case 1:
			randomDisplacement = vectorFromAngle(Math.random() * 360);
			var randNorm = Math.random() * firstRow[random].radius;
			randomDisplacement.x *= randNorm;
			randomDisplacement.y *= randNorm;
			res.x = firstRow[random].x + randomDisplacement.x;
			res.y = firstRow[random].y + randomDisplacement.y;
			break;
		case 2:
			randomDisplacement = vectorFromAngle(Math.random() * 360);
			var randNorm = Math.random() * secondRow[random].radius;
			randomDisplacement.x *= randNorm;
			randomDisplacement.y *= randNorm;
			res.x = secondRow[random].x + randomDisplacement.x;
			res.y = secondRow[random].y + randomDisplacement.y;
			break;
		case 3:
			randomDisplacement = vectorFromAngle(Math.random() * 360);
			var randNorm = Math.random() * thirdRow[random].radius;
			randomDisplacement.x *= randNorm;
			randomDisplacement.y *= randNorm;
			res.x = thirdRow[random].x + randomDisplacement.x;
			res.y = thirdRow[random].y + randomDisplacement.y;
			break;
		case 4:
			randomDisplacement = vectorFromAngle(Math.random() * 360);
			var randNorm = Math.random() * fourthRow[random].radius;
			randomDisplacement.x *= randNorm;
			randomDisplacement.y *= randNorm;
			res.x = fourthRow[random].x + randomDisplacement.x;
			res.y = fourthRow[random].y + randomDisplacement.y;
			break;
		case 5:
			res.x = finalPosition.x;
			res.y = finalPosition.y;
			break;
	}
	return res;
}

function getPath(startingRow)
{
	var res = [];
	switch(startingRow)
	{
		case 1:
			res.push(getDestination(1));
			res.push(getDestination(2));
			res.push(getDestination(3));
			res.push(getDestination(4));
			res.push(getDestination(5));
			break;
		case 2:
			res.push(getDestination(2));
			res.push(getDestination(3));
			res.push(getDestination(4));
			res.push(getDestination(5));
			break;
		case 3:
			res.push(getDestination(3));
			res.push(getDestination(4));
			res.push(getDestination(5));
			break;
		case 4:
			res.push(getDestination(4));
			res.push(getDestination(5));
			break;
		case 5:
			res.push(getDestination(5));
			break;
	}
	return res;
}