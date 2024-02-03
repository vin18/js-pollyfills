window.myLocalStorage = {
	getItem(key) {
		let result = JSON.parse(window.localStorage.getItem(key));
		
		if (result) {
			if (result.expiryTime <= Date.now()) {
				window.localStorage.removeItem(result.key);
				return null;
			}
			return result.data;
		}
		
		return null;
	},
	
	setItem(key, value, maxAge = 30 * 30 * 60 * 1000) {
		let result = { data: value };
		
		if (maxAge) {
			result.expiryTime = Date.now() + maxAge;
		}
		
		window.localStorage.setItem(key, JSON.stringify(result));
	}
}

window.myLocalStorage.setItem("hello", "world", 1000);
setTimeout(() => {
	console.log(window.myLocalStorage.getItem("hello"));
}, 2000);
