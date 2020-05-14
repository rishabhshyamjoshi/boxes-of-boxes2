class Box{
    constructor(x,y,w,h){
        var options={
            'restitution':0.1,
            'friction':0.6,
            'density':3.0
              }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
       
        World.add(world,this.body);  
     
}
    display(){
        rectMode(CENTER);
        fill("red");
        strokeWeight(4);
    stroke("gold");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
       
    }
}