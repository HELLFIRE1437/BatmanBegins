class Umbrella{
    constructor(x,y,radius){
        var options = {
            isStatic : true ,
            friction : 0.1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius =  radius ;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position ;
        push();
        translate(pos.x,pos.y);
        noStroke();
        fill("cyan");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}       