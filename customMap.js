function customMap(callback, context) {
  if (this === undefined || this === null) {
    throw new TypeError(`Array.prototype.customMap() called on null or undefined`);
  }

  if (!callback && typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }

  const result = [];
  const length = this.length;
  
  for (let i = 0; i < length; i++) {
    if (i in this) {
      result.push(callback.call(context, this[i], i, this));
    }
  }
  
  return result;
}
