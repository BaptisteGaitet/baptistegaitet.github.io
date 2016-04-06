function addCookie(id, value)
{
	var cookieString = id + "=" + value + ";";

	var expirationDate = new Date();
	expirationDate.setTime(expirationDate.getTime() + (1000*60*60*24*30));
	
	cookieString += "expires=" + expirationDate + ";";

	cookieString += "path=/";

	document.cookie = cookieString;
}

function setCookiesToBeDeleted(id)
{
	var cookie = "";
	var cookieString = id + "=" + value + ";";

	var expirationDate = new Date(0);
	cookieString += "expires=" + expirationDate + ";";

	cookieString += "path=/";

	document.cookie = cookieString;
}

function displayCookies()
{
	console.log("Cookie string:\n" + document.cookie);
	var cookieArray = document.cookie.split(';');
	for(var i = 0; i < cookieArray.length; i++)
	{
		console.log("cookie n°" + i + ":\n" + cookieArray[i]);
	}
}

function getCookieValue(id)
{
	var res = "";
	var cookieArray = document.cookie.split(';');

	for(var i = 0; i < cookieArray.length; i ++)
	{
		var trimedCookie = cookieArray[i].trim();
		var cookieId = trimedCookie.split('=')[0];
		var cookieValue = trimedCookie.split('=')[1];

		if(cookieId == id)
		{
			res = cookieValue;
		}
	}

	return res;
}