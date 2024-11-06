let canEat = {
  eat: function () {
    console.log("canEat");
  },
};

let canSwim = {
  swim: function () {
    console.log("canSwim");
  },
};

let canRun = {
  run: function () {
    console.log("canRun");
  },
};

function Human() {}

const h = new Human();
console.log("human", h); //will still have canEat, canRun, canSwim even thought called before
// Object.assign points
// Copies enumerable properties from Parent.prototype to Child.prototype
// Does not modify the existing prototype chain
// Does not affect Child.prototype.constructor
Object.assign(Human.prototype, canEat, canRun, canSwim); //can call after creating instance

console.log("human", h);

function Fish() {}

Object.assign(Fish.prototype, canEat, canSwim);
const f = new Fish();
console.log("Fish", f);
