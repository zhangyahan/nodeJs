var http = require('http')
var fs = require('fs')
var template = require('art-template')
var path = require('path')

const baseDir = './www'


var server = http.createServer()

server.on('request', function (request, response) {

	var url = request.url
	// 获取请求的用户IP和端口
	console.log(request.socket.remoteAddress, request.socket.remotePort)
	console.log(url)

	fs.readFile('./template-Apache.html', function (err, data) {
		if (err) {
			return response.end('404 Not Found.')
		}
		// 1.如何得到目录列表中的文件名和目录名分
		//     fs.readdir
		// 2.如何将文件名和目录名替换到template.html中
		//     2.1 在template中需要替换的位置预留一个特殊的标记
		//     2.2 根据files生成需要的html内容
		fs.readdir('./www', function (err, files) {
			if (err) {
				return response.end('目录不存在')
			}

			var isfile = []
			files.forEach(function (item) {
				var stat = fs.lstatSync(path.join(baseDir, item))
				var dic = {}
				dic[stat.isFile()] = item
				isfile.push(dic)
				dic = {}
			})
			// 这里只需要模板引擎解析替换data中的模板字符串就可以了
			// 数据就是files
			// 然后到template.html文件中编写你的模板语法就可以了
			var htmlStr = template.render(data.toString(), {
				title: "哈哈哈",
				files: isfile,
			})

			response.end(htmlStr)	
		})
		
	})

})

server.listen(9999, function () {
	console.log('Server running port 9999')
})




// str.toString()  转换二进制
// str.replace("string1", "string2") 替换字符串