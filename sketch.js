var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  weight=random(30,52);
  speed=random(223,321);
  wall=createSprite(1200,200,60,height/2);
  bullet=createSprite(50,200,50,30);
}

function draw() {
  background(80,80,80);  
  bullet.velocityX=speed;
  var bulletWeight =weight;
  var wallt=thickness;
  if(bullet.x-wall.x<bullet.width/2+wall.width/2 && wall.x-bullet.x<wall.width/2+bullet.width/2 && wall.y-bullet.y<bullet.height/2+wall.height/2 && bullet.y-wall.y<bullet.height/2+wall.height/2){
 var damage=0.5*bulletWeight*bullet.velocityX*bullet.velocityX/(wallt*wallt*wallt);
 bullet.velocityX=0;
 if(damage>10){
 bullet.shapeColor="red";
 }
 if(damage<10){
bullet.shapeColor="green";
 }
  }
  drawSprites();
}