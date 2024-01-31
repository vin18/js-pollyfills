function customLastIndexOf(searchElement) {
  if (this === undefined || this === null) {
    throw new TypeError(`Array.prototype.customLastIndexOf called on null or undefined`);
  }

  const fromIndex = arguments[1] || this.length - 1;

  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === searchElement) return i;
  }

  return -1;
}

Array.prototype.customLastIndexOf = customLastIndexOf;
