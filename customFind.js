function customFind(callback) {
  'use strict';
  
  if (this === undefined || this === null) {
    throw new TypeError(`Array.prototype.customFind called on null or undefined`);
  } else if (typeof callback !== 'function') {
    throw new TypeError(`callback must be a function`);
  }

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
}

Array.prototype.customFind = customFind;
