const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var tnengine,tnworld;
var ground;
var ball;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  tnengine=Engine.create();  // tnengine.world
  tnworld=tnengine.world;
var goptions= { isStatic:true}

ground=Bodies.rectangle(400,390,800,30,goptions);
World.add(tnworld,ground)
console.log(ground);

var boptions={restitution:1}
ball=Bodies.circle(600,100,20,boptions);
World.add(tnworld,ball);




}

function draw() {
  background(255,255,255); 
  Engine.update(tnengine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,30);
  ellipse(ball.position.x,ball.position.y,40,40);
  drawSprites();
}