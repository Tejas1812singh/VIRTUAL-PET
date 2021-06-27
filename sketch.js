//Create variables here
var dog1;
var happyDog;
var database;
var foodS;
var foodStock;
function preload()
{
  happyDog=loadImage('happydog.png')
  dog1=loadImage('Dog.png')
	//load images here
}

function setup() {
  database=firebase.database();

	createCanvas(500, 500);
  dog=createSprite(250,250,10,10);
  dog.addImage(dog1);
  dog.scale=0.15;



foodStock=database.ref('Food');
foodStock.on("value",readStock);
textSize(20);
}


function draw() {  
background(46,139,87)


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}
  drawSprites();
  textSize(10);
  text("Note:Press UP_ARROW Key To Feed The Dog Milk!")
}
  //add styles here
function readStock (data){

  foodS=data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x+1
}

  database.ref('/').update({
    Food:x
  })
}








