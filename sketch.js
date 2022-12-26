const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5()


const settings = {
  pixelsPerInch: 300,
  p5: true,
  duration: 3,
  animate: true,
  dimensions: [1024, 1024],
  bleed: 1 / 8,
};

let scFader;
let mnFader;
let hrFader;
let scNeedle;
let scNeedleColor;
let mnNeedle;
let mnNeedleColor;
let hrNeedle;
let hrNeedleColor;






canvasSketch(() => {

 
  noCursor();
  return ({
    playhead,
    width,
    height
  }) => {
background(255);
noStroke();

let hr = hour();
let mn = minute();
let sc = second();
let ms = millis();
noStroke();



//second
  scFader = map(sc, 0, 60, 255, 0);
  scNeedle = map(sc, 0, 60, 0, width);
  scNeedleColor = map(sc, 0, 60, 0, 255);
  fill(scFader);
  rect(0, 0, width, height/3);
  fill(scNeedleColor);
  rect(scNeedle, 0, width/60, height * 0.33);

  //minute

  mnFader = map(mn, 0, 60, 255, 0);
  mnNeedle = map(mn, 0, 60, 0, width);
  mnNeedleColor = map(mn, 0, 60, 0, 255);
  console.log(mnFader);
  fill(mnFader);
  rect(0, height * 0.33, width, height/3);
  fill(mnNeedleColor);
  rect(mnNeedle, height * 0.33,  width/60, height * 0.33);

  //hour
  
  hrFader = map(hr, 0, 24, 255, 0);
  hrNeedle = map(hr, 0, 24, 0, width);
  hrNeedleColor = map(hr, 0, 24, 0, 255);
  console.log(hrFader);
  fill(hrFader);
  rect(0, height* 0.66, width, height/3);
  fill(hrNeedleColor);
  rect((hrNeedle-width/24), height * 0.66,  width/24, height * 0.34);

}
}, settings);
