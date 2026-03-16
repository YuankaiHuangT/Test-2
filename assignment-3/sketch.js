//Yuankai Huang
//huang.yuank@northeastern.edu
//ARTG 2262
//LAB 2
//A 4
//BZT!
function setup() {
  createCanvas(1024, 1024);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(235, 177, 52);

  const cell = 1024/10;       

  for (let row = 0; row < 10; row++) {
    let y = row * cell; //y
    let rowShift;
    if (row % 2 === 1) {
  rowShift = cell / 2;
  } 
    else {
  rowShift = 0;
  }

    for (let col = 0; col < 11; col++) {
      let x = col * cell - rowShift; //x

      if (x >= width || x + cell <= 0) continue;

      noStroke();
      fill(90, 45, 160); 
      rect(x, y, 98, 98);

      drawChiRho(x, y);
    }
  }
  //saveCanvas('myDrawing', 'png')
}

function drawChiRho(tileX, tileY) {
  push();

  stroke(255);
  strokeWeight(6);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  noFill();


  let cx = tileX + 51.2;
  let cy = tileY + 51.2;


  line(cx - 31.2, cy - 24.8, cx + 31.2, cy + 24.8);
  line(cx - 31.2, cy + 24.8, cx + 31.2, cy - 24.8);

  line(cx, cy - 40, cx, cy + 40);


  arc(cx, cy - 26, 25.6, 25.6, -90, 90);

  strokeWeight(5);
  line(cx - 7.2, cy + 39.2, cx + 7.2, cy + 39.2);

  pop();

}
function output() {
saveCanvas('myDrawing', 'png');
}