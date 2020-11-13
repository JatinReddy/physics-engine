
//restitution - bounciness
//namespacing
// making constants for Engine, World, Bodies
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
// making the var 
var world, engine;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  // creating the engine
  engine = Engine.create();
  // engine belongs to world constant
  world = engine.world
  // using the isStatic option 
  var options = {
    isStatic : true,
    friction : 1
  }
  // making the ground
  ground = Bodies.rectangle(200,380,400,30,options);
  World.add(world,ground);
  
// using the restitution(bounciness) for the ball
  var ball_options = {
    restitution : 1
  }
// making the ball
  ball = Bodies.circle(200,200,10,ball_options);
  World.add(world,ball);

}

function draw() {
  background("pink");
  // updating the engine
  Engine.update(engine);
  rectMode(CENTER);
  // displaying the ground
  rect(object.position.x,object.position.y,400,30);
  // displaying the ball
  circle(ball.position.x,ball.position.y,20);
  drawSprites();
}