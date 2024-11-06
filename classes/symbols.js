const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
    [_draw] = function () {
      console.log("draw");
    };
  }
}

const c = new Circle(12);

console.log(c);

// const radiusKey = Object.getOwnPropertySymbols(c)[0];
// console.log(c[radiusKey]);
