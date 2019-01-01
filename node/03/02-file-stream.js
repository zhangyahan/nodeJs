const fs = require('fs')

var readMeStream = fs.createReadStream(__dirname + "/readMe.txt", )
var writeMeStream = fs.createWriteStream(__dirname + "/writeMe.txt")


// readMeStream.on("data", function (chunk) {
//     console.log("new chunk received")
//     console.log(chunk.toString())
// })

readMeStream.pipe(writeMeStream)
