//bad pratice kills abstraction


function StopWatch() {
  let duration = 0;
  let startTime;
  let endTime;
  let running;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
    set: function (value) {
      startTime = value;
    },
  });

  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
    set: function (value) {
      endTime = value;
    },
  });

  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
    set: function (value) {
      running = value;
    },
  });
}

StopWatch.prototype.start = function () {
  if (this.running) throw new Error("StopWatch has already started");
  this.running = true;
  this.startTime = new Date();
};

StopWatch.prototype.stop = function () {
  if (!this.running) throw new Error("StopWatch is not started");

  this.endTime = new Date();
  console.log(this.endTime, "endTime", this); //    //this refers curr object

  this.running = false;
  this.duration += (this.endTime.getTime() - this.startTime.getTime()) / 1000;
};

StopWatch.prototype.reset = function () {
  this.duration = 0;
  this.startTime = null;
  this.endTime = null;
  this.running = false;
};

const watch = new StopWatch();

console.log(watch.duration);
watch.start();
// watch.start();
setTimeout(() => {
  watch.stop();
  console.log(watch.duration);
  watch.reset();
  console.log(watch.duration);
}, 1100);
