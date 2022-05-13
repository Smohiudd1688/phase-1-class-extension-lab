// Your code here
class Polygon {
    constructor(sidesArray) {
        this.sidesArray = sidesArray;
    }

    get countSides() {
        return this.sidesArray.length;
    }

    get perimeter() {
        return this.sidesArray.reduce((side1, side2) => {
            return side1 + side2;
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sidesArray[0] + this.sidesArray[1] > this.sidesArray[2]
            && this.sidesArray[1] + this.sidesArray[2] > this.sidesArray[0]) {
                return true;
            }
            return false;
    }
}

class Square extends Polygon {
    get isValid() {
        const checker = this.sidesArray[0];
        for (const side of this.sidesArray) {
            if (side !== checker) {
                return false;
            }
        }
        return true;
    }

    get area() {
        return this.sidesArray[0] * this.sidesArray[0];
    }
}