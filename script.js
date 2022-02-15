var frame = 0;

var MAX_X_LENGTH = 750;
var MIN_X_LENGTH = 0;
var MAX_Y_LENGTH = 470;
var MIN_Y_LENGTH = 0;






var imgRightList = new Array(
    "images/right/1.png",
    "images/right/2.png",
    "images/right/3.png",
    "images/right/4.png"
);

var imgLeftList = new Array(
    "images/left/1.png",
    "images/left/2.png",
    "images/left/3.png",
    "images/left/4.png",

);

var imgUpList = new Array(
    "images/up/1.png",
    "images/up/2.png",
    "images/up/3.png",
    "images/up/4.png",

);

var imgDownList = new Array(
    "images/down/1.png",
    "images/down/2.png",
    "images/down/3.png",
    "images/down/4.png",

);


var sprite;
var spriteImage;
var cnt = 0;





function init() {
    document.onkeydown = keyListener;
    var ball = document.getElementById("id_ball");
    var randomX = parseInt((Math.random() * (MAX_X_LENGTH - MIN_X_LENGTH)) + MIN_X_LENGTH);
    var randomY = parseInt((Math.random() * (MAX_Y_LENGTH - MIN_Y_LENGTH)) + MIN_Y_LENGTH);
    spriteImage = document.getElementById("image");
    ball.style.top = randomY + "px";
    ball.style.left = randomX + "px";

}





function updateImageRight() {
    frame++;
    if (frame > imgRightList.length - 1) {
        frame = 0;
    }
    spriteImage.src = imgRightList[frame];
}



function updateImageLeft() {
    frame++;
    if (frame > imgLeftList.length - 1) {
        frame = 0;
    }
    spriteImage.src = imgLeftList[frame];
}

function updateImageUp() {
    frame++;
    if (frame > imgUpList.length - 1) {
        frame = 0;
    }
    spriteImage.src = imgUpList[frame];
}

function updateImageDown() {
    frame++;
    if (frame > imgDownList.length - 1) {
        frame = 0;
    }
    spriteImage.src = imgDownList[frame];
}

function moveSprite(dx, dy) {
    var ball = document.getElementById("id_ball");
    sprite = document.getElementById("sprite");

    var x = parseInt(sprite.style.left);
    var y = parseInt(sprite.style.top);
    var xb = parseInt(ball.style.left);
    var yb = parseInt(ball.style.top);
    var randomX = parseInt((Math.random() * (MAX_X_LENGTH - MIN_X_LENGTH)) + MIN_X_LENGTH);
    var randomY = parseInt((Math.random() * (MAX_Y_LENGTH - MIN_Y_LENGTH)) + MIN_Y_LENGTH);
    x += dx;
    y += dy;

    sprite.style.left = x + "px";
    sprite.style.top = y + "px";

    if (xb >= x && xb <= (x + 30) && yb >= y && yb <= (y + 30)) {
        document.getElementById("id_ball").style.top = randomY + "px";
        document.getElementById("id_ball").style.left = randomX + "px";
        cnt++;
        document.getElementById("points").innerHTML = "POKEBALLS: " + cnt;
    }
}

function keyListener(e) {
    var sprite = document.getElementById("sprite");
    var x = parseInt(sprite.style.left);
    var y = parseInt(sprite.style.top);
    if (!e) {
        e = window.event;
    }
    if (e.keyCode == 37) {
        if (x >= MIN_X_LENGTH) {
            updateImageLeft();
            moveSprite(-10, 0);
        }
    }
    if (e.keyCode == 38) {
        if (y >= MIN_Y_LENGTH) {
            updateImageUp();
            moveSprite(0, -10);
        }

    }
    if (e.keyCode == 39) {
        if (x <= MAX_X_LENGTH) {

            updateImageRight();
            moveSprite(10, 0);
        }
    }
    if (e.keyCode == 40) {
        if (y <= MAX_Y_LENGTH) {
            updateImageDown();
            moveSprite(0, 10);
        }

    }


}