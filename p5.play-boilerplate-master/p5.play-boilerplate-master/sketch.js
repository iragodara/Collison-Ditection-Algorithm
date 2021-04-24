function setup() {
  createCanvas(800,400);
  Fr=createSprite(400, 200, 80, 50);
  Fr.shapeColor="red";
  
  Mr=createSprite(200,200,50,80);
  Mr.shapeColor="blue";

}

function draw() {
  background(0,0,0);  
  Mr.x=World.mouseX;
  Mr.y=World.mouseY;
  
  if (Mr.x - Fr.x < Fr.width/2 + Mr.width/2 && Fr.x - Mr.x < Fr.width/2 + Mr.width/2 &&
    Mr.y - Fr.y < Fr.width/2 + Mr.width/2 && Fr.y - Mr.y < Fr.width/2 + Mr.width/2 ){
    Fr.shapeColor="green";
    Mr.shapeColor="cyan";
  }
  else{ 
    Fr.shapeColor="red";
    Mr.shapeColor="blue";
  }

  Fr.debug=true;
  Mr.debug=true;
  drawSprites();
}