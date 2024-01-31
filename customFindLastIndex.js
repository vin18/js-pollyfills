function customFindLastIndex(callback, context) {
  if (this === undefined || this === null) {
    throw new TypeError(`Array.prototype.customFindLastIndex called on null or undefined`);
  }

  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }

  for (let i = this.length - 1; i >= 0; i--) {
    if (callback.call(context, this[i], i, this)) return i;
  }

  return -1;
}

Array.prototype.customFindLastIndex = customFindLastIndex;
