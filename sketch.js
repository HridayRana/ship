var sea 
var ship
var bird

function preload(){
shipani = loadAnimation("1.png","2.png","3.png","4.png");
seaimage = loadImage("sea.png")
shipimage = loadImage("4.png")
birdani = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png","bird6.png","bird7.png","bird8.png")
}

function setup(){
  createCanvas(500,500);
 
 
 
  //creating sea
 sea = createSprite(200, 200);
  sea.addImage("sea",seaimage);
  sea.scale = 0.4;


  //creating ship
ship = createSprite(200,200);
ship.addAnimation("ship",shipani);
ship.scale = 0.4;

//creating bird
bird = createSprite(350,50);
bird.addAnimation("bird",birdani)
bird.scale = 0.5;
}







function draw() {
  background("blue");
 
sea.velocityX = -5;
bird.velocityX = -5;

if (sea.x < 0) {
  sea.x = 200;
}
if (bird.x < 0) {
  bird.x = 500;
}

  drawSprites();
}