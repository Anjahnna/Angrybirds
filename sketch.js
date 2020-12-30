const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2;
function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;

  /*  var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);*/
    box1 = new Box(900,680,70,70);//865
    box2 = new Box(1200,680,70,70);//1235
    ground=new Ground();
    pig1=new Pig (1050,680);
    log1 = new Log(1050,640,370,PI/2);
    box3= new Box (900,630,70,70);
    box4=new Box(1200,630,70,70);
    pig2=new Pig(1050,630);
    log2=new Log (1050,590,370,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
  /* rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);*/
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
}