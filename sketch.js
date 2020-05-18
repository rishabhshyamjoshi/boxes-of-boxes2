const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
// declare an array of of boxes var boxes = [] 
var boxes = []; 

function setup(){  
    canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,380,400,5);

}
function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    for(var i=0;i<boxes.length;i++){ 
       boxes[i].display();
     } 
}
function mouseClicked(){
    if(mouseY < 350){
        boxes.push(new Box(mouseX,mouseY,random(10,40),random(10,40)));
    }
}
 
 //whenever mouse is clicked boxes.push (new box(mouseX,mouseY, random(20,60), random(20,60)) 
 //for displaying we have to use a for loop for(var i=0;i<boxes.length;i++){ boxes[i].display(); } 