//ver 2

var train; //this will be the moving rectangle across screen
var blip; //this will be light/laser particle(s) bouncing between moving train


function setup(){
  createCanvas(720,400);

  train = new reg; //create new "regular" train where everything appear normal
  blip = new blip;//creates new light particle. I would like to be able to generate new ones on click or something

  noLoop(); //prevents the draw function from continously looping until otherwise prompted
}          //the train rectangle will be drawn in setup tho

function draw(){

  background(230);
  //class functions for train and light particle
      train.move();
      train.display();
      blip.move();
      blip.display();

}



function mousePressed(){ //when mouse is pressed draw function will loop creating animation
  loop();
}
function mouseReleased(){ //when mouse is released after click the animation will cease but objects are still visible where they had stopped
  noLoop();
}//the click/release can be continously used and the animation will start/stop from any position


function reg(){
//sets up cooridnates of train and traveling speed
  this.x = 100;
  this.y = 100;
  this.xspeed = 2;
  this.yspeed = 0

  this.move = function(){

    if (this.x > width){ //resets to original position after leaving canvas
      this.x = 100;
    }else{
      this.x = this.x + this.xspeed; //moves train at constant speed to right
    }

  };
  this.display = function(){
    fill(100,100,100);
    rect(this.x,this.y,100,50); //larger rectangle (train)
    fill(50,50,50);
    rect(this.x+25,this.y+40,10,10); //smaller box on train (light source)
  };
}

function blip(){
//sets up coordinates of light partcile and speed based off of train.speeds/positions
    this.x = train.x + 30;
    this.y = train.y + 40;
    this.xspeed = train.xspeed; //laser light shot directly upwards on train will move with train's horizontal velocity
    this.yspeed = -1;           //as well as the lights vertical speed


  this.move = function(){

    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if (this.y < 100 || this.y > 145){ //keeps light partcile bouncing in train
      this.yspeed = this.yspeed*-1
    }else{

    }
    if (this.x > width + 2.5){ //resets light particle to original position after leaving right side of canvas
      this.x = 100;
    }else{

    }
  };
  this.display = function(){
    fill(100,10,10);
    rect(this.x,this.y,2,5); //draws tiny red laser rectngle to represent the light
  };
}
