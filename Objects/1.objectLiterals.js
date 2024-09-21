let car = {
  name: "alto 800",
  brand: "maruti",
  getDetails() { //if object has 1 or more methods it has behavior and duplicating it you should use factory funcs or class
    console.log("Try " + this.name + " " + this.brand);
  },
  getName: function () {
    console.log("Name: " + this.name);
  },
};

car.name = "swift vdi";

car.getDetails();

car.getName();
