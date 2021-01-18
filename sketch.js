
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var spaceship, shaceshipImage;
var back, backImage;
var backgroundImage;
var asteroid, asteroidGroup;
var asteroid1Image;
var score;

var maxAsteroid=100;

function preload()
{
	shaceshipImage = loadImage("spaceship.png");
	//backImage = loadImage("back2.jpg");
	asteroid1Image = loadImage("astter.png");
////creating the groups	
	asteroidGroup = new Group();
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(800, 700);

	Engine.run(engine);

	//back = createSprite(300, 300);
    //back.addImage(backImage);
    //back.velocityY = 1;
	
	spaceship = createSprite(400, 500);
	spaceship.addImage(shaceshipImage);
	spaceship.scale = 0.2;

	score = 0;
}
	

	//Create the Bodies Here.



function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  textSize(20);
  fill("white");
  text("Score: "+ score, 650,50);

  score = score + Math.round(frameCount/60);

  if(score>0 && score%5000 === 0){
	textSize(23);
	fill("red");
	text("Doing Good Job", 200, 200);
 }

  //if(back.y>400){
    //back.y = 300;
  //}

  if(keyDown(LEFT_ARROW)){
    spaceship.x = spaceship.x - 3;
  }
  if(keyDown(RIGHT_ARROW)){
    spaceship.x = spaceship.x +3;
  }



spawnasteroid();
  
  drawSprites();
 
}

function spawnasteroid(){
	if(frameCount% 240===0){
	  asteroid = createSprite(200, -50);
	  asteroid.addImage(asteroid1Image);
	  asteroid.scale = 0.2;
	  asteroid.x = Math.round(random(120, 400));
	  asteroid.velocityY = 1;
	  asteroid.lifetime = 800;
	  
	  asteroidGroup.add(asteroid);

	}
  }
