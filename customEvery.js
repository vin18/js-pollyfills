function customEvery(callback) {
  if (this === undefined || this === null) {
    throw new TypeError(`Array.prototype.customEvery called on null or undefined`);
  } else if (typeof callback !== 'function') {
    throw new TypeError(`callback is not a function`);
  }

  const thisArg = arguments[1] || this;

  for (let i = 0; i < this.length; i++) {
    if (i in this && !callback.call(thisArg, this[i], i, this)) {
      return false;
    }
  }

  return true;
}

Array.prototype.customEvery = customEvery;
