function Spin(rpm) {
  this.rpm = rpm;
}

Spin.prototype.canSpin = function () {
  console.log("Spin original spins rounds:" + this.rounds, "  rpm:", this.rpm);
};

function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Fan(speed, rounds, rpm) {
  Spin.call(this, rpm);
  this.speed = speed;
  this.rounds = rounds;
}

extend(Spin, Fan);

Fan.prototype.canSpin = function () {
  Spin.prototype.canSpin.call(this);
  console.log("Fan spins");
};

function Tyre(speed, rounds, rpm) {
  Spin.call(this, rpm);
  this.speed = speed;
  this.rounds = rounds;
}

Tyre.prototype.canSpin = function () {
  //Spin.prototype.canSpin.call(this);
  console.log("Tyre spins");
};

const spinners = [new Fan(1, 10, 190), new Tyre(1, 10, 7), new Spin(15)];

// for loop here represents polymorphism
for (let spinner of spinners) {
  spinner.canSpin();
  console.log("instance:", spinner);
}
// console.log(spinner)
