//Yuankai Huang
//huang.yuank@northeastern.edu
//ARTG 2262
//LAB 2
//A 5 Hacker Level
//Seaweeds, SEAWEEDS!
let t = 0;
let seaweedLayers = []; // different layer

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  seaweedLayers = [
    { 
      seaweeds: [], //layer 3
      count: (width/(min(width, height) * 0.02))*0.1, 
      minSpacing: width/( (width/(min(width, height) * 0.02))*0.1), 
      color: [62, 150, 121],
      size: min(width, height) * 0.02, 
      dotSize: 0,
      distance: (min(width, height) * 0.02)/1.6,
      speed: 0.3,
      trash: [],
      nextTrashTime: random(60, 180),
      trashColors: [[120, 120, 120], [100, 70, 50]],
      trashSize: [min(width, height) * 0.0125, min(width, height) * 0.025],
      trashSpeed: [height * 0.00125, height * 0.00375]
    },
    { 
      seaweeds: [], //layer 2
      count: (width/(min(width, height) * 0.025))*0.1,
      minSpacing: width/( (width/(min(width, height) * 0.02))*0.1),
      color: [44, 112, 80],
      size: min(width, height) * 0.025,
      dotSize: min(width, height) * 0.00125,
      distance: (min(width, height) * 0.025)/1.8,
      speed: 0.5,
      trash: [],
      nextTrashTime: random(60, 180),
      trashColors: [[180, 180, 180], [130, 90, 60]],
      trashSize: [min(width, height) * 0.0187, min(width, height) * 0.03125],
      trashSpeed: [height * 0.0025, height * 0.00625]
    },
    { 
      seaweeds: [], //layer 1
      count: (width/(min(width, height) * 0.0375))*0.1,
      minSpacing: width/( (width/(min(width, height) * 0.02))*0.1),
      color: [46, 130, 35],
      size: min(width, height) * 0.0375,
      dotSize: min(width, height) * 0.002125,
      distance: (min(width, height) * 0.0375)/1.8,
      speed: 0.7,
      trash: [],
      nextTrashTime: random(60, 180),
      trashColors: [[220, 220, 220], [170, 120, 80]],
      trashSize: [min(width, height) * 0.025, min(width, height) * 0.04375],
      trashSpeed: [height * 0.00375, height * 0.00875]
    }
  ];
  
  //create seaweed for each layer
  for (let layer of seaweedLayers) {
    generateSeaweeds(layer);
  }
}

function generateSeaweeds(layer) {
  let attempts = 0;
  let maxAttempts = 200;
  
  while (layer.seaweeds.length < layer.count && attempts < maxAttempts) {
    let newX = random(width * 0.0625, width * 0.9375);
    let tooClose = false;
    
    for (let sw of layer.seaweeds) {
      if (abs(newX - sw.x) < layer.minSpacing) {
        tooClose = true;
        break;
      }
    }
    
    if (!tooClose) {
      layer.seaweeds.push({
        x: newX,
        amplitude: min(width, height) * random(0.01, 0.0187),
        frequency: random(0.015, 0.025),
        phase: random(0, TWO_PI)
      });
    }
    attempts++;
  }
}

function draw() {
  //background 
  for (let y = 0; y < height; y++) {
    let r, g, b;
    
    if (y > height / 2) {
     
      let distFromBottom = (y - height / 2) / (height / 2);
      r = lerp(78, 47, distFromBottom);
      g = lerp(163, 117, distFromBottom);
      b = lerp(163, 104, distFromBottom);
    } else {
      r = 78;
      g = 163;
      b = 163;
    }
    
    stroke(r, g, b);
    line(0, y, width, y);
  }
  noStroke();
  
  // create trash
  for (let layer of seaweedLayers) {
    if (frameCount >= layer.nextTrashTime) {
      layer.trash.push({
        x: random(width * 0.025, width * 0.975),
        y: -20,
        size: random(layer.trashSize[0], layer.trashSize[1]),
        speedY: random(layer.trashSpeed[0], layer.trashSpeed[1]),
        speedX: random(-0.5, 0.5),
        rotation: random(0, TWO_PI),
        rotationSpeed: random(-0.05, 0.05),
        color: random(layer.trashColors)
      });
      layer.nextTrashTime = frameCount + random(60, 180);
    }
    
    //trash move
    for (let i = layer.trash.length - 1; i >= 0; i--) {
      let tr = layer.trash[i];
      
      tr.y += tr.speedY;
      tr.x += tr.speedX;
      tr.rotation += tr.rotationSpeed;
      
      push();
      translate(tr.x, tr.y);
      rotate(tr.rotation);
      fill(tr.color[0], tr.color[1], tr.color[2]);
      rect(-tr.size/2, -tr.size/2, tr.size, tr.size);
      pop();
      
      if (tr.y > height + 50) {
        layer.trash.splice(i, 1);
      }
    }
    drawLayer(layer); // create seaweed
  }
  
 drawClock();
  
  t += 0.05;
}

function drawClock() {

  let h = hour();
  let m = minute();
  let s = second();
  let d = day();
  let mo = month();
  let y = year();

  let timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2);
  let dateString = nf(mo, 2) + '/' + nf(d, 2) + '/' + y;
  

  push();
  fill(255, 255, 255);
  textAlign(RIGHT, TOP);
  textSize(min(width * 0.04, 40));
  text(timeString, width - 30, 30);
  
  textSize(min(width * 0.02, 20));
  text(dateString, width - 30, 30 + min(width * 0.04, 40) + 5);
  pop();
}

function drawLayer(layer) {
  for (let sw of layer.seaweeds) {
    let timeOffset = t * layer.speed;
    
    for (let y = -height * 0.1; y < height * 1.1; y += layer.distance) {
      let x = sw.x + sin(y * sw.frequency + timeOffset + sw.phase) * sw.amplitude;
      fill(layer.color[0], layer.color[1], layer.color[2]);
      circle(x, y, layer.size);
    }
    
    for (let y = 0; y < height; y += 2) {
      let x = sw.x + sin(y * sw.frequency + timeOffset + sw.phase) * sw.amplitude;
      fill(30);
      circle(x, y, layer.dotSize);
    }
  }
}