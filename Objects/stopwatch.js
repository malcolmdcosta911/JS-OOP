function StopWatch() {
  let duration = 0;
  let startTime;
  let endTime;
  let running;

  this.start = function () {
    if (running) throw new Error("StopWatch has already started");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("StopWatch is not started");

    endTime = new Date();
    running = false;
    duration = (endTime.getTime() - startTime.getTime()) / 1000;
  };

  this.reset = function () {
    duration = 0;
    startTime = null;
    endTime = null;
    running = false;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

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
