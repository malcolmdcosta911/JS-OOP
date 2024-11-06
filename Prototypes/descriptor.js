// let obj = {};

// let objBase = Object.getPrototypeOf(obj);

// let descriptor = Object.getOwnPropertyDescriptor(objBase, "toString");

// console.log("descriptor", descriptor);

//2

// let person = { name: "Mal" };

// Object.defineProperty(person, "name", {
//   writable: false,
//   enumerable: false,

// });

// person.name = "mini";

// console.log("person.name ", person.name, Object.keys(person));

//3
// let person = { name: "Mal" };

// Object.defineProperty(person, "named", {
//   get: function () {
//     return this.name;
//   },
// });

// person.name = "mini";

// console.log("person.name ", person.named, Object.keys(person));




//4

let person = { name: "Mal" };

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

person.name = "mini";
delete person.name;
console.log("person.name ", person.name, Object.keys(person));
