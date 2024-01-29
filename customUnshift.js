function customUnshift() {
  if (this === undefined || this === null) {
    throw new TypeError(`Array.prototype.customUnshift called on null or undefined`);
  }

  const length = this.length || 0;
  const argumentsLength = arguments.length;

  if (!argumentsLength) return length;
  
  for (let i = length - 1; i >= 0; i--) {
    if (i in this) {
      this[i + argumentsLength] = this[i];
    }
    delete this[i];
  }

  for (let i = 0; i < argumentsLength; i++) {
    this[i] = arguments[i];
  }

  this.length = length + argumentsLength;
  return this.length;
}

Array.prototype.customUnshift = customUnshift;
