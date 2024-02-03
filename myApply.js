function myApply(context, args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a function`);
  }

  if (!Array.isArray(args)) {
    throw new TypeError(`${args} is not an array`);
  }

  context.fn = this;
  return context.fn(...args);
}

Function.prototype.myApply = myApply;
