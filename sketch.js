
//Crie as variáveis para:
//- a imagem de fundo
  var fundoImg;
//- o sprite do Tom
  var Tom;
  //- a animação do Tom dormindo
  var Tom_sleep;
//- a animação do Tom correndo
  var Tom_run, Tom_run1;
//- a animação do Tom ao fim
  var Tom_end;
//- o sprite do Jerry
  var Jerry;
//- a animação Jerry parado
  var Jerry_stop, Jerry_stop;
//- a animação do Jerry chamando
  var Jerry_call;
//- a animação do Jerry ao fim
  var Jerry_end;

function preload() {
//Carregue, usando loadAnimation():  
//- imagem de fundo "imagens/garden.png"
fundoImg = loadImage("imagens/garden.png")
//- animação gato1: cat1.png
Tom = loadAnimation("imagens/cat1.png")
//- animação gato 2: cat2 e cat3
Tom_sleep = loadAnimation("imagens/cat1.png")
Tom_run = loadAnimation("imagens/cat2.png")
Tom_run1 = loadAnimation("imagens/cat3.png")
//- animação gato 4: cat4
Tom_end = loadAnimation("imagens/cat4.png")
//- animação rato1: mouse1
Jerry1 = loadAnimation("imagens/mouse1.png")
//- animação rato2: mouse2 e mouse3
Jerry_stop = loadAnimation("imagens/mouse2.png")
Jerry_stop1 = loadAnimation("imagens/mouse3.png")
Jerry_call = loadAnimation("imagens/mouse1.png")
//- animação rato3: mouse4
Jerry_end  = loadAnimation("imagens/mouse4.png")
}


function setup() {
canvas = createCanvas(1000, windowHeight);
//crie os sprites de Tom e Jerry e adicione as animações aqui
  Tom = createSprite(700,windowHeight-160,10,10)
  Jerry = createSprite(90,windowHeight-150,10,10)
  fundo = createSprite(windowWidth,windowHeight,10,10)
  //para adicionar animações use sprite.addAnimation();
  Tom.addAnimation("Dormindo",Tom_sleep)
  Tom.addAnimation("Correndo", Tom_run)
  Tom.addAnimation("Correndo 2",Tom_run1)
  Tom.addAnimation("Parado",Tom_end)
  Tom.scale = 0.25
  
  Jerry.addAnimation("Chamando",Jerry_call)
  Jerry.addAnimation("Parado", Jerry_stop)
  Jerry.addAnimation("Parado 2", Jerry_stop1)
  Jerry.addAnimation("Fim",Jerry_end)
  Jerry.scale = 0.15
}

function draw() {
//coloque a imagem de fundo aqui
    background(fundoImg);
    
/*
Ao fim do código, quando acabar o function draw(), escreva uma função para quando a seta para a esquerda for apertada. 
Execute a função criada dentro de function draw()
*/
keyPressed();
  //se o Tom e o Jerry colidirem, pare os sprites e mude suas animações para as animações do fim
if(Tom.x===Jerry.x+155){
   Tom.velocityX = 0
   Tom.changeAnimation("Parado",Tom_end);
   Tom.scale = 0.25
   Jerry.changeAnimation("Fim", Jerry_end)
   Jerry.scale = 0.15
  }
    drawSprites();
}

//escreva a função seta pressionada aqui
function keyPressed() {
  
  if(keyCode === LEFT_ARROW){   
    Tom.velocityX = -5
    var Num = Math.round(random(1,6))
    switch(Num){
      case 1: Tom.changeAnimation("Correndo", Tom_run)
        break;
      case 2: Tom.changeAnimation("Correndo 2", Tom_run1)  
        break;
      default: break;
      Tom.scale = 0.30
    }
    var Num2 = Math.round(random(1,8))
    switch(Num2){
    
      case 1: Jerry.changeAnimation("Parado", Jerry_stop)
        break;
      case 2: Jerry.changeAnimation("Parado 2", Jerry_stop1)
        break;
      default: break;
    }
   // Por algum motivo, o código indicado no projeto do site não funciona, então eu fiz uma gambiarra kkk.
  
  }
    // se a seta para a esquerda for pressionada, faça o Tom ir para a esquerda e mude as animações do Tom e do Jerry
}

//para mudar animações use sprite.changeAnimation()