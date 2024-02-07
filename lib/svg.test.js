const { Triangle, Circle, Square } = require("./shapes");
const Svg = require("./svg"); // Import Svg class


describe("setTextElement method", () => {
  test("should correctly set text element for triangle shape", () => {
    const svg = new Svg();
    svg.setTextElement("Test", "red", "triangle");
    expect(svg.textElement).toEqual('<text x="150" y="130" font-size="40" text-anchor="middle" dominant-baseline="middle" fill="red">Test</text>');
  });

  test("should correctly set text element for circle shape", () => {
    const svg = new Svg();
    svg.setTextElement("Test", "blue", "circle");
    expect(svg.textElement).toEqual('<text x="150" y="105" font-size="40" text-anchor="middle" dominant-baseline="middle" fill="blue">Test</text>');
  });

  test("should correctly set text element for square shape", () => {
    const svg = new Svg();
    svg.setTextElement("Test", "green", "square");
    expect(svg.textElement).toEqual('<text x="150" y="100" font-size="40" text-anchor="middle" dominant-baseline="middle" fill="green">Test</text>');
  });

  test("should log 'Invalid shape!' for unknown shape", () => {
    const svg = new Svg();
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    svg.setTextElement("Test", "green", "unknown");
    expect(consoleSpy).toHaveBeenCalledWith('Invalid shape!');
    consoleSpy.mockRestore(); // Restore console.log
  });
});

describe("setShapeElement method", () => {
  test("should correctly set shape element for triangle shape", () => {
    const svg = new Svg();
    const triangle = new Triangle();
    svg.setShapeElement(triangle);
    expect(svg.shapeElement).toContain('<polygon points="150,18 244,182 56,182"');
  });

  test("should correctly set shape element for circle shape", () => {
    const svg = new Svg();
    const circle = new Circle();
    svg.setShapeElement(circle);
    expect(svg.shapeElement).toContain('<circle cx="150" cy="150" r="80"');
  });

  test("should correctly set shape element for square shape", () => {
    const svg = new Svg();
    const square = new Square();
    svg.setShapeElement(square);
    expect(svg.shapeElement).toContain('<rect x="40" y="40" width="220" height="220"');
  });
});