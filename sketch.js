

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var player,ground,block1,block2,block3,block4;
var block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


 //ground = new Ground(400, 200, 50, 50);
  block1 = new Block(270, 275, 30, 40);
  block2 = new Block(300, 275, 30, 40);
  block3 = new Block(330, 275, 30 ,40);
  block4 = new Block(360, 275, 30 ,40);
  block5 = new Block(390, 275, 30 ,40);
  block6 = new Block(420, 275, 30, 40);
  block7 = new Block(450, 275, 30, 40);
  block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);
  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);
  block16 = new Block(390, 155, 30, 40);
  Engine.run(engine);

}

function draw() {

  background(255,255,255);  
  drawSprites();
  engine = Engine.create();
  world = engine.world;

  //ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();  
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
 



}
