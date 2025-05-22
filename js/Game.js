class Game{
	loop = new Loop();
	constructor(){
		setInterval(this.loop.go(), Config.loop_interval_timing);
	}
}
