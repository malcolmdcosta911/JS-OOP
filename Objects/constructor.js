function Human(age) {
  console.log("simply runs");
  this.age = age;
  this.walk = function () {
    console.log("the person of age " + this.age + " is walking");
  };
}

//new

const mal = new Human(28);
// const mal = Human(28);
// mal.walk();

//vedio 2

//  Human.call({}, 28); //===new Human(28);

// let x = {};

// x.constructor;

//vedio 3

// mal.age = 29;
// mal.walk();
// mal.think = true;
// console.log(mal.think);

// delete mal.think;
// console.log(mal.think);

//vedio 4

// for (let key in mal) {
//   // console.log(key, mal[key])

//   if (typeof mal[key] !== "function") {
//     console.log(key, mal[key]);
//   }
// }

// const keys = Object.keys(mal);
// console.log(keys);

// const entries = Object.entries(mal);
// console.log(entries);

if ("age" in mal) console.log("age is present");
