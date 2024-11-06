

// bind vs call working 

function Human() {
  console.log("this is " + this.name);
}

// Human.bind({ name: "mal" })(); //mal
// Human.bind({ name: "mini" })(); //mini

// const mal = Human.bind({ name: "mal" });
// mal.bind({ name: "mini" });
// mal() //mal

Human.call({ name: "mini" });
