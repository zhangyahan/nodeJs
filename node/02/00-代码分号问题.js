function say() {
	// body...
	console.log('hello world')
}

say()

// ;(function () {
// 	// body...
// 	console.log('hello')
// })()

// ;['苹果', '香蕉'].forEach(function (item) {
// 	// body...
// 	console.log(item)
// })


// 当采用了无分号的代码风格的时候, 只需要注意一下三种情况
//     当一行代码是以:
//         (
//         [
var foo = `bar`
console.log(foo)
//         ` 是EcmaScript6中新增的一种字符串包裹方式, 叫做"模板字符串", 它支持换行和非常方便的拼接变量
//         开头的时候, 则在前面补上一个分号用以避免一些语法解析错误
//         