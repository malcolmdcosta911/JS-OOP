function Shape() {
  //wont work unless seperate new in both functions as only proto inherited in extend
  // this.draw = function () {
  //   console.log("draw Shape original");
  // };
}

Shape.prototype.draw = function () {
  console.log("draw Shape");
};

function Circle() {
  //redefine here or on prototype
  // this.draw = function () {
  //   console.log("draw Circle");
  // };
}

extend(Shape, Circle);

//call after extend protype reset
Circle.prototype.draw = function () {
  console.log("draw Circle proto");
};

const c = new Circle();
const s = new Shape();

function extend(Parent, Child) {
  // Object.assign(Child.prototype, Parent.prototype);
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

const shapes = [new Circle(), new Shape()];

// for loop here represents polymorphism
for (let item of shapes) {
  item.draw();
  console.log("instance:", item);
}
