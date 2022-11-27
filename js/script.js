var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = new Image();
img.src = "https://user-images.githubusercontent.com/116702952/204148995-4011f5fc-17eb-42dc-b0b8-3a9e7c592417.png";

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -3;

var ballRadius = 1;

function drawBall() {

ctx.drawImage(img,x,y,30,30);
}


function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawBall();
x += dx;
y += dy;

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    
}
setInterval(draw, 10);