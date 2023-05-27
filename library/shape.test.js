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
      expect(actualSvg).toEqual(expectedSvg);
    });
  });
  