function customPush() {
  if (this === undefined || this === null) {
    throw new TypeError(
      `Array.prototype.customPush called on null or undefined`
    );
  }

  const argumentsLength = arguments.length;
  const length = this.length;

  for (let i = 0; i < argumentsLength; i++) {
    this[i + length] = arguments[i];
  }

  this.length = length + argumentsLength;
  return this.length;
}

Array.prototype.customPush = customPush;
