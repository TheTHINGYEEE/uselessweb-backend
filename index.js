const fs = require("fs")
const express = require("express")
const path = require('path')
const mime = require('mime')

const app = express()
const port = 8000

const vidExtension = ".mp4"
var videos = []

for(videoName of fs.readdirSync("./videos")) {
    if(!(videoName.includes(vidExtension))) continue;
    if(isNaN(videoName.replace(vidExtension, ""))) continue;
    videos.push(videoName)
}

console.log(videos.length)

app.get('/video', (req, res) => {
    var randomElement = videos[Math.floor(Math.random() * videos.length)];

    
    var filePath = `videos/${randomElement}`
    var mimeType = mime.getType(vidExtension.replace('.', ""))

    console.log("Opened connection.", randomElement)

    // const fileSize = fs.statSync(filePath).size
    // const head = {  
    //     'Content-Length': fileSize,
    //     'Content-Type': mimeType
    // }
    // res.writeHead(200, head)
    // fs.createReadStream(filePath).pipe(res)

    
})


app.listen(port, () => {
    console.log(`Now listening to port ${port}`)
})