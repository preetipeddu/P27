
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
  bobDiam = 40;

	//Create the Bodies Here.
	bobObject1 = new Bob(300,500,40);
	bobObject2 = new Bob(340,500,40);
	bobObject3 = new Bob(380,500,40);
	bobObject4 = new Bob(420,500,10,40);
	bobObject5 = new Bob(460,500,10,40);
	roofObject = new Roof(387,300,270,20);
	rope1 = new Rope(bobObject1.body,roofObject.body, -bobDiam*2 , 0);
	rope2 = new Rope(bobObject2.body,roofObject.body, -bobDiam*1, 0);
	rope3 = new Rope(bobObject3.body,roofObject.body, 0 , 0);
	rope4 = new Rope(bobObject4.body,roofObject.body, bobDiam*1 , 0);
	rope5 = new Rope(bobObject5.body,roofObject.body, bobDiam*2 ,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if(keyCode===UP_ARROW){
	  
  }
  
  drawSprites();
 
}



