function customReduce(callback, initialValue) {
  if (this === undefined || this === null) {
    throw new TypeError(`Array.prototype.customReduce called on null or undefined`);
  } 
  
  if (!callback && typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }

  if (!this.length) {
    if (arguments.length < 2) {
      throw new TypeError(`Reduce of empty array with no initial value`);
    } else if (arguments.length === 2) {
      return initialValue;
    }
  }

  let acc = initialValue || 0;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
}


