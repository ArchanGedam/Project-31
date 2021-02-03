const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(600,750);
    engine = Engine.create();
    world = engine.world;

drops = new Drops(300,0,10);

    

}

function draw(){
    background(0);
    Engine.update(engine);
    
    
    drops.display();



   spawnDrops();
}
function spawnDrops(){
    if(drops.y>750){
create drops(random(0,600))
}