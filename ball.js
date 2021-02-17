class ball{
    constructor(x,y,r){
        var options={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.bal=Bodies.circle(x,y,r,options)
        this.radius=r

        World.add(world,this.bal)
    }
    display(){
        var pos =this.bal.position;
        //pos.x=mouseX;
        //pos.y=mouseY;
        ellipseMode(RADIUS)
        fill("blue");
        ellipse(pos.x, pos.y, this.radius, this.radius);
        
      }

}