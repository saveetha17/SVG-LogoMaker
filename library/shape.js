class Shape {
  constructor() {
    this.color = "";
  }

  setColor(){
    this.color=color;
  }
}

class Trriangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = Shape;
