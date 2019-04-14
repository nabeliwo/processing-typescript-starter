import * as p5 from "p5";

import { preload, setup, draw } from "./sketch";

function sketch(p: p5) {
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.preload = () => {
    preload(p);
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    setup(p);
  };

  p.draw = () => {
    draw(p);
  };
}

new p5(sketch, document.body);
