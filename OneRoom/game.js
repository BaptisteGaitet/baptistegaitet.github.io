function update()
{
	if(imageLoaded)
	{
		// BACKGROUND
		context.fillStyle="#404040";
		context.fillRect(0,0,266,600);
		context.fillStyle="#202020";
		context.fillRect(266,0,800,600);

		// MOUSE
		mouseUpdate();

		// STATES
		if(currentState == "game")
		{
			gameState.update();
			gameState.draw(context);
			if(gameState.getNextState() != "")
			{
				msc_game.stop();
				msc_gameover.play();
				gameOverState.reset();
				currentState = gameState.getNextState();
			}
		}else if(currentState == "title")
		{
			titleState.update();
			titleState.draw(context);
			if(titleState.getNextState() != "")
			{
				msc_title.stop();
				msc_game.play();
				gameState.reset();
				currentState = titleState.getNextState();
			}
		}else if(currentState == "gameover")
		{
			gameOverState.update();
			gameOverState.draw(context);
			if(gameOverState.getNextState() != "")
			{
				msc_gameover.stop();
				msc_title.play();
				titleState.reset();
				currentState = gameOverState.getNextState();
			}
		}
	}else
	{
		console.log('loading...');
	}
}

// HTML5 OBJECTS
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

// STATES
var gameState = new GameState();
var titleState = new TitleState();
var gameOverState = new GameOverState();
var currentState = "title";

setInterval(update, 1000 / 60);

msc_game.setVolume(0.5);
msc_gameover.setVolume(0.5);
msc_title.setVolume(0.5);

msc_game.loop(true);
msc_title.loop(true);
msc_title.play();