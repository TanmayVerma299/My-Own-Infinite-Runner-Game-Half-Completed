var rocket,space,asteroid,star

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
rocketImg = loadImage("rocket.png");
asteroidImg = loadImage("asteroid.png");
starImg = loadImage("star.png");
spaceImg = loadImage("space2.jpg")
}

function setup() {
createCanvas(windowWidth,windowHeight);

space=createSprite(width/2,200);
space.addImage(spaceImg);
space.velocityY = 4;

rocket = createSprite(width/2,height-20,20,20);
rocket.addImage(rocketImg);





}

function draw() {

if(gameState===PLAY){
background(0);

edges = createEdgeSprites();
rocket.collide(edges);

//Code To Reset Background
if(space.y > height)
{
 space.y = height/2
}



}









 drawSprites();
}