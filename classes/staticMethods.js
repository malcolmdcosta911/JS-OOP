class MathR {
  static Abs(val) {
    //not shown on instance of class , can use only on call when "static" used
    return Math.abs(val);
  }

  static Round(val) {
    return Math.round(val);
  }
}

console.log("MathR", MathR.Abs(-2));

class Bike {
  constructor(bikeName, year) {
    this.bikeName = bikeName;
    this.year = year;
  }

  static parse(jsonString) {
    const name = JSON.parse(jsonString).bikeName;
    const year = JSON.parse(jsonString).year;
    return new Bike(name, year);
  }
}

const aprilla = Bike.parse('{ "bikeName": "Aprilla", "year":2011 }');

console.log("aprilla", aprilla);
