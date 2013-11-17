function returnUndefined(value){
	console.log("D")
	console.log(typeof(value));
	if (typeof(value) == undefined) {
		if (true) {
			if (true) {
				return undefined;
			}
			return undefined;
		}
		return undefined;
	} else {
		return undefined;
	}
}
console.log("NEW FILE")
console.log(typeof(returnUndefined(undefined)));
console.log(typeof(returnUndefined(false)));

var matrix = undefined
var matrix2 = Object()
var matrix3 = "undefined"
console.log("undefined" !== typeof(matrix))
console.log("undefined" !== typeof(matrix2))
console.log("undefined" !== typeof(matrix3))