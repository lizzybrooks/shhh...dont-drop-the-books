// //create an empty array called balls
// let balls = [];
//
// //create a variable to hold your avatar
// let me;
// let mySound

// function preload() {
//   soundFormats('mp3', 'ogg', 'wav');
//   mySound = loadSound('levelup.wav')
// }

  var ghost;
  //
  // //it's advisable (but not necessary) to load the images in the preload function
  // //of your sketch otherwise they may appear with a little delay
  function preload() {
  //
  //   //create an animation from a sequence of numbered images
  //   //pass the first and the last file name and it will try to find the ones in between
    librarion = loadAnimation('sprites/librarian0001.png', 'sprites/librarian0006.png');

  }

  function setup() {
    createCanvas(1000, 1000);
  }

  function draw() {
    background(200, 255, 255);

    //specify the animation instance and its x,y position
    //animation() will update the animation frame as well
    animation(librarion, 300, 300);

  }

  //make one avatar called me
  // me = new Avatar(width/2, 300, 6);
  // earth = ellipse(100,100)


// function draw(){
// 	background(0,0,128);
//   earth
//
//   me.drawMe();
//   me.moveMe();
//
//   if (frameCount % 35 == 0) {
//       let  b = new Ball(width, random(0,height), -3);
//       balls.push(b);
//       console.log(balls); //print the balls array to the console
//     }
//
// //	draw all the balls in that array
// 	for (let i = 0; i < balls.length; i++) {
// 	 	      balls[i].drawBall();
//        	  balls[i].moveBall();
//         	balls[i].bounceBall();
// 	  }
//
// }
//
// //avatar class
// class Avatar {
//
// 	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
// 		    this.x = x;
//     		this.y = y;
//         this.speed = speed;
// 	}
//   //
// 	// drawMe(){  // draw the running person
//   //   		stroke("gold");
//   //       strokeWeight(1);
//   //   		fill("red");
// 	// 	    ellipse(this.x,this.y,40,40);
//   //       line(this.x,this.y, this.x, this.y+40);
//   //       line(this.x, this.y+40, this.x-20, this.y+60);
//   //       line(this.x, this.y+40, this.x+10, this.y+50);
//   //       line(this.x+10, this.y+50, this.x+5, this.y+60);
//   //       line(this.x, this.y+15, this.x-10, this.y+25);
//   //       line(this.x-10, this.y+25, this.x+10, this.y+35);
// 	}
//
// // 	moveMe(){
// //     if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
// //        this.y -= this.speed;
// //     }
// //
// //     if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
// //         this.y += this.speed;
// //     }
// //     if (keyIsDown(RIGHT_ARROW)) {
// //       this.x += this.speed;
// //     }
// //     if (keyIsDown(LEFT_ARROW)) {
// //       this.x -= this.speed;
// // }
// // }
// //   die(){
// //
// //   }
// //
// // }
//
//
// //ball class from which to create new balls with similar properties.
// class Ball {
//
// 	//every ball needs an x value, a y value, and a speed
// 	constructor(x,y, speed){
// 		this.x = x;
//     this.y = y;
//     this.speed = speed;
// 	}
//
// 	// draw a ball on the screen at x,y
// 	drawBall(){
//     	stroke(0);
//       strokeWeight(3);
//     	fill("orange");
// 		  ellipse(this.x,this.y,20,20);
// 	}
//
// 	//update the location of the ball, so it moves across the screen
// 	moveBall(){
// 		this.x = this.x+ this.speed;
// 		this.y = this.y+.75;
// 	}
//
// 	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
//   	bounceBall(){
//     		if (this.x >= me.x-25 && this.x <= me.x+25 && this.y > me.y-70 && this.y < me.y+70){
// //       			this.speed = -this.speed;
// //             mySound.play();
// //     		}
// //   	}
//
// }
