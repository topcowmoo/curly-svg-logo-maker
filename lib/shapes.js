class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
      return `<polygon height="100%" width="100%" points="150,18 244,182 56,182" fill="${this.color}"></polygon>`;
    }
  }

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" height="200" width="300" fill="${this.color}"></circle>`;
    }
}

class Square extends Shape {
    render() {
        return `rect x="0" y="0" width="200" height="200" fill="${this.color}"></rect>`;
    }
}

module.exports = {Triangle, Circle, Square};