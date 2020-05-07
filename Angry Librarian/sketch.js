
  var librarian;
  // let button;



  function preload() {

    librarian = loadAnimation('sprites/librarian001.png', 'sprites/librarian033.png');

  }

  function setup() {
    createCanvas(900, 700);

    resetSketch();
    var button = createButton ("reset");
    button.mousePressed(resetSketch);

  }

  function resetSketch(){

  }


  function draw() {
    background(200, 255, 255);
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
