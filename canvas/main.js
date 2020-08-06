const canvas = document.querySelector('canvas');

let innerHeight = window.innerHeight;
let innerWidth = window.innerWidth;

canvas.width = innerWidth;
canvas.height = innerHeight;

const context = canvas.getContext('2d');
let mouseX, mouseY;
canvas.addEventListener('mousemove', function(event) {
  mouseX = event.x;
  mouseY = event.y;
});
const circles = [];

for (let index = 0; index < 1000; index++) {
  const r = Math.random() * 50 + 10;

  const x = Math.random() * (innerWidth - r);
  const y = Math.random() * (innerHeight - r);

  const dx = Math.random() - 0.5 ;
  const dy = Math.random() - 0.5 ;

  const circle = new Circle(x, y, r, dx, dy);
  circles.push(circle);
}

function Circle(x, y, r, dx, dy) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.dx = dx;
  this.dy = dx;
  this.maxRadius = 100;
  this.minRadius = 30;

  const coeff = 50;
  const color = getRandomRGBA();

  this.draw = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    context.stroke();
    context.fillStyle = color;
    context.fill();
  };

  this.update = function() {
    if (this.x + this.r >= innerWidth || this.x - this.r <= 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r >= innerHeight || this.y - this.r <= 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    if (
      mouseX - this.x < coeff &&
      mouseX - this.x > -coeff &&
      mouseY - this.y < coeff &&
      mouseY - this.y > -coeff
    ) {
      if (this.r < this.maxRadius) {
        this.r += 10;
      }
    } else if (this.r > this.minRadius) {
      this.r -= 1;
    }

    this.draw();
  };

  function getRandom(from, to) {
    const random = Math.random() * to + from;
    return random;
  }

  function getRandomRGBA() {
    const r = getRandom(0, 255);
    const g = getRandom(0, 255);
    const b = getRandom(0, 255);
    const a = getRandom(0.5, 1);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
}

function animation() {
  requestAnimationFrame(animation);
  context.clearRect(0, 0, innerWidth, innerHeight);
  for (const circle of circles) {
    circle.update();
  }
}

animation();
