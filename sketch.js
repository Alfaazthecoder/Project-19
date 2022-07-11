var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var PLAY=1;
var END=0;
var gameState = PLAY;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(300,300)
  ghost.addImage("ghost", ghostImg)
  ghost.scale = 0.3

  climbersGroup = new Group()
  
}

function draw() 
{
  //ghost.debug = true;
  background(200);
  
  if(gameState===PLAY)
  {
    if(tower.y > 400)
    {
      tower.y = 300
    }


    if(keyDown("space") ) 
    {
      ghost.velocityY = -10;
    }
    
    if(keyDown("right"))
    {
      ghost.velocityX=3
    }

    if(keyDown("left"))
    {
      ghost.velocityX=-3
    }
    
    ghost.velocityY=ghost.velocityY+0.8

    spawnClimbers();

    if(climbersGroup.isTouching(ghost)){
      gameState = END;
  }
  }
   else if (gameState === END)
   {
    tower.velocityY=0;
    ghost.velocityY=0;
    ghost.velocityX=0;
    climber.velocityY=0;
    door.velocityY=0;

    climber.lifetime=-1
    door.lifetime=-1
   }
   
   drawSprites();
}



function spawnClimbers()
{
  if(frameCount%300==0)
  {
   climber = createSprite(100,165)
   climber.addImage("climber",climberImg)
   climber.scale=0.5
   door = createSprite(100,130)
   door.addImage("door",doorImg)
   door.scale=0.5
   climber.velocityY=1
   door.velocityY=1
   door.x = Math.round(random(120,400))
   climber.x=door.x
   climber.lifetime=450
   door.lifetime=450
   climbersGroup.add(climber,door)
  }
  
  
}

  


