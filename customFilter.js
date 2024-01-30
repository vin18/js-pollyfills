function customFilter(callback, context) {
  if (this === undefined || this === null) {
    throw new TypeError(`Array.prototype.customFilter() called on null or undefined`);
  }

  if (!callback && typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }

  const length = this.length;
  const result = [];
  
  for (let i = 0; i < length; i++) {
    if (i in this && callback.call(context, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
}
