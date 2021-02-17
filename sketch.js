const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1 ;

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    ground1=new ground(400,490,800,20)
    box1=new box(600,250)
    bal1=new ball(300,225,20)
    pot1=new point(bal1.bal,{x:200,y:100})
    box2=new box(650,300)
    
}

function draw(){
    background(255);
    Engine.update(engine);

    ground1.display()
    box1.display()
    bal1.display()
    pot1.display()
    box2.display()
    
  
}

function mouseDragged(){
    Matter.Body.setPosition(bal1.bal,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    pot1.fly()

}


