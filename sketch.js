const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(505, 400, 220, 10);
  ground2 = new Ground(800, 150, 200, 10);
  ground3 = new Ground(500, 490, 1000, 20);

  box1 = new Box(430, 375, 30, 40);
  box2 = new Box(460, 375, 30, 40);
  box3 = new Box(491, 375, 30, 40);
  box4 = new Box(521, 375, 30, 40);
  box5 = new Box(551, 375, 30, 40);
  box13 = new Box(581, 375, 30, 40);
  box6 = new Box(460, 335, 30, 40);
  box7 = new Box(491, 335, 30, 40);
  box8 = new Box(521, 335, 30, 40);
  box9 = new Box(551, 335, 30, 40);
  box10 = new Box(491, 295, 30, 40);
  box11 = new Box(521, 295, 30, 40);
  box12 = new Box(505, 255, 30, 40);

  box14 = new Box(740, 125, 30, 40);
  box15 = new Box(770, 125, 30, 40);
  box16 = new Box(800, 125, 30, 40);
  box17 = new Box(830, 125, 30, 40);
  box20 = new Box(860, 125, 30, 40);
  box18 = new Box(770, 85, 30, 40);
  box19 = new Box(800, 85, 30, 40);
  box21 = new Box(830, 85, 30, 40);
  box22 = new Box(800, 45, 30, 40);

  ball1 = new Ball(150, 250, 25);

  slingshot = new SlingShot(ball1.body,{x:150, y:250});
  
}

function draw() {
  background(220);  
  drawSprites();

  ground1.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box13.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box20.display();
  box18.display();
  box19.display();
  box21.display();
  box22.display();

  ball1.display();

  slingshot.display();
}


function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


async function getbackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);

  if(hour >= 06 && hour<=18){
    bg(0);
  }
  else{
    bg(220);
  }
}
