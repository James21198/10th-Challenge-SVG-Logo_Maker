const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
    test("should render svg for a green circle element", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
        const circle = new Circle();
        circle.setColour("green");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColour param", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
        const circle = new Circle();
        circle.setColour("blue");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Triangle", () {
    test("should render svg for a green polygon element", () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="red" />';
        const triangle = new Triangle();
        triangle.setColour("red");
        const actualSvg = triangle.render();
        console.log(actualSvg);
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColour param", () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
        const triangle = new Triangle();
        triangle.setColour("purple");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Square", () {
    test("should render svg for a green rect element", () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="pink" />';
        const square = new Square();
        square.setColour("pink");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColour param", () => {
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="orange" />';
        const square = new Square();
        square.setColour("orange");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});
