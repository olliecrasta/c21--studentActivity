var fixedRect,movingRect,edges;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.setVelocity(4,-3);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.setVelocity(-7,5);
  rect1 = createSprite(100,100,40,40);
  rect2  = createSprite(200,100,40,40);
  rect3  = createSprite(300,100,40,40);
  rect4  = createSprite(400,100,40,40);
  rect5  = createSprite(500,100,40,40);
  edges = createEdgeSprites();
}

function draw() {
  background(2,25,25);  

  console.log(movingRect.x-fixedRect.x);
  // first check if touching 
 if(Math.abs(movingRect.x-fixedRect.x)<=movingRect.width/2+fixedRect.width/2 && Math.abs(movingRect.y-fixedRect.y)<=movingRect.height/2+fixedRect.height/2 ) {
  
  //then check if touching horizontally 
  
  if(Math.abs(movingRect.x-fixedRect.x)<=movingRect.width/2+fixedRect.width/2){
      movingRect.velocityX*= -1;
      fixedRect.velocityX*=-1;
    }

    //or if touching vertically
    if(Math.abs(movingRect.y-fixedRect.y)<=movingRect.height/2+fixedRect.height/2){
      movingRect.velocityY*= -1;
      fixedRect.velocityY*=-1;
    }
 }
 movingRect.bounceOff(edges);
 fixedRect.bounceOff(edges);
  drawSprites();
}