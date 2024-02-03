const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle test", () => {
  test("Triangle should render correctly", () => {
    const shape = new Triangle();
    shape.setColor("orange");
    expect(shape.render()).toEqual(
      `<polygon points="150,18 244,182 56,182" fill="orange"></polygon>`
    );
  });
});

describe("Circle test", () => {
  test("Circle should render correctly", () => {
    const shape = new Circle(); // Fix: Use Circle instead of Triangle
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="100" r="80" height="200" width="300" fill="purple"></circle>`
    );
  });
});

describe("Square test", () => {
  test("Square should render correctly", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      `<rect x="0" y="0" width="200" height="200" fill="blue"></rect>`
    );
  });
});
