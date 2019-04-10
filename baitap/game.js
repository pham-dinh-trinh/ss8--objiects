function Hero(image, top, left, size, jumpDistanceLeft, jumpDistanceTop){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.jumpDistanceLeft = jumpDistanceLeft;
    this.jumpDistanceTop = jumpDistanceTop;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position: absolute;" alt=""/>';
    };
    this.moveRight = function(){
        this.left += this.jumpDistanceLeft;
    };
    this.moveDown = function(){
        this.top += this.jumpDistanceTop;
    };
    this.moveLeft = function(){
        this.left -= this.jumpDistanceLeft;
    };
    this.moveUp = function(){
        this.top -= this.jumpDistanceTop;
    };
}

let hero = new Hero('tt0919.png', 0, 0, 100, 40, 20);
let stepX;
let stepY;
stepX = Math.round((window.innerWidth - hero.size)/hero.jumpDistanceLeft);
stepY = Math.round((window.innerHeight - hero.size)/hero.jumpDistanceTop);
let timeOut = 500;

function moveImage() {
    setTimeout( function () {
        if ((hero.left < window.innerWidth - hero.size) && (hero.top === 0)) {
            hero.moveRight();
        }

        if ((hero.left === stepX * hero.jumpDistanceLeft) && (hero.top < window.innerHeight - hero.size - hero.jumpDistanceTop)) {
            hero.moveDown();
        }

        if ((hero.left > 0) && (hero.left < window.innerWidth - hero.size) && (hero.top === stepY * hero.jumpDistanceTop)){
            hero.moveLeft();
        }

        if (hero.left === 0) {
            hero.moveUp();
        }
        document.getElementById('game').innerHTML = hero.getHeroElement();
        moveImage()
    }, timeOut --)
}
moveImage();