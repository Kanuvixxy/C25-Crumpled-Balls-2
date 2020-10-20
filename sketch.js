
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundSprite;
var box1, box1Sprite, box2, box2Sprite, box3, box3Sprite;

var crumpled;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(0);
  
	box1Sprite = createSprite(width / 2, height - 50, 200, 20);
	box1Sprite.shapeColor = color("red");
  
	box2Sprite = createSprite(box1Sprite.x + 90, height - 110, 20, 100);
	box2Sprite.shapeColor = color("red");
  
	box3Sprite = createSprite(width / 2 - 90, height - 110, 20, 100);
	box3Sprite.shapeColor = color("red");

	ground = Bodies.rectangle(width / 2, height - 35, width, 10, { isStatic: true });
	World.add(world, ground);

	box1 = Bodies.rectangle(width / 2, height - 50, 200, 20, { isStatic: true });
	World.add(world, box1);

	box2 = Bodies.rectangle(box1Sprite.x + 90, height - 110, 20, 100, { isStatic: true });
	World.add(world, box2);

	box3 = Bodies.rectangle(box1Sprite.x -90, height - 110, 20, 100, { isStatic: true });
	World.add(world, box3);

	crumpled = new Ball(50, 500, 70);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("yellow");
  
  crumpled.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpled.body, crumpled.body.position, {x: 475, y: -685});
	}
}