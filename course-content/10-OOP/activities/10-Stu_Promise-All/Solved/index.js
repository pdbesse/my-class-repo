const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // If the duration is longer than maxDuration, reject() the promise
      if (duration >= maxDuration) {
        reject(new Error(`This request timed out`));
      } else {
        // Otherwise resolve() the promise
        resolve(`Response received: ${duration}ms`);
      }
    }, duration);
  });

const promises = [];

apiCallDurations.forEach((duration) => promises.push(callAPI(duration)));

// const promises = apiCallDurations.map((duration) =>  callAPI(duration));

console.log('Promises array before the timeouts have finished: ', promises);

// Promise.all will resolve when all promises in the array have been resolved
// Promise.all will reject if any of the promises in that array was rejected
Promise.all(promises)
  .then((response) => console.log('Response from Promise.all():', response))
  .catch((err) => console.error(err));


//================Promise Chain

promises[0].then((result0) => {
  return promises[1].then((result1) => {
    return promises[2].then((result2) => {
      return promises[3].then((result3) => {
        return [result0,result1,result2,result3];
      })
    })
  })
})

