var garden,rabbit;
var gardenImg,rabbitImg, appleImg,leaveImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leaveImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.velocity.X=1;


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  rabbit.x=mouseX
  
  
   var apple = Math.round(random(1,2));
   if(frameCount % 80 == 0){
    if(apple===1){
      function  spawnApples() {
        apple = createSprite(random(50, 350), 40, 10, 10) ;
        apple.addImage(appleImg);
        apple.scale=2;
        apple.velocityY=2;
      }
      }
    }
  
      var leave = Math.round(random(1,2));
   if(frameCount % 80 == 0){
    if(leave===1){
      function  spawnLeaves() {
        leave = createSprite(random(50, 350), 40, 10, 10) ;
        leave.addImage(leaveImg);
        leave.scale=2;
        leave.velocityY=2;
      
    }
   }
  }

}



 

