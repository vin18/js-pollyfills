function customSome(callback) {  
  if (this === undefined || this === null) {
    throw new TypeError(`Array.prototype.customSome called on null or undefined`);
  } else if (typeof callback !== 'function') {
    throw new TypeError(`callback should be a function`);
  }

  const thisArg = arguments[1] || this;

  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      return true;
    }
  }

  return false;
}

Array.prototype.customSome = customSome;
