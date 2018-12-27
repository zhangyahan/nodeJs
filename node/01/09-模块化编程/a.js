// require是一个方法
// 它的作用就是用来记载模块的
// 在Node中, 模块有三种:
	// 具名的核心模块
	// 用户自己编写的文件模块
	// 相对路径必须加 ./
	// 可以省略后缀名
// 在node中没有全局作用域, 只有模块作用域
// 外部访问不到内部, 内部也访问不到外部
// 既然是模块作用域, 如何让模块与模块之间进行通信(默认都是封闭的)
// 有时候我们加载文件模块的目的, 不是简简单单的执行里面的代码, 而是使用模块中的成员

var foo = "aaa"

console.log("a start");

function add(x, y) {
	// body...
	return x + y
}
require("./b.js")

console.log("a end");


console.log(foo);