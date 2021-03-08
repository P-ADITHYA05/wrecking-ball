const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    block1 = new Block(900,100);
    block2 = new Block(900,100);
    block3 = new Block(900,100);
    block4 = new Block(900,100);
    block5 = new Block(900,100);
    block6 = new Block(900,100);
    block7 = new Block(900,100);

    block8  = new Block(800,100);
    block9  = new Block(800,100);
    block10 = new Block(800,100);
    block11 = new Block(800,100);
    block12 = new Block(800,100);
    block13 = new Block(800,100);
    block14 = new Block(800,100);

    block15 = new Block(700,100);
    block16 = new Block(700,100);
    block17 = new Block(700,100);
    block18 = new Block(700,100);
    block19 = new Block(700,100);
    block20 = new Block(700,100);
    block21 = new Block(700,100);
    

    ball = new Ball(200,200,80,80);
    
    //log6 = new Log(230,180,80, PI/2);
    rope = new Rope(ball.body,{x:470, y:50});
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    ball.display();
   
    rope.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

