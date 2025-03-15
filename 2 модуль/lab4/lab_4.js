class Figure {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }


    square() {
        return undefined;
    }


    getCenter() {
        return { x: this.#x, y: this.#y };
    }
}

class Circle extends Figure {
    #r;

    constructor(x, y, r) {
        super(x, y);
        this.#r = r;
    }


    square() {
        return Math.PI * this.#r ** 2;
    }


    getRadius() {
        return this.#r;
    }
}

class Rectangle extends Figure {
    #h;
    #w;

    constructor(x, y, h, w) {
        super(x, y);
        this.#h = h;
        this.#w = w;
    }


    square() {
        return this.#h * this.#w;
    }

    
    getDimensions() {
        return { height: this.#h, width: this.#w };
    }
}

const circle = new Circle(2, 3, 3.5);
console.log('Circle:');
console.log('Center:', circle.getCenter());
console.log('Radius:', circle.getRadius());
console.log('Area:', circle.square().toFixed(2));

const rectangle = new Rectangle(2, 3, 4, 7);
console.log('\nRectangle:');
console.log('Center:', rectangle.getCenter());
console.log('Dimensions:', rectangle.getDimensions());
console.log('Area:', rectangle.square());