function myBind(context, ...args1) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a function`);
  }

  return function(...args2) {
    return this.apply(context, [...args1, ...args2]);
  }
}
