//1
let x = {};

console.log(Object.prototype === Object.getPrototypeOf(x) ? true : false);

//2
let arr = [];

console.log(Array.prototype === Object.getPrototypeOf(arr) ? true : false);

function Car() {}

const audi = new Car();

console.log(Car.prototype == Object.getPrototypeOf(audi));
