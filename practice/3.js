// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year.
//Include a method to display vehicle details.
// Create a subclass called 'Car' that inherits from the
// 'Vehicle' class and includes an additional property for the number of doors. Override the display method to
//include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  display() {
    console.log("Vehicle Details", this.make, this.model, this.year);
  }
}

class Car extends Vehicle {
  constructor(doors, make, model, year) {
    super(make, model, year);
    this.doors = doors;
  }

  display() {
    console.log(
      "Vehicle Details",
      this.make,
      this.model,
      this.year,
      "doors:",
      this.doors
    );
  }
}

const car = new Car(12, "VW", 2021, 2009);

car.display();
