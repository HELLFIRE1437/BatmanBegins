class Drop{
    constructor(x,y){
        var options = {
            isStatic : false ,
            restitution : 0 ,
            friction : 0.1 ,
            density : 0.8
        }
        this.drop = Bodies.circle(x,y,3,options);
        this.radius = 3 ;
        World.add(world,this.drop);
    }
    display(){
        var pos = this.drop.position ;
        var vel = this.drop.velocity ;
        push();
        noStroke();
        fill("#49A1D3");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
    update(){
        var pos = this.drop.position;
        if(pos.y > height){
            Body.setPosition(this.drop,{x:random(-20,width-20),y:random(-50,-20)});
            Body.setVelocity(this.drop,{x:0,y:rain_speed});
            console.log(rain_speed);
        }
    }
}