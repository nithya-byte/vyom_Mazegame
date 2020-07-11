var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	roof=new roof(200,320);
	

	var ground_options={
		isStatic : true
	  }
	ground = Bodies.rectangle(200,500,400,20,ground_options)
  World.add(world,ground);

  var invground_options={
	isStatic : true
  }
ground1 = Bodies.rectangle(200,470,400,5,invground_options)
World.add(world,ground1);

	

	ball1=new Bob(200,420,10);
	//ball2= new Bob(280,420,40);
	//var bobDiameter=40;
	
	// chain1=new SlingShot(ball1.body,{x:200,y:420});

	 //chain2=new SlingShot(roof.body,ball2.body,120,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
//fill("pink")
//rectMode(CENTER);
//rect(ground1.position.x,ground1.position.y,300,5);


  fill("blue");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("red");
 roof.display();
  fill("pink");
 ball1.display();
 drawSprites();
 //ball2.display();
 fill("white")
  //chain1.display();
 //chain2.display();
 
}


  function keyPressed()
  {
	if(keyCode===UP_ARROW){
		
		
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:200,y:200})
		
	}
  }


