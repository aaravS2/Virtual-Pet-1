//Create variables here
var dogHappy,dogSitting,dog,database,foodstock,foods;
function preload()
{
  //load images here
  dogHappy=loadImage('doglmg1.png')
  dogSitting=loadImage('doglmg.png')
}

function setup() {
	createCanvas(500,500);
database=firebase.database()
foodStock = database.ref('food');
  foodStock.on("value", readStock, showError)
  dog=createSprite(250,250,40,40)
  dog.addImage(dogSitting)
  dog.scale=0.32
  foods=20
}


function draw() {  
  background(0)
      if(keyWentDown(UP_ARROW)){
    dog.changeImage(dogHappy)
writeStock(foods)
if (frameCount===frameCount+200) {
  dog.changeImage(dogSitting)
}
    }
  

  drawSprites();
  //add styles here
  if(foods>10){
    text(7)
    stroke('green')
      text("dog food remaining"+foods,250,400)
  }else{
    text(7)
    stroke('red')
      text("dog food remaining:"+foods,250,400)
  }
  text(7)
    stroke('red')
  text("note:press up arrow key to feed the dog(key went down)",250,40)
}
function readStock(data){
foods=data.val()
}
function writeStock(x){
if(x<=0){
x=0
}else{
  x=x-=1
}
database.ref('/').update({
  foodleft:x
  
})
console.log(x)
}
function showError(){
  console.log('problems with the database')
}
