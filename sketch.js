var bgImg, bg , girlImg, boyImg;
var gameState = 0;
var player, ground;
var boy, girl;


function preload()
{
  bgImg = loadImage("backgroundcorona.jpg");
  boyImg = loadImage("coronaBoy.png");
  girlImg = loadImage("coronaGirl.png");
}

function setup() 
{
  createCanvas(800,400);

  player = createSprite(100, 250);
  player.visibilty = "false";
  player.scale = 0.5;
  
  ground = createSprite(400, 380, 800, 20);

  boy = createSprite(200, 200);
    boy.addImage("k", boyImg);
    boy.scale = 0.5;

    girl = createSprite(600, 200);
    girl.addImage("j", girlImg);
    girl.scale = 0.5;
}


function draw() 
{
  
  background(bgImg);
  
 

  if(gameState === 0)
  {
    
  
    
    
    fill("black");
    textSize(30);
    text("Let us start! Please choose a character to continue", 20, 50);
    
    if(keyWentDown("left_arrow"))
    {
      player.addImage("k", boyImg);
      player.visibilty = "true";
      girl.destroy();
      boy.destroy();
      gameState = 1;
    }

    if(keyWentDown("right_arrow"))
    {
      player.addImage("j", girlImg);
      player.visibilty = "true";
      girl.destroy();
      boy.destroy();
      gameState = 1;
    }
  }

  

  
    
  



  drawSprites();
}