const {Circle, Triangle, Square} = require('./shape');

describe("Triangle", () => {
    test("should render svg for a blue polygon element", () => {
      const expected =
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
      const triangle = new Triangle();
      triangle.setColor("blue");
      const actual = triangle.render();
      expect(actual).toEqual(expected);
    });
    test("should accept a fillColor param", () => {
      const expected =
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
      const triangle = new Triangle();
      triangle.setColor("blue");
      const actual = triangle.render();
      expect(actual).toEqual(expected);
    });
  });

describe("Square", () => {
    test("should render svg for a green rectangle element", () => {
      const expected =
        '<rect x="50" y="42" width="200" height="200" fill="green" />';
      const square = new Square();
      square.setColor("green");
      const actual = square.render();
      expect(actual).toEqual(expected);
    });
    test("should accept a fillColor param", () => {
      const expected =
        '<rect x="50" y="42" width="200" height="200" fill="green" />';
      const square = new Square();
      square.setColor("green");
      const actual = square.render();
      expect(actual).toEqual(expected);
    });
  });

  describe("Circle", () => {
    test("should render svg for a red circle element", () => {
      const expected =
        '<circle cx="150" cy="110" r="90" fill="red" />';
      const circle = new Circle();
      circle.setColor("red");
      const actual = circle.render();
      expect(actual).toEqual(expected);
    });
    test("should accept a fillColor param", () => {
      const expected =
        '<circle cx="150" cy="110" r="90" fill="red" />';
      const circle = new Circle();
      circle.setColor("red");
      const actual = circle.render();
      expect(actual).toEqual(expected);
    });
  });
  