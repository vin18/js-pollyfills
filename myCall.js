function myCall(scope, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a function`);
  }
  
  scope.fn = this;
  return scope.fn(...args);
}

Function.prototype.myCall = myCall;
