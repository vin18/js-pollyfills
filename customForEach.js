function customForEach(callback, context) {
  if (this === undefined || this === null) {
    throw new TypeError(`Array.prototype.forEach() called on null or undefined`);
  } 

  if (!callback && typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }

  const length = this.length;
  for (let i = 0; i < length; i++) {
    callback.call(context, this[i], i, this);
  }
}  
