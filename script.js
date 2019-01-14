console.log('reading.js');

function setup() {
  // size of the banner in p5
  // create variable to reference canvas
  var myCanvas = createCanvas (800, 200);

  myCanvas.parent('mySketch');
}

function draw() {
  background('#ffffff');
  noStroke();
  if (mouseX > 10) {
    fill('#d3c4be');
    ellipse(50, 100, 50, 50);
  }

  if (mouseX > 100) {
    fill('#E4DAC2');
    ellipse(150, 100, 50, 50);
  }

  if (mouseX > 200) {
    fill('#C4BDAC');
    ellipse(250, 100, 50, 50);
  }
  if (mouseX > 300) {
    fill('#F4EEE1');
    ellipse(350, 100, 50, 50);
  }
  if (mouseX > 400) {
    fill('#ebcfc4');
    ellipse(450, 100, 50, 50);
  }
  if (mouseX > 500) {
    fill('#e8e6d9');
    ellipse(550, 100, 50, 50);
  }
  if (mouseX > 600) {
    fill('#999999');
    ellipse(650, 100, 50, 50);
  }
  if (mouseX > 675) {
    fill('#e9ccb1');
    ellipse(750, 100, 50, 50);
  }
  textSize(36);
  text("Kenzie Boukis", 300, 170);
}
