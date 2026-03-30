// whole lotta lets

let gameState = "start"; //three states/ start>play>end
let backgroundImg;

let screen = 0; //screen
let timeLeft = 60; //time left
let beeX; //bee position
let beeY; //bee position
let counter = 0; //starts with 0 -> tracking time
let score = 0; //score

let beeSound;  

// functions

function preload() {
  backgroundImg = loadImage("background.jpg"); // background image
  catcherImg = loadImage("catcher.png"); // catcher image
}


function setup() {
  createCanvas(1300, 700); //mac screen size
}

// first screen

function draw() {
  background("orange"); // orange background for start screen

  if (gameState === "start") {
    
    // title -> bee master
    textSize(40);
    textAlign(CENTER);
    text("Bee Master", width / 2, 200); // centers the text

    // rules
    textSize(20);
    text("You have 60 seconds to catch as many bees as possible", width / 2, 300);

    // button
    rect(550, 400, 200, 80);  //box mentioned down there
    textSize(25);
    text("PLAY", width / 2, 450);
  } else if (gameState === "play") {
    background(backgroundImg);
    
    // catcher // its png idk why its an image 
    image(catcherImg, mouseX - 25, mouseY - 25, 50, 50); // adjust the position to center the image on the cursor

    textSize(30);
    textAlign(LEFT);
    text("Time: " + timeLeft, 30, 40);
    text("Score: " + score, 30, 80);

    gameScreen(); // makes bee show up

    // COUNTER
    counter = counter + 1; 
    
    // TIMER
    if (counter === 60) {
      timeLeft = timeLeft - 1;
      counter = 0;
    }

    // TIME OVER
    if (timeLeft === 0) {
      gameState = "end";
      beeSound.stop(); //shush 🤫
    }

// time out -> END, last screen

  } else if (gameState === "end") {
    background("orange"); // sends back 

    textAlign(CENTER);
    textSize(40);
    text("Time is up!", width / 2, 250);

    textSize(25);
    text("Your score: " + score, width / 2, 320);

    rect(550, 400, 200, 80);
    text("RESTART", width / 2, 450);
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