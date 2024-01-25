function customPop() {
  if (this == undefined || this === null) {
    throw new TypeError(`
      Array.prototype.customPop called on null or undefined. 
    `);
  }

  const length = this.length;
  if (length === 0) return undefined;

  const lastElement = this[length - 1];
  delete this[length - 1];
  this.length--;
  
  return lastElement;
}

Array.prototype.customPop = customPop;
