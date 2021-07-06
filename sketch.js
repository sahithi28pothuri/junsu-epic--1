const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase, playerBase, player, computer;

function setup() {
  canvas = createCanvas(1525, 840);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computerBase = new Computerbase(1070,500,180,150);
  computer = new Computer(1070,354,50,180);
  
  playerBase = new Playerbase(450, 500, 180, 150);
  player = new Player(435,354, 50, 180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerBase.display();
   playerBase.display();

   //display Player and computerplayer
  computer.display();
  player.display();
}
