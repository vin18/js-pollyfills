function createCustomSetTimeout() {
		let map = {};
		let timerId = 0;
	
		function setTimeoutPolyfill(callback, delay, ...args) {
			timerId++;
			map[timerId] = true;
			const date = Date.now();
			
			function triggerCallback() {
				if (!map[timerId]) return;
				if (Date.now() > date + delay) {
					callback.apply(this, args);
				}	else {
					requestAnimationFrame(triggerCallback);
				}
			}
			
			requestAnimationFrame(triggerCallback);
			return timerId;
		}
	
	function clearTimeoutPolyfill(timerId) {
		if (map[timerId]) delete map[timerId];
	}
	
	return { setTimeoutPolyfill, clearTimeoutPolyfill };
}

const { setTimeoutPolyfill, clearTimeoutPolyfill } = createCustomSetTimeout();

console.log("1")
setTimeout((name) => console.log("Hello", name), 100, "Walter")
console.log("2")
