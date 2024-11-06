function Animal(name) {
  // all inside othe then proto are instance members
  this.name = name;

  this.canWalk = function () {
    console.log("can walk");
  };
}

const cat = new Animal("kitty");
const dog = new Animal("Doggo");

//can create object first and then modify prototype
Animal.prototype.hide = function () {
  this.canWalk();
  console.log(this.name + " can hide");
};

Animal.prototype.toString = function () {
  console.log("can rewrite  deafult toString --> only first child proto shows");
};

cat.hide();
cat.toString();

console.log("Only returns instance members", Object.keys(cat));

//return all memeber even prototype
for (let key in cat) {
  console.log(key);
}
