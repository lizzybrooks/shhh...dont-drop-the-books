
<<<<<<< Updated upstream
=======
//create a variable to hold your avatar
let me;
let mySound;
var librarian;

function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  mySound = loadSound('levelup.wav');
  librarian = loadAnimation('sprites/librarian001.png', 'sprites/librarian033.png');
}

function setup() {
  createCanvas(900, 900);

  //make one avatar called me
  me = new Avatar(width/2, 750, 6);
  earth = ellipse(100,100)
}

function draw(){
	background(0,0,0);
  //earth

  me.drawMe();
  me.moveMe();

  if (frameCount % 65 == 0) {
      let  b = new Ball(random(50,450), 50, random(2,6));
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
          balls[i].dropBook();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("gold");
        strokeWeight(1);
    		fill("red");
		    ellipse(this.x,this.y,40,40);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){

    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    if (keyIsDown(LEFT_ARROW )) {
      this.x -= this.speed;
}
}
  die(){
>>>>>>> Stashed changes

  function setup() {
    createCanvas(1000, 1000);
  }

<<<<<<< Updated upstream
  function draw() {
    background(200, 255, 255);
    rect(100,100,100,100);
  }
=======
}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(3);
    	fill("orange");
		  ellipse(this.x,this.y,20,20);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		//this.x = this.x+ this.speed;
		this.y = this.y+this.speed;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-25 && this.x <= me.x+25 && this.y > me.y-70 && this.y < me.y+70){
      			this.x=-10;
            mySound.play();


    		}
  	}

    dropBook(){
      if(this.y>=height){
        animation(librarian, 400, 320);
        textSize(100);
        textFont('GillSans-Bold ');
        text('SHHHHHHH!!', 100, 100);
        textSize(40);
        textFont('Verdana-Bold');
        text('try again',620,670);
        strokeWeight(6);
        line(830,670,880,685);
        line(875,675,880,685);
        line(870,690,880,685);
      }

    }

}
>>>>>>> Stashed changes
