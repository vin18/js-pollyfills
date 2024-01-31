function customFindLast(callback, context) {
  if (this === undefined || this === null) {
    throw new TypeError(`Array.prototype.customFindLast called on null or undefined`);
  }

  if (!callback && typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }

  for (let i = this.length - 1; i >= 0; i--) {
    if (callback.call(context, this[i], i, this)) return this[i];
  }
}

Array.prototype.customFindLast = customFindLast;
