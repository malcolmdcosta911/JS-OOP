let car = {
  name: "alto 800",
  brand: "maruti",
  getDetails() {
    console.log("Try " + this.name + " " + this.brand);
  },
};

car.name = "swift vdi";

car.getDetails();
