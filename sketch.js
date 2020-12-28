
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var ball,b,chain1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=new Bob(200,100,40,40)
b=new Ground(400,140,400,70)
chain1=new Chain(ball.body,{x:400,y:140})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  Engine.update(engine)
  ball.display();
  b.display();
  chain1.display();
  drawSprites();
 
}



