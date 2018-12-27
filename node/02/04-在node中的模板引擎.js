// art-template模板引擎
// 使用npm进行安装


// 在node中使用art-template模板引擎

// 1. 安装npm install art-template
// 2. 在需要使用的文件模块中使用require加载art-template
// 3. 查文档, 使用模板引擎的API

var fs = require('fs')
var template = require('art-template')


fs.readFile('./04-tpl.html', function (err, data) {
	if (err) {
		return console.log('读取文件失败')
	}

	var ret = template.render(data.toString(), {
		name: "Jack",
		age: 18,
		province: "河北邯郸",
		hobbies: [
			"唱歌",
			"打游戏",
			"写代码",
		]
	})

	console.log(ret)
})


