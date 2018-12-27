var http = require('http')
var fs = require('fs')

const baseDir = './www'


var server = http.createServer()

server.on('request', function (request, response) {

	var url = request.url
	console.log(request.socket.remoteAddress, request.socket.remotePort)
	console.log(url)

	fs.readFile('./template.html', function (err, data) {
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
			var content = ''
			files.forEach(function (item) {
				// 在 EcmaScript6中的`字符串中, 可以使用${}来引用变量
				content += `
				<tr>
			        <td data-value="a.txt">
			          <a class="icon file" draggable="true" href="file:///home/zyh/Node/node/02/www/a.txt">${item}/</a>
			        </td>
			        <td class="detailsColumn" data-value="16">16 B</td>
			        <td class="detailsColumn" data-value="1545907182">2018/12/27 下午6:39:42</td>
			     </tr>`})
			
			data = data.toString()
			data = data.replace('^_^', content)
			response.end(data)	
		})
		
	})

})

server.listen(9999, function () {
	console.log('Server running port 9999')
})


// str.toString()  转换二进制
// str.replace("string1", "string2") 替换字符串