const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box;

function setup(){  
    canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,380,400,5);
    box1 = new Box(200,200,20,50);
    box2 = new Box(200,200,40,40);    
    box3 = new Box(200,200,37,52);
    box4 = new Box(200,200,39,32);
    }
function draw(){
    background("black");
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box.display();
}
function mousePressed(){
    if(mousePressed(canvas)){
        box = new Box(mouseX,mouseY,20,20);
    }
}
  