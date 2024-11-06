"use strict";

function Car() {
  this.drive = function () {
    console.log(this);
  };
}

const bmw = new Car();

drive = bmw.drive;

drive(); //give global this hence use strict
