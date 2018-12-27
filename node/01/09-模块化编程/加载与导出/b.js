var foo = "bbb";

exports.foo = "hello"
exports.add = function (x, y) {
	// body...
	return x + y
}

var age = 18

exports.age = age

function add(x, y) {
	// body...
	return x - y
}

exports.readFile = function (path, callback) {
	// body...
	console.log("文件的路径", path);
}