let gameState = "start"; //three states/ start>play>end
let backgroundImg;
let catcherImg;

function preload() {
  backgroundImg = loadImage("background.JPG"); // background image
  catcherImg = loadImage("catcher.png"); // catcher image
}

function setup() {
  createCanvas(1300, 700);
}


function draw() {
  background(220);


  if (gameState === "start") {
    
    // title -> bee master
    textSize(40);
    textAlign(CENTER);
    text("Bee Master", width / 2, 200); // centers the text

    // rules
    textSize(20);
    text("You have 60 seconds to catch as many bees as possible", width / 2, 300);

    // button
    rect(550, 400, 200, 80);
    textSize(25);
    stroke(0);
    text("PLAY", width / 2, 450);
  } else if (gameState === "play") {
    background(backgroundImg);


    
    // catcher // its png idk why its an image 
    image(catcherImg, mouseX - 25, mouseY - 25, 50, 50); // adjust the position to center the image on the cursor

    textSize(30);
    textAlign(CENTER);
   // this image needs to be replaced/ redrawn???
  }
  
}


function mousePressed() {

  //click to start the game
  if (gameState === "start") {
    if (mouseX > 550 && mouseX < 750 && mouseY > 400 && mouseY < 480) {
      gameState = "play";
    }
  }
}
