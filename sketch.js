const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies


var engine, world;

var box1, box2;
var ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  ground= Bodies.rectangle(400,390,800,10,options);
  World.add(world,ground);
  console.log(ground)

  box1 = Bodies.rectangle(100,300,100,100);
  World.add(world,box1);

  box2 = Bodies.rectangle(150,0,100,300);
  World.add(world, box2);
  
  
}

function draw() {
  background(0);  

  Engine.update(engine);
  rectMode(CENTER);

  rect (box1.position.x, box1.position.y, 100,100);

  rect (box2.position.x, box2.position.y, 100,300);

  rect(ground.position.x, ground.position.y,800,10);
}