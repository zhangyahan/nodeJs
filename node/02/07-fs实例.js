var fs = require('fs')
var path = require('path')

const baseDir = './www'

fs.readdir('./www', function (err, files) {
    var isfile = []
    if (err) {
        console.log('目录读取失败')
    } else {
        files.forEach(function (item) {
            var stat = fs.lstatSync(path.join(baseDir, item))
            var dic = {}
            dic[stat.isFile()] = item
            isfile.push(dic)
            dic = {}
        })
    }
    console.log(isfile)
})
