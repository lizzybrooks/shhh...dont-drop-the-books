

  // Creating animations
  //
  // animations like p5 images should be stored in variables
  // in order to be displayed during the draw cycle
  var librarian;
  //
  // //it's advisable (but not necessary) to load the images in the preload function
  // //of your sketch otherwise they may appear with a little delay
  function preload() {
  //
  //   //create an animation from a sequence of numbered images
  //   //pass the first and the last file name and it will try to find the ones in between
    librarian = loadAnimation('sprites/librarian001.png', 'sprites/librarian033.png');

  }

  function setup() {
    createCanvas(900, 700);
  }

  function draw() {
    background(200, 255, 255);

    //specify the animation instance and its x,y position
    //animation() will update the animation frame as well
    animation(librarian, 400, 310);

  }
