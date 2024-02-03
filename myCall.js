function myCall(scope, ...args) {
  scope.fn = this;
  return scope.fn(...args);
}

Function.prototype.myCall = myCall;
