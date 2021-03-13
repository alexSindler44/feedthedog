var dog,sadDog,happyDog;
var bot1,bot2,bot3,bot4,bot5,bot6,bot7,bot8,bot9,botImg;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");

  botImg=loadImage("Images/Milk.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  
  bot1=createSprite(40,200,150,150);
  bot1.addImage(botImg);
  bot1.scale=0.05;

  
  bot2=createSprite(60,200,150,150);
  bot2.addImage(botImg);
  bot2.scale=0.05;

  
  bot3=createSprite(80,200,150,150);
  bot3.addImage(botImg);
  bot3.scale=0.05;

  
  bot4=createSprite(100,200,150,150);
  bot4.addImage(botImg);
  bot4.scale=0.05;
  
  bot5=createSprite(120,200,150,150);
  bot5.addImage(botImg);
  bot5.scale=0.05;

  bot6=createSprite(140,200,150,150);
  bot6.addImage(botImg);
  bot6.scale=0.05;

  bot7=createSprite(160,200,150,150);
  bot7.addImage(botImg);
  bot7.scale=0.05;

  bot8=createSprite(180,200,150,150);
  bot8.addImage(botImg);
  bot8.scale=0.05;

  bot9=createSprite(200,200,150,150);
  bot9.addImage(botImg);
  bot9.scale=0.05;

}

function draw() {
  background(46,139,87);

//Text("press space to feed", 500,20);

if(keyDown("space")){
 bot9.visible = false;
}
if(keyDown("space") && bot9.visible === false ){
  bot8.visible = false;
 }
 if(keyDown("space") && bot8.visible === false ){
  bot7.visible = false;
 }
 if(keyDown("space") && bot7.visible === false ){
  bot6.visible = false;
 }
 if(keyDown("space") && bot6.visible === false ){
  bot5.visible = false;
 }
 if(keyDown("space") && bot5.visible === false ){
  bot4.visible = false;
 }
 if(keyDown("space") && bot4.visible === false ){
  bot3.visible = false;
 }
 if(keyDown("space") && bot3.visible === false ){
  bot2.visible = false;
 }
 if(keyDown("space") && bot2.visible === false ){
  bot1.visible = false;
 }
 


  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
