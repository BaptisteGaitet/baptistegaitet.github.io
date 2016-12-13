function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
        this.sound.currentTime = 0;
    }
    this.pause = function(){
        this.sound.pause();
    }
    this.loop = function(value){
    	this.sound.loop = value;
    }
    this.setVolume = function(value){
    	this.sound.volume = value;
    }
}

var msc_title = new Sound("ost/02_loop_calme1.mp3");
var msc_game = new Sound("ost/05_loop_ultra_vnr1.mp3");
var msc_gameover = new Sound("ost/11_fin.mp3");

var snd_btnturn = new Sound("boutons/bouton_a_tourner.mp3");
var snd_btnpush = new Sound("boutons/gros_bouton_push.mp3");
var snd_btnrelease = new Sound("boutons/gros_bouton_release.mp3");
var snd_patator = new Sound("sfx/patator.mp3");
var snd_train = new Sound("sfx/train.mp3");
var snd_switch = new Sound("boutons/petit_bouton.mp3");
var snd_elastic = new Sound("sfx/elastic.mp3");
var snd_marble = new Sound("sfx/billator.mp3");