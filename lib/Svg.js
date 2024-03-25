class LogoText {
    constructor(text, colour) {
        this.colour = colour;
        this.text = text;
    }
    render() {
        return `<text x="150" y="125" font-size"60" text-anchor="middle" fill=${this.colour}">${this.text}</text>`;
    }

    setText(message, colour) {
        if(message.length > 3) {
            throw new Error("text must not exceed 3 characters.");
        }
        this.text = `<text x="150" y="125" font-size = "60" text-anchor="middle" fill="${colour}">${message}</tet>`;
    }
}

class SVG {
    constructor(shape) {
        this.shape = shape;
    }
    
    render() {
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}</svg>`;
        return svg;
    }
}

module.exports = { LogoText, SVG };