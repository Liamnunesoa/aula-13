var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var nuvemanimaçao;
var aula=1
var obstaculo, obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6;





var score;
var liam="oi ";
console.log(liam+aula);

function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  nuvemanimaçao= loadImage("cloud.png");
  obstaculo1= loadImage("obstacle1.png");
  obstaculo2= loadImage("obstacle2.png");
  obstaculo3= loadImage("obstacle3.png");
  obstaculo4= loadImage("obstacle4.png");
  obstaculo5= loadImage("obstacle5.png");
  obstaculo6= loadImage("obstacle6.png");

  
 
 
  
}

function setup() {

  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //gerar números aleatórios
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //definir cor do plano de fundo
  background(180);
  
  console.log(trex.y)
  
  
  
  // pulando o trex ao pressionar a tecla de espaço
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);
  
  //Gerar Nuvens
  criarnuvens();
  
  drawSprites();

  criarobstaculos();
}

//função para gerar as nuvens
  function criarnuvens(){
if(frameCount % 60===0){
  var nuvem= createSprite(600,100,40,10);
  nuvem.velocityX = -4;
  nuvem.addImage(nuvemanimaçao);
  nuvem.scale=0.4;
  nuvem.y= Math.round(random(10,60));
  nuvem.lifetime=200;
}


  }
function criarobstaculos(){
  if(frameCount % 70===0){
    obstaculo = createSprite(600,165,10,40);
    obstaculo.velocityX= -6;
    obstaculo.scale=0.6;
    var cactos=Math.round(random(1,6));
    switch(cactos){
      case 1: obstaculo.addImage(obstaculo1);
      break;
      case 2: obstaculo.addImage(obstaculo2);
      break;
      case 3:obstaculo.addImage(obstaculo3);
      break;
      case 4: obstaculo.addImage(obstaculo4);
      break;
      case 5: obstaculo.addImage(obstaculo5);
      break;
      case 6: obstaculo.addImage(obstaculo6);
      break;
      default: break;
      obstaculo.lifetime=100
    }

  }
}
 




