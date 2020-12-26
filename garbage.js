class Garbage{
    constructor(x,y,width,height){
    var options={
     'restitution':1.5,
     'friction':1.0,
     'density':0.5   
    }
    this.body = Bodies.rectangle(x,y,height,width,options)
    this.width = width;
    this.height = height;
    World.add(world,this.body)
} 
  display(){
    var pos = this.body.position
    var angle = this.body.angle
    push();
   translate(pos.x,pos.y)
   rotate(angle)
   strokeWeight(6)
   stroke("blue")
   rectMode(CENTER)
   
   rect(0,0,this.width,this.height)
    pop();
}
}

