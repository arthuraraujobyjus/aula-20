const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var engine;
var world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var nintendo;
var xbox;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ballConfig = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  ball = Bodies.circle(100,10,20, ballConfig);
  World.add(world,ball);

  var groundConfig = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 390, 400, 20, groundConfig);
  World.add(world,ground);
     
  var nintendoConfig={
    restitution: 0.4,
    frictionAir: 0.2
  }
nintendo=Bodies.circle(300,20,20,nintendoConfig);
World.add(world,nintendo);

var xboxConfig={
  isStatic: true
}
xbox= Bodies.rectangle(300,200,200,20,xboxConfig);
World.add(world,xbox);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("grey");
 Engine.update(engine);

 ellipse(ball.position.x, ball.position.y,20, 20);
 rect(ground.position.x, ground.position.y, 400, 20);
 ellipse(nintendo.position.x, nintendo.position.y,20,20);
 rect(xbox.position.x, xbox.position.y,200,20); 
}

