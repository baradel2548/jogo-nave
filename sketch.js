///////////// Nome do Jogo
var contador = 3
var score = 0
var gameState = PLAY
var PLAY = 1
var END = 0
  function preload(){
    naveImg = loadImage ("assets/nave.png")
    alienMImg = loadImage ("assets/alienM.png")
    alienPImg = loadImage ("assets/alienP.png")
    fundoImg = loadImage ("assets/fundo.jpg")
    meteoroImg= loadImage ("assets/meteoro.png")
    chefaoImg = loadImage ("assets/chefao.png")
    tiroImg = loadImage ("assets/shot.png")
    coracaoImg = loadImage ("assets/heart.png")

  }


  function setup() {

    createCanvas (500,700);

    coracao3 = createSprite(28,30);
    coracao3.addImage(coracaoImg);
    coracao3.scale = 0.12 ;

    coracao2 = createSprite(55,30);
    coracao2.addImage(coracaoImg);
    coracao2.scale = 0.12;

    coracao1 = createSprite(82,30);
    coracao1.addImage(coracaoImg);
    coracao1.scale = 0.12;
  
    nave = createSprite (250,600)
    nave.addImage(naveImg)
    nave.scale = 0.25
  
   score = 0
    nave.setCollider('circle',0,0,140)
   
    // foemar grupos
    aliens = new Group()
    aliens2 = new Group()
    tiros = new Group()
    meteoros = new Group()
    etmedio = new Group();
    etmediodois = new Group()
  }

  function draw() {
    
    image (fundoImg,0,0,500,700);

    if (gameState === PLAY){
      spawnaliens2()
    spawnaliens()
    spawnaliensM1()
    spawnaliensM2()  
    if (aliens.collide(tiros)){
      aliens.destroyEach()
      score = score +1
      }
      
      if (aliens2.collide(tiros)){
        aliens2.destroyEach()
        score = score +1
        }
  
      if (etmedio.collide(tiros)){
       etmedio.destroyEach()
       score = score +1
      }
      if (etmediodois.collide(tiros)){
        etmediodois.destroyEach()
        score = score +1
       }
      
       if (etmediodois.isTouching(nave)){
    
        nave.x = 250;
        nave.y = 600;
        contador -= 1;
        
       }
       if (nave.isTouching(aliens)){
        nave.x = 250;
        nave.y = 600;
        contador -= 1;
      }
    
      if (nave.isTouching(aliens2)){
        nave.x = 250;
        nave.y = 600;
        contador -= 1;
      }
  
     if (nave.collide(meteoros)){
        nave.x = 250;
        nave.y = 600;
        contador -= 1;
      }
  
      if (contador === 2){
        coracao1.destroy()
      }
      else if (contador === 1){
        coracao2.destroy();
      }
      else if (contador <= 0){
        coracao3.destroy();
        gameState = END
      }
      if (etmedio.isTouching(nave)){
  
        nave.x = 250;
        nave.y = 600;
        contador -= 1;
       }
       if (keyWentDown('space')){
        tiro = createSprite (250,600,5,10)
        tiro.addImage (tiroImg)
        tiro.scale = 0.15
        tiro.lifetime = 70
        tiro.velocityY = -10
        tiro.x = nave.x + 2
        tiro.y = nave.y
        tiros.add(tiro)
      }
      
      if(keyIsDown(RIGHT_ARROW)){
        nave.x += 10
      }
      if(keyIsDown(LEFT_ARROW)){
        nave.x -= 10
      }
      if(keyIsDown(UP_ARROW)){
        nave.y -= 10
      }
      if(keyIsDown(DOWN_ARROW)){
        nave.y += 10
      }



    }
    else if(gameState === END){
      aliens .destroyEach()
      aliens2.destroyEach()
      tiros.destroyEach()
      etmedio.destroyEach()
      etmediodois.destroyEach()
    }
     textSize (20)
     fill ("green")
    // text ("destrua 10 aliens",175,60)
     textFont("Magneto")
    text('score:'+score,355,30)
    textSize(35)
    fill("yellow")
    textFont("Magneto")
    text("StarGame",155,40)
    //text(contador,155,300)

    

    // para celular
    // nave.x = World.mouseX
    // nave.y = World.mouseY
      
    
    

    drawSprites();
   
  
   
  
    // if(score === 1){
    //   var boss = createSprite(250,150,20,20)
    //   boss.addImage (chefaoImg)
    //   boss.scale = 0.5
    //   aliens.destroyEach()
    //   spawnaliens2()
    // }
    


    // criar inimigos

    //spawnmeteoro()
    
    //spawnBoss()
  }

 // criação de naves

  function spawnaliens(){
    if(frameCount%90 === 0){
      var alienP = createSprite(0,130,20,20)
      alienP.velocityX = 6
      alienP.addImage (alienPImg)
      alienP.scale = 0.095
      alienP.lifetime = 500
      aliens.add(alienP)
  
    }
  }

 // criação de naves 

  function spawnaliensM1(){
    if(frameCount%90 === 0){
      var alienM = createSprite(50,0,20,20)
      alienM.velocityY = 6
      alienM.addImage (alienMImg)
      alienM.scale = 0.35
      alienM.lifetime = 500
      etmedio.add(alienM)
    }
  }

 // criação de naves 

  function spawnaliensM2(){
    if(frameCount%90 === 0){
      var alienM2 = createSprite(470,0,20,20)
      alienM2.velocityY = 6
      alienM2.addImage (alienMImg)
      alienM2.scale = 0.35
      alienM2.lifetime = 500
      etmediodois.add(alienM2)
    }
  }

  function spawnaliens2(){
    if(frameCount%100 === 0){
      var alienP2 = createSprite(0,300,20,20)
      alienP2.velocityX = 6
      alienP2.addImage (alienPImg)
      alienP2.scale = 0.095
      alienP2.lifetime = 500
      aliens2.add(alienP2)
  
    }
  }

  function spawnmeteoro(){
    if(frameCount%240 === 0){
      var meteoro = createSprite(500,0,20,20)
      meteoro.x=Math.round(random(0,500))
      meteoro.velocityX = -6
      meteoro.velocityY = 13
      meteoro.addImage (meteoroImg)
      meteoro.scale = 0.7
      meteoros.add(meteoro)
      meteoro.lifetime = 100
    }
  }

  // function gameOver() {
   
  // }
 