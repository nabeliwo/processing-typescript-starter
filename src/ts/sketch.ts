import * as p5 from "p5";

export function preload(p: p5) {
  // preload
  console.log(p);
}

export function setup(p: p5) {
  // setup
  console.log(p);
}

export function draw(p: p5) {
  // draw
  if (p.mouseIsPressed) {
    p.fill(0);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  }
}
