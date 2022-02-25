function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill('black')
  ellipse(windowWidth-mouseX, windowHeight-mouseY, 40)
}