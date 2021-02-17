class point{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
    } 
    this.pointB = pointB
    this.sling = Matter.Constraint.create(options);
    World.add(world, this.sling);


}
fly(){
    this.sling.bodyA=null
}
display(){
       if(this.sling.bodyA){
        var pos=this.sling.bodyA.position
        var pot=this.pointB
        line(pos.x,pos.y,pot.x,pot.y)  
    }
    
}
}