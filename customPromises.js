// Polyfill to implement custom promises

class MyPromise {
  resolvedData;
  resolveChain = [];
  isResolved = false;

  rejectedData;
  rejectChain = [];
  isRejected = false;

  constructor(executor) {
    const resolve = (value) => {
      this.isResolved = true;
      this.resolvedData = value;

      if (this.resolveChain.length) {
        this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
      }
    };

    const reject = (value) => {
      this.rejectedData = value;
      this.isRejected = true;

      if (this.rejectChain.length) {
        this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(fn) {
    this.resolveChain.push(fn);
    if (this.isResolved) {
      this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
    }
    return this;
  }

  catch(fn) {
    this.rejectChain.push(fn);
    if (this.isRejected) {
      this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
    }
    return this;
  }

  finally(fn) {
    this.resolveChain.push(fn);
    this.rejectChain.push(fn);

    if (this.isResolved) {
      this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
    }

    if (this.isRejected) {
      this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
    }
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(value) {
    return new Promise((_, reject) => reject(value));
  }

  static all(promises) {
    const results = [];
    let count = 0;

    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .then((data) => {
            results[i] = data;
            count++;

            if (count === promises.length) {
              resolve(results);
            }
          })
          .catch((error) => reject(error));
      }
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        return promise.then(resolve).catch(reject);
      });
    });
  }

  static allSettled(promises) {
    const result = [];
    let count = 0;

    return new Promise((resolve) => {
      const handleResult = (value, index, status) => {
        result[index] = { status, value };
        count++;
        if (count === promises.length) resolve(result);
      };

      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .then((res) => handleResult(res, i, "fulfilled"))
          .catch((err) => handleResult(err, i, "rejected"));
      }
    });
  }

  static any(promises) {
    const result = [];
    let count = 0;

    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(resolve).catch((err) => {
          result[index] = { status: "rejected", value: err };
          count++;
          if (count === promises.length) reject(result);
        });
      }
    });
  }
}

// MyPromise.all([
//   Promise.resolve(10),
//   Promise.resolve(20),
//   Promise.reject("Error"),
//   Promise.resolve(40),
// ]).then((data) => console.log(data));
// MyPromise.resolve(10).then((data) => console.log(data));
// MyPromise.reject("Error").catch((data) => console.log(data));

// new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(100);
//   }, 100);
//   setTimeout(() => {
//     reject("Async Error!!");
//   }, 100);
//   resolve(10);
//   reject("Error!");
// });
//   .then((data) => {
//     return data * 2;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => err)
//   .catch((err) => console.log(err));
//   .finally((data) => console.log(data));

// Edge case
// 1. Don't allow multiple resolve and reject returns
// 2. Return new promise from .then() or .catch()
// 3. Only return error if the .any() any of the promise fails
