import Circle from "./circle.js";
//circle.js use for type module in script else get error
const c = new Circle(12);

console.log(c.radius);

// c.radius = "13";
c.radius = 13;

console.log(c.radius);
