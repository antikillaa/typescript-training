import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(new Shape(20, 25));
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let temp of theShapes) {
    console.log(temp);
}