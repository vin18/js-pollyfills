function customAt() {
  if (this === undefined || this === null) {
    throw new TypeError(`Array.prototype.customAt called at null or undefined`);
  }

  const length = this.length;
  const argumentsLength = arguments.length;
  if (!argumentsLength) return length;

  const index = arguments[0];
  if (index >= 0) return this[index];
  else return this[this.length + index]; 
}

Array.prototype.customAt = customAt;
