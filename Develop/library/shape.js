class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color){
    this.color = color;
    // console.log("shape color",color)
  }
}

class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="42" width="200" height="200" fill="${this.color}" />`;
    }
}

class Circle extends Shape{
    render() {
        return `<circle cx="150" cy="110" r="90" fill="${this.color}" />`
    }
}

module.exports = {Circle,Triangle,Square};
