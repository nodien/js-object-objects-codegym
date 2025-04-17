function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
  }

  this.moveLeft = function(){
    this.left -= this.speed;
  }

  this.moveUp = function(){
    this.top -= this.speed;
  }

  this.moveDown = function(){
    this.top += this.speed;
  }
}

let hero = new Hero('hero.png', 20, 30, 100, 20); // Đổi ảnh ở đây

function update(){
  document.getElementById('game').innerHTML = hero.getHeroElement();
  requestAnimationFrame(update);
}

update();

window.addEventListener('keydown', function(e) {
  switch(e.key) {
    case 'ArrowRight':
      if(hero.left + hero.size < window.innerWidth) hero.moveRight();
      break;
    case 'ArrowLeft':
      if(hero.left > 0) hero.moveLeft();
      break;
    case 'ArrowUp':
      if(hero.top > 0) hero.moveUp();
      break;
    case 'ArrowDown':
      if(hero.top + hero.size < window.innerHeight) hero.moveDown();
      break;
  }
});