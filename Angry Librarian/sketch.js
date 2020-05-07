
  var librarian;
  // let button;



  function preload() {

    librarian = loadAnimation('sprites/librarian001.png', 'sprites/librarian033.png');

  }

  function setup() {
    createCanvas(900, 700);
    // button = createButton('try again');
    // button.size(250,60);
    // button.position(300, 200);
    // button.style("font-size", "35px");
    // button.style("font-family", "Verdana-Bold ");
<<<<<<< Updated upstream
    // resetSketch();
    var button = createButton ("reset");
    // button.mousePressed(resetSketch);

  }

  // function resetSketch(){
  //
  // }

function mouseClicked(){
Program.restart(); 

}
=======
    var button = createButton ("reset");
    button.mousePressed(resetSketch);

  }

  function resetSketch(){
    rect(100,100,100,100);
  }
>>>>>>> Stashed changes

  function draw() {
    background(200, 255, 255);
    animation(librarian, 400, 320);
    textSize(100);
    textFont('GillSans-Bold ');
    text('SHHHHHHH!!', 100, 100);

  }
