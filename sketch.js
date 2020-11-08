var PLAY=1;
var END=2;
var FRONT=0;
var gameState = FRONT;

var bg , bgImg;
var coin ,coinImg;
var butter,butterImg;
var eagle1 , eagle1Img;
var eagle , eagleImg;
var score;
var lives;
var eagleGroup;
var righte,lefte,upe,downe;
var gm;


function preload(){
bgImg=loadImage("background-2.jpg");
butterImg=loadImage("butterfly.png");
eagle1Img=loadImage("eagle1.png");
eagleImg=loadImage("eagle.png");
coinImg=loadImage("coin.jpeg")
eagleGroup=new Group();
}

function setup() {
  createCanvas(400,400);
  
  console.log(gameState)
  
 bg=createSprite(200,200,400,400);
  bg.addImage(bgImg);
  bg.scale=1.2;
 
 bg.depth=bg.depth-10
  
  butter=createSprite(200,300,20,20);
  butter.addImage(butterImg);
  butter.scale=0.1

  righte=createSprite(400,200,10,400);
  righte.visible=false;
  
  lefte=createSprite(0,200,10,400);
  lefte.visible=false;
  
  upe=createSprite(200,0,400,10);
  upe.visible=false;
  
  downe=createSprite(200,400,400,10);
  downe.visible=false;
  
  score=0;
  lives=5;
  
}

function draw() {
 background("black")
  
  
  
if(gameState === FRONT){
    
  if(keyDown("space")){
     gameState=PLAY
     }
   }
  
else if(gameState === PLAY){
    
     bg.velocityY=4;
    
 score = score + Math.round(getFrameRate()/60);
    
    if(eagleGroup.isTouching(butter)){ 
     lives=lives-1
    eagleGroup.destroyEach();
     }
    
    if (keyDown("right_arrow")){
      butter.x=butter.x+4
      }
  
   if (keyDown("left_arrow")){
      butter.x=butter.x-4
      }
  
   if (keyDown("up_arrow")){
      butter.y=butter.y-4
      }
  
   if (keyDown("down_arrow")){
      butter.y=butter.y+4
      }
    
     butter.collide(downe);
   butter.collide(upe);
   butter.collide(righte);
   butter.collide(lefte);
    
    if(bg.y>390){
     bg.y=200
     }
    
  if(lives==0){
    gameState=END
     }
  
     eagle1();
    
     }
 else if(gameState === END){
     bg.velocityY=0;
   
 if(keyDown("r")){
   reset();
   }
     
     }
 
 

  
   
  
  
  
  
  
 
  drawSprites();
  
  stroke("black");
  fill("black");
  textSize(15);
  text("SCORE : " + score, 300, 50)
  
  stroke("black");
  fill("black");
  textSize(15);
  text("LIVES : " + lives,10, 50)
  
  if(gameState===FRONT){
      stroke("black");
  fill("black");
  textSize(15);
  text("PRESS SPACE TO START",130, 200) 
     }
  
  if(gameState===END){
   stroke("red");
  fill("black");
  textSize(15);
  text("GAME OVER",130, 200) 
     }
  
  if(gameState===END){
  stroke("black");
  fill("black");
  textSize(15);
  text("PRESS 'R' TO RESTART",120, 230) 
     }
  
}
function eagle1 (){
  if(frameCount%80===0){
     eagle=createSprite(0,100,10,10);
     eagle.addImage(eagle1Img);
     eagle.scale=0.3
     eagle.velocityY=6;
    eagle.collide(righte);
   eagle.collide(lefte);
  eagle.x=Math.round(random(10,390));
  eagle.y=0;
    eagle.lifetime=100
    eagleGroup.add(eagle);
     }
}
function reset(){
  gameState=PLAY;
  eagleGroup.destroyEach();
  score=0;
  lives=5;
}
