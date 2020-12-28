
var database;
var gameState=0;
var playerCount;
var game, player,form;
var allPlayers;

function setup(){
createCanvas(500,500);
database = firebase.database();
    
//form = new Form();

game = new Game();
game.getState();
game.start();
//player = new Player();
   
}

function draw(){
    background("white");
  //form.display();
  //player.getCount();
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
    drawSprites();
}






