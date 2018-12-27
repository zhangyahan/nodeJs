// require方法有两个作用:
	// 1. 加载文件模块并执行里面的代码
	// 2. 拿到被加载模块到处的接口对象

// 每个文件模块都提供一个对象: exports
// exports默认是一个空对象
// 如果想让外部访问内部成员
// 需要将成员和方法挂载到exports对象的属性上




var ret = require("./b")
var fs = require("fs")

console.log(ret.foo);
console.log(ret.add(10, 20));
console.log(ret.age);

console.log(ret.readFile("./a.js"));
console.log(fs.readFile("./b.js", function (err, data) {
	// body...
	if (err) {
		console.log("文件读取失败");
	} else {
		console.log(data.toString());
	}
}))

