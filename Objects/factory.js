function Car(name = "alto 800") {
  return {
    name,
    getName: function () {
      console.log("Name: " + this.name);
    },
  };
}

let car = Car("wagonr");
car.getName();
