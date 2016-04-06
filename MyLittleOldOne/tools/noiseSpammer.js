function NoiseSpammer()
{
	this.noiseTimer = 0;
	this.nextNoise = 0;
}

NoiseSpammer.prototype.update = function()
{
	if(this.noiseTimer >= this.nextNoise)
	{
		playRandomGrowl();

		this.noiseTimer = 0;
		this.nextNoise = Math.random() * 300 + 300;
	}else
	{
		this.noiseTimer ++;
	}
}