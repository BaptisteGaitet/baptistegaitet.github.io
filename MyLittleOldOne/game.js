function load()
{
	gameState.init();
	mainMenuState.init();
	
	loaded = true;
}

function update()
{
	mouseUpdate();

	if(windowSizeChanged)
	{
		gameState.resize();
		mainMenuState.resize();

		windowSizeChanged = false;
	}
	
	if(loaded)
	{
		if(currentState == "gameState")
		{
			gameState.update();
			gameState.draw();

			if(gameState.returnToMenu())
			{
				currentState = "mainMenuState";
			}
			
		}else if(currentState == "mainMenuState")
		{
			mainMenuState.update();
			mainMenuState.draw();

			if(mainMenuState.newGame())
			{
				gameState.createNewOldOne();
				currentState = "gameState";
			}
		}
	}
}

var loaded = false;
var currentState = "gameState";

var gameState = new GameState();
var mainMenuState = new MainMenuState();

load();

setInterval(update, 1000 / 60);