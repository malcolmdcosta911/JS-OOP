function Animal(name) {
  this.name = name;
  this.canWalk = function () {
    console.log("can walk");
  };
}

Animal.prototype.hide = function () {
  this.canWalk();
  console.log(this.name + " can hide");
};

Animal.prototype.toString = function () {
  console.log("can rewrite --> only first child proto shows");
};

const cat = new Animal("kitty");
const dog = new Animal("Doggo");

cat.hide();
cat.toString();
