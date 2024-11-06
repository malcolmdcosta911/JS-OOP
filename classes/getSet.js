const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(val) {
    if (typeof val !== "number" || val <= 0)
      throw new Error("did not recieve valid radius value as argument");
    return _radius.set(this, val);
  }
}

const c = new Circle(12);

console.log(c.radius);

// c.radius = "13";
c.radius = 13;

console.log(c.radius);
