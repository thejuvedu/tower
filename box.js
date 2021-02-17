class box{
    constructor(x,y){
        var option ={
        'restitution':0.8,
        'friction':1,
        'density':1.0
        }
        this.b1=Bodies.rectangle(x,y,20,20,option);
        this.width=20
        this.height=20
        
        World.add(world,this.b1)
    }
    display(){
        var pos =this.b1.position;
        var angle=this.b1.angle;
      push();
        translate(pos.x,pos.y);
       rotate(angle);
        rectMode(CENTER);
        fill("orange");
        rect(0, 0, this.width, this.height);
        pop();
        
      }
    
}
