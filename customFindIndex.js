function customFindIndex(callback, context) {
  if (this === undefined || this === null) {
    throw new TypeError(`Array.prototype.customFindIndex called on null or undefined`);
  } 

  if (!callback && typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }

  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) return i;
  }

  return -1;
}

Array.prototype.customFindIndex = customFindIndex;
