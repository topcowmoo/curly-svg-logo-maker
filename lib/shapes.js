class Shape {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  centerX() {
    return 0; // Override in each shape class
  }

  centerY() {
    return 0; // Override in each shape class
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}"></polygon>`;
  }

  centerX() {
    return 150;
  }

  centerY() {
    // Adjusted the calculation for centerY
    return (18 + 182 + 56) / 3;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="150" r="80" fill="${this.color}"></circle>`;
  }

  centerX() {
    return 150;
  }

  centerY() {
    return 150;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="40" y="40" width="220" height="220" fill="${this.color}"></rect>`;
  }

  centerX() {
    return 150;
  }

  centerY() {
    return 150;
  }
}

module.exports = { Triangle, Circle, Square };
