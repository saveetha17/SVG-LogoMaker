class Shape {
  constructor() {
    this.color = "";
  }

  setColor(){
    this.color=color;
  }
}

class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="80" y="50" width="105" height="105" fill="${this.color}" />`;
    }
}

module.exports = Shape;
