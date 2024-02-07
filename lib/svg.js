class Svg {
    constructor() {
      this.textElement = "";
      this.shapeElement = "";
    }
  
    render() {
      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
  
    setTextElement(text, color, shape) {
      let textX, textY;
  
      switch (shape.toLowerCase()) {
        case "triangle":
          textX = 150;
          textY = 130; // Adjusted for vertical centering
          break;
        case "circle":
          textX = 150;
          textY = 105;
          break;
        case "square":
          textX = 150;
          textY = 100;
          break;
        default:
          console.log("Invalid shape!");
          return;
      }
  
      this.textElement = `<text x="${textX}" y="${textY}" font-size="40" text-anchor="middle" dominant-baseline="middle" fill="${color}">${text}</text>`;
    }
  
    setShapeElement(shape) {
      this.shapeElement = `<g transform="translate(${150 - shape.centerX()}, ${100 - shape.centerY()})">${shape.render()}</g>`;
    }
  }
  
  module.exports = Svg;