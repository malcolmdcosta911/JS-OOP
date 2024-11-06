function Spin() {}

Spin.prototype.canSpin = function () {
  console.log("spins " + this.rounds, Spin.prototype);
};

function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Fan(speed, rounds) {
  this.speed = speed;
  this.rounds = rounds;
}

extend(Spin, Fan);

Fan.prototype.canSpin = function () {
  //   Spin.prototype.canSpin();
  Spin.prototype.canSpin.call(this);
  console.log("Fan spins");
};

function Tyre(speed, rounds) {
  this.speed = speed;
  this.rounds = rounds;
}

Tyre.prototype.canSpin = function () {
  Spin.prototype.canSpin.call(this);
  console.log("Tyre spins");
};

const spinners = [new Fan(1, 10), new Tyre(1, 10)];

for (let spinner of spinners)
    spinner.canSpin();
    // console.log(spinner)