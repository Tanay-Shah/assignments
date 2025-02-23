/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.              npx jest ./tests/3-promise-all.test.js
 */

function wait1(t) {
  let start = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Date.now() - start);
    }, t * 1000);
  });
}

function wait2(t) {
  let start = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Date.now() - start);
    }, t * 1000);
  });
}

function wait3(t) {
  let start = Date.now();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Date.now() - start);
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();

  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
    const endTime = Date.now();
    return endTime - startTime; // Returning the time taken in milliseconds
  });
}
module.exports = calculateTime;
