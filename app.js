const http = require('http')
const path = require('path')
const fs = require('fs')

http.createServer((req, res) => {
  const { url } = req
  if (url === '/file/1') {
    res.end(fs.readFileSync(path.join(__dirname, './阿里云技术面试红宝书.pdf')))
  } else if (url === '/file/2') {
    // 设置content-type为二进制流类型
    res.setHeader('Content-Type', 'application/octet-stream')
    // 设置下载文件名 得编码一下
    res.setHeader('Content-Disposition', 'attachment;filename=' + encodeURIComponent('阿里云技术面试红宝书.pdf'))
    res.end(fs.readFileSync(path.join(__dirname, './阿里云技术面试红宝书.pdf')))
  } else {
    res.end(fs.readFileSync(path.join(__dirname, './index.html')))
  }
}).listen(3000, () => console.log('server is running on http://localhost:3000.'))