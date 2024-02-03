const { Triangle, Circle, Square } = require("./shapes");

test("Triangle should render correctly", () => {
    const shape = new Triangle();
    // shape.setColor("blue");
    // expect(shape.render()).toEqual('');
});

test("Circle should render correctly", () => {
    const shape = new Circle();
    shape.setColor("WHAT GOES HERE");
    expect(shape.render()).toEqual('kkjksljkjj');
});

test("Square should render correctly", () => {
    const shape = new Square();
    shape.setColor("WHAT GOES HERE");
    expect(shape.render()).toEqual('-------');
});