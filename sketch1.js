const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 Events = Matter.Events

var engine, world
var ground
var particles = [];
var plinkos = [];
var divisions = [];
var divisonHeight = 300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20)
  
  for (var k = 0; k < width; k = k + 80){
    divisions.push(new Division(k, height-divisonHeight/2, 10, divisonHeight))
  }

  for (var j = 50; j < width; j = j + 50){
    plinkos.push(new Plinko(j,75))
  }

  for (var j = 75; j < width; j = j + 50) {
    plinkos.push(new Plinko(j, 125))
  }
  for (var j = 50; j < width; j = j + 50) {
    plinkos.push(new Plinko(j, 175))
  }
  for (var j = 75; j < width; j = j + 50) {
    plinkos.push(new Plinko(j, 225))
  }

  
}

function draw() {
  background(0);
   Engine.update(engine);
  ground.display()
  
  if (frameCount % 60 === 0) {
    particles.push(new Particles(random(width / 2 - 30, width / 2 + 30), 10, 10))
    
  }
console.log(particles.length)
  for (var k = 0; k<divisions.length; k++){
    divisions[k].display()
  }

  for (var j=0; j <particles.length; j++){
    particles[j].display()
   
  }

  for (var i = 0; i < plinkos.length;i++){
    plinkos[i].display();
 console.log(i)
  }
 
}