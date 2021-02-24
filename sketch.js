const Engine = Matter.Engine ;
const World = Matter.World ;
const Body = Matter.Body ;
const Bodies = Matter.Bodies ;
const Constraint = Matter.Constraint ;
const Render = Matter.Render;

var rain_speed = 0 ;
var maxDrops = 101;
var drops = [] ;

function preload(){
    boyAnime = loadAnimation("images/w8.png","images/w7.png","images/w6.png","images/w5.png",
    "images/w4.png","images/w3.png","images/w2.png","images/w1.png");
    city = loadImage("images/cs3.jpg");
}

function setup(){
    createCanvas(600,450);
    engine = Engine.create();
    world = engine.world;

    /*var render = Render.create({
        element:document.body,
        engine:engine,
        options:{ width:1600, height:700, wireframes:false }}); 
       Render.run(render);*/

       bg = createSprite(700,height/2);
       bg.addImage(city);
       bg.scale = 2 ;
    
       boy = createSprite(width/2,330,50,200);
       boy.addAnimation("walking",boyAnime);
       boy.scale = 0.3 ;

       drop1 = new Drop(100,200);
       console.log(drop1.drop);

       for(var i = 0 ; i < maxDrops ; i++){
        drops.push(new Drop(random(20,width-20),random(0,height)));
    }
        umbrella = new Umbrella(width/2,265,35);
        //boy = new staticBody(width/2,350,60,200);
}

function draw(){
    background("black");
    Engine.update(engine);

    drawSprites();
    bg.velocityX = -2.5 ;
    if(bg.x < -105){
        bg.x = 700 ;
    }
    for(var i = 0 ; i < maxDrops ; i++){
        drops[i].display();
        drops[i].update();
    }
    drop1.display();
    //umbrella.display();
    //boy.display()
    dropSpeedSet();
    
}   
function dropSpeedSet(){
    if(frameCount % 70 === 0 && rain_speed != 15){
        rain_speed += 5
    }
}



