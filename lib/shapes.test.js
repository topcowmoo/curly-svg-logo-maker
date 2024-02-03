const { Triangle, Circle, Square } = require("./shapes");

describe('Shapes', () => {
  test("Triangle should render correctly", () => {
    const shape = new Triangle();
    shape.setColor("orange");
    expect(shape.render()).toMatch(/<polygon\s+points="150,18 244,182 56,182"\s+fill="orange"\s*\/>/);
  });

  test("Circle should render correctly", () => {
    const shape = new Circle();
    shape.setColor("purple");
    expect(shape.render()).toMatch(/<circle\s+cx="150"\s+cy="100"\s+r="80"\s+height=200"\s+width="300"\s+fill="purple">\s*<\/circle>/);
  });

  test("Square should render correctly", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toMatch(/<rect\s+x="0"\s+y="0"\s+width="200"\s+height="200"\s+fill="blue">\s*<\/rect>/);
  });
});
