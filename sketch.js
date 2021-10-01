var dog, happyDog, database, foodS, foodStock;

function preload()
{
	dogImage= loadImage("dogImg.png")
  happyDog = loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  

  background(46,139,87)

  if(KeyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
    textSize(30);
    fill (lightblue);
    stroke();
  }

  drawSprites();

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/'),update({
    
  })
}


