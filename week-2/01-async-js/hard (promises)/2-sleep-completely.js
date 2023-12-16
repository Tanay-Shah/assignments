/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// npx jest ./tests/2-sleep-completely.test.js


function sleep(milliseconds) {
  return new Promise((resolve) => {
    let start=Date.now();
    let endTime = start+ milliseconds;

    function loop() {
      while (Date.now() < endTime) {}
      resolve();
    }
    loop();
  });
}

module.exports = sleep;
