function Spin(rounds) {
  this.rounds = rounds;
  this.spin = function () {
    console.log("spins " + this.rounds);
  };
}

const s = new Spin(1);

//new Spin.prototype.constructor() ==new Spin();

function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Fan(speed, rounds) {
  this.speed = speed;
  Spin.call(this, rounds); // calls th func , is equal to new Spin()
}

extend(Spin, Fan);

// console.log(Object.create(Object.prototype));
// console.log(Object.create(Spin.prototype));

// Fan.prototype = Object.create(Spin.prototype);
// Fan.prototype.constructor = Fan;
//reset constrcutor else new Fan.prototype.constructor(); return Fan Object

const oreva = new Fan(1, 10);

function Tyre(radius, rounds) {
  this.radius = radius;
  Spin.call(this, rounds); // calls th func , is equal to new Spin()
}

extend(Spin, Tyre);

const rubberTyre = new Tyre(1, 10);
