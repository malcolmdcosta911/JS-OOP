const _radius = new WeakMap();
const _draw = new WeakMap();
// const privatePros = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    // privatePros.set(this, {
    //   radius,
    //   draw: () => {},
    // });

    // privatePros.get(this).radius

    //can use bind or arrow function
    // _draw.set(
    //   this,
    //   function () {
    //     console.log(this);
    //   }.bind(this)
    // );

    _draw.set(this, () => {
      console.log(this);
    });
  }

  move() {
    console.log("move");
    _draw.get(this)();
  }
}

const c = new Circle(12);

c.move();
