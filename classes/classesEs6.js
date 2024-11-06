class Shape {
  //classes not hoisted in js

  //deafult strict mode inside class

  constructor(points) {
    //anything on constructor defined on object
    this.points = points;
    this.draw = function () {
      console.log("draw", this.points);
    };
  }

  //defined on prototype
  move(val) {
    console.log("move", this.points, val);
  }

  toRead() {
    console.log("toRead");
  }
}

class Circle extends Shape {
  //only if use contsructor then need to pass super
  constructor(points, radius) {
    super(points); //first call super before using 'this' keyword
    this.radius = radius;
  }

  round() {
    //can call parent class using super
    super.move(val);
  }

  //override so child  toRead called
  toRead() {
    console.log("toRead");
  }
}

const circle = new Circle([1, 2]);

for (let shape of [new Circle([1, 2], 3), new Shape([1, 2])]) {
  console.log(shape.toRead());
}
