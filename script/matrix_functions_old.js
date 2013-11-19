function Matrix(linha, coluna, profundidade) {
	return "";
}

function printMatrix(matrix){
	var tree = false;
	var two = false;
	if (undefined == matrix) {
		//"undefined" == typeof(matrix)
		return undefined;
	}
	var t = matrix[0][0][0];
	if (t == undefined) {
		two = true;
	}
	if (tree) {
		printMatrixNxMxZ(matrix);
	} else if(two){
		printMatrixNxM(matrix);
	} else {
		print("WADAFUCK MAN");
	}
}

function printMatrixNxMxZ(matrix) {
	var res = new String('');
	var tamX = matrix.length;
	var tamY = matrix[0].length;
	var tamZ = matrix[0][0].length;
	for (var i = 0; i < tamX; i++) {
		if (i == 0) {
			res = res + "[";
		}
		for (var j = 0; j < tamY; j++) {
			if (j == 0) {
				if (i == 0) {
					res = res + "[";
				} else {
					res = res + "  [";
				}
			}
			for (var k = 0; k < tamZ; k++) {
				if (k == 0) {
					res = res + "[";
				}

				var elem = matrix[i][j][k].toString();

				if (elem < 10) {
					if (k == 0) {
						res = res + "  " + elem;
					} else {
						res = res + ",   " + elem;
					}
				} else if (elem < 100) {
					if (k == 0) {
						res = res + " " + elem;
					} else {
						res = res + ",  " + elem;
					}
				} else if (elem < 1000) {
					if (k == 0) {
						res = res + elem;
					} else {
						res = res + ", " + elem;
					}
				} else {
					if (k == 0) {
						res = res + elem;
					} else {
						res = res + ", " + elem;
					}
				}

				var stm = k == tamZ - 1;
				var stm2 = j == tamY - 1;
				var stm3 = i == tamX - 1;
				if (stm) {
					res = res + "]";
				}
				if (stm2 && stm) {
					if (stm3) {
						res = res + "]";
					} else {
						res = res + "]\n";
					}
				}
				if (stm2 && stm && stm3) {
					res = res + "]";
				}
			}
		}
	}
	print(res);
	return undefined;
}

function printMatrixNxM(matrix) {
	var res = new String('');
	var tamX = matrix.length;
	var tamY = matrix[0].length;
	for (var i = 0; i < tamX; i++) {
		if (i == 0) {
			res = res + "[";
		}
		for (var j = 0; j < tamY; j++) {
			if (j == 0) {
				if (i == 0) {
					res = res + "[";
				} else {
					res = res + "  [";
				}
			}

			var elem = matrix[i][j].toString();

			if (elem < 10) {
				if (j == 0) {
					res = res + "  " + elem;
				} else {
					res = res + ",   " + elem;
				}
			} else if (elem < 100) {
				if (j == 0) {
					res = res + " " + elem;
				} else {
					res = res + ",  " + elem;
				}
			} else if (elem < 1000) {
				if (j == 0) {
					res = res + elem;
				} else {
					res = res + ", " + elem;
				}
			} else {
				if (j == 0) {
					res = res + elem;
				} else {
					res = res + ", " + elem;
				}
			}

			var stm = j == tamY - 1;
			var stm2 = i == tamX - 1;
			if (stm) {
				if (stm2) {
					res = res + "]";
				} else {
					res = res + "]\n";
				}
			}
			// Fechamento
			if (stm && stm2) {
				res = res + "]";
			}
		}
	}
	print(res);
	return undefined;
}

function zeros(listArgs) {
	if(listArgs.length == 0){
		return undefined;
	}
	if (listArgs.length == 3) {
		if((listArgs[0] == 0) || (listArgs[1] == 0) || (listArgs[2] == 0)){
			return undefined;
		}
		return zeros3D(listArgs[0], listArgs[1], listArgs[2]);
	} else if (listArgs.length == 2) {
		if((listArgs[0] == 0) || (listArgs[1] == 0)){
			return undefined;
		}
		return zeros2D(listArgs[0], listArgs[1]);
	} else if (listArgs.length == 1) {
		if(listArgs[0] == 0){
			return undefined;
		}
		return zeros1D(listArgs[0]);
	} else {
		return undefined;
	}
}
function zeros1D(linha) {
	var array = new Array(linha);
	if (linha == 0) {
		print("Cant Have That 1D Matrix");
		return undefined;
	} else {
		for (var i = 0; i < linha; i++) {
			array[i] = 0;
		}
	}
	return array;
}

function zeros2D(linha, coluna) {
	var array = new Array(linha);
	if (linha == 0 || coluna == 0) {
		print("Cant Have That 2D Matrix");
		return undefined;
	} else {
		for (var i = 0; i < linha; ++i) {
			array[i] = new Array(coluna);
			for (var j = 0; j < array[0].length; j++) {
				array[i][j] = 0;
			}
		}
	}
	return array;
}

function zeros3D(linha, coluna, profundidade) {
	var array = new Array(linha);
	if (linha == 0 || coluna == 0) {
		print("Cant Have That 3D Matrix");
		return undefined;
	} else {
		if (profundidade == 0) {
			return zeros2D(linha, coluna);
		}
		for (var i = 0; i < linha; ++i) {
			array[i] = new Array(coluna);
			for (var j = 0; j < coluna; j++) {
				array[i][j] = new Array(profundidade);
				for (var k = 0; k < profundidade; k++) {
					array[i][j][k] = 0;
				}
			}
		}
	}
	return array;
}

function matrixSum(m1, m2) {
	var x = m1.length;
	var x = m2.length;
	var res = new Array();

}
function translation(x, y, z, t) {
	var x = '';
}
function print(string) {
	console.log(string);
}
function matrixIsundefined() {
		//throw new matrixIsundefined();
	   this.message = "Undefined object does not represent matrix";
	   this.name = "MatrixIsUndefined";
	}

for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		print(i.toString() + " " + j.toString());
		printMatrix(zeros([i, j]));
	}
}