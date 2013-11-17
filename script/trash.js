//<!--  <script type="text/javascript">
for (i = 0; i < 19999; i++) {
	var ascii = String.fromCharCode(i);
	console.log("---");
	console.log(i);
	console.log(">" + ascii + "<");
}
console.log("BEGIN");
console.log(event.keyCode);
console.log(event.charCode);
console.log(String.fromCharCode());//event.keyCode || event.charCode
var code = event.keyCode;
var ascii = String.fromCharCode(code);
console.log("-----------------------------");
console.log(code);
console.log(ascii);
//</script> -->

var m1 = new Array(0, 9, 2);
var m2 = new Array(1, 1, 4);

var m3 = new Array(new Array(0, 1, 2), new Array(3, 4, 5), new Array(6, 7, 8));

var m4 = new Array(new Array(new Array(0, 1, 2), new Array(3, 4, 5), new Array(
		6, 7, 8)), new Array(new Array(9, 10, 11), new Array(12, 13, 14),
		new Array(15, 16, 17)), new Array(new Array(18, 19, 20), new Array(21,
		22, 23), new Array(24, 25, 26)));
/*
 * var m4 = new Array[[[ 0, 1, 2], [ 3, 4, 5], [ 6, 7, 8]], [[ 9,10,11],
 * [12,13,14], [15,16,17]], [[18,19,20], [21,22,23], [24,25,26]]];
 */

// console.log(printMatrix(m1));
// console.log(printMatrix(m3));

//var matrix1 = new Matrix(3, 3);
//var matrix2 = new zeros([4, 4]);
//var matrix3 = new zeros([4, 4, 4]);

// for (var i = 0; i < matrix3[0].length; i++) {
// print(matrix3[0][i][0].toString());
// }
// print("matrix2");
// printMatrix(matrix2);
// print("matrix3");
// printMatrix(matrix3);