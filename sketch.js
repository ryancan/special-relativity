
var train;
var light;
var blip;
var val=0;

function setup(){
  createCanvas(720,400);

  train = new reg;
  light = new sig;
  blip = new blip;

  noLoop();
}

function draw(){

  background(230);
  
      train.move();
      train.display();
      light.move();
      light.display();
      blip.move();
      blip.display();
      
}

function mousePressed(){
  loop();
}
function mouseReleased(){
  noLoop();
}


function reg(){

  this.x = 100;
  this.y = 100;
  this.xspeed = 2;
  this.yspeed = 0

  this.move = function(){

    if (this.x > width){
      this.x = 100;
    }else{
      this.x = this.x + this.xspeed;
    }

  };
  this.display = function(){
    fill(100,100,100);
    rect(this.x,this.y,100,50);
  };
}

function sig(){

  this.x = train.x - 25;
  this.y = train.y - 10;
  this.xspeed = train.xspeed;
  this.yspeed = train.yspeed;

  this.move = function(){

    if (this.x > width){
      this.x = 100;
    }else{
      this.x = this.x + this.xspeed;
    }
  };
  this.display = function(){
    fill(50,50,50);
    rect(this.x+50,this.y+50,10,10);
  };
}

function blip(){

    this.x = light.x + 55;
    this.y = light.y + 50;
    this.xspeed = light.xspeed;
    this.yspeed = -1;

  this.move = function(){

    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if (this.y < 100 || this.y > 145){
      this.yspeed = this.yspeed*-1
    }else{

    }
    if (this.x > width + 2.5){
      this.x = 100;
    }else{

    }
  };
  this.display = function(){
    fill(100,10,10);
    rect(this.x,this.y,2,5);
  };
}
