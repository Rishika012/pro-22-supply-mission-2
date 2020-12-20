const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var ground;
var packageimage,helicopterimage;
var packagebody,packagesprite;
var w1,w2,w3;

function preload(){
	packageimage=loadImage("package.png");
	helicopterimage=loadImage("helicopter.png");
}

function setup(){
	createCanvas(800,600);
	engine=Engine.create();
	world=engine.world;
	ground=Bodies.rectangle(400,590,width,20,{isStatic:true});
	World.add(world,ground);

	packagebody=Bodies.rectangle(400,200,100,100,{restitution:1,isStatic:true,friction:0.8});
	World.add(world,packagebody);

	packagesprite=createSprite(400,200,100,100);
	packagesprite.addImage(packageimage);
	packagesprite.scale=0.2;

	helicoptersprite=createSprite(width/2,200);
	helicoptersprite.addImage(helicopterimage);
	helicoptersprite.scale=0.7;

	w1=createSprite(300,528,20,100);
	w1.shapeColor="white";

	w2=createSprite(500,528,20,100);
	w2.shapeColor="white";

	w3=createSprite(400,568,200,20);
	w3.shapeColor="white";
	
}

function draw(){
background(0);
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,width,20);
packagesprite.x=packagebody.position.x;
packagesprite.y=packagebody.position.y;
if(keyDown("space")){
Matter.Body.setStatic(packagebody,false);
}
drawSprites();
}