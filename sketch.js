// declaring varibles
var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bgIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var counter;
function preload()
{
	//loading images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bgIMG = loadImage("zombie.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	counter = 0;

	// creating the sprites
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.25

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("gray")

	box1 = createSprite(500, 610, 20,100);
	box1.shapeColor=color("black")

	box2 = createSprite(300,610, 20,100);
	box2.shapeColor=color("black")

	box3 = createSprite(400,650, 200,20);
	box3.shapeColor=color("black")


	engine = Engine.create();
	world = engine.world;

	//adding the bodies into the world
	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.5});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	box1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box1);
	 
	box2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box2);
	 
	box3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world,  box3);



	 //running the engine
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(bgIMG);

  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
 
 
}

// global varibles
function keyPressed() {
 if (keyCode == DOWN_ARROW) {
    counter = counter + 1;	
	Matter.Body.setStatic(packageBody, false);
	helicopterSprite.x  = helicopterSprite.x + 5 ;

}

  }






