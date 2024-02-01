class Shape {
    constructor() {
        this.color = "";
    }

    setColor(color) {
        this.color = color;
    }

    render() {

        // render logic for the shapes


    }
}

class Trianlge extends Shape {
    render() {

        // render logic for triangle
    }
}

class Circle extends Shape {
    render() {
        // render logic for circle
    }
}

class Square extends Shape {
    render() {
        // render logic for square
    }
}

module.exports = {Shape, Triangle, Circle, Square };