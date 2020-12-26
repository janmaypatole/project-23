
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,garbage;
var ground;

function setup() {
	createCanvas(800, 500);
   
	
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(600,200,300,30)
    garbage = new Garbage(100,200,25,25)
	ground = new Ground(400,490,800,20)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  garbage.display();
 
 
}



