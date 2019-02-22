var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c = context
var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove', 
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;

})

// makes canvas responsive
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

var maxRadius = 40;
// var minRadius = 3;

// JS OOP - JavaScript Object
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = '#77FFBC';
        c.stroke();
        // c.fillStyle = 'blue';
        // c.fill();
    }
    
    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        // interactivity with mouse
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if(this.radius < maxRadius){
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1
        }

        this.draw();
    }
}

var circleArray = [];

// dot generation
function init(){
    circleArray = [];
    var width = window.innerWidth;
    var dotsLimit = 0;
    if (width > 700){
        dotsLimit = 200;
    }
    if (width <= 700){
        dotsLimit = 100;
    }
    if (width <=450){
        dotsLimit = 87;
    }
    for (var i = 0; i < dotsLimit; i++){
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) ; // x-velocity
        var dy = (Math.random() - 0.5) ; // y-velocity
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i=0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

init();
animate();

// document.body.style.background = "url(" + canvas.toDataURL() + ")";