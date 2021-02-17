class ground{
    constructor(x,y,width,height){
        var option ={
            isStatic :true
        }
        this.ground2=Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height=height
        World.add(world,this.ground2)
    }
        display(){
            var pos=this.ground2.position
            rectMode(CENTER);
            fill("brown");
            rect(pos.x, pos.y, this.width, this.height)
        }
}