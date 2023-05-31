const SVG = require('./svg');
const {Circle} = require('./shape');

describe("SVGTest", () => {

    test("should render svg element with width-300 height-200 svg element ", () => {
        newSVGTest = new SVG();
        // const newtext = new Circle();
        // newtext.setColor("red");
        // newSVGTest.setShape(newtext);
        // newSVGTest.setText("SVG","white");
        const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
        expect(newSVGTest.render()).toEqual(expected);

    });
    
    test("should render text element", () => {
        newSVGTest = new SVG();
        const newtext = new Circle();
        newtext.setColor("red");
        newSVGTest.setShape(newtext);
        newSVGTest.setText("SVG","white");
        const expected = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`
        expect(newSVGTest.text).toEqual(expected);

    });

    test("should render circle Shape element", () => {
        newSVGTest = new SVG();
        newSVGTest.setText("SVG","white");
        const newshape = new Circle();
        newshape.setColor("red");
        newSVGTest.setShape(newshape);
        const expected = `<circle cx="150" cy="150" r="100" fill="red" />`;
        expect(newSVGTest.shape).toEqual(expected);


        // //const newtext = new Circle();
        // //const newshape = new Circle();
        // //newtext.setColor("red");
        // //newSVGTest.setShape(newshape);
        // newSVGTest.setText("SVG","white");
        // const actual = newSVGTest.setShape(Circle);
        // const expected = `<circle cx="150" cy="150" r="100" fill="red" />`;
        // expect(actual).toEqual(expected);

    });
    //     newSVGTest = new SVG();
    //     const newshape = new Circle();
    //     newSVGTest.setColor("red");
    //     newSVGTest.setText("SVG","white");
    //     const actual = newSVGTest.setShape(newshape);
    //     const expected = `<circle cx="150" cy="150" r="100" fill="red" />`;
    //     expect(actual).toEqual(expected);
    // });

    

});