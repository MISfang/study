const http = require('http')
const Url = require('url')

http.createServer((req, res) => {
  const { url, method, headers } = req
  console.log('%c 🧀 url,method,header: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', url, method,);
  console.log('%c 🥦 handleQuery(url): ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', handleQuery(url));
  console.log('%c 🍣 Url.parse(url): ', 'font-size:20px;background-color: #93C0A4;color:#fff;', Url.parse(url).path);
  res.end('测试')
}).listen(3000, () => {
  console.log('%c 🥦 127.0.0.1:3000: ', 'font-size:20px;background-color: #42b983;color:#fff;', '127.0.0.1:3000');
})

const handleQuery = (str) => {
  return Object.fromEntries(new URLSearchParams(str.slice(str.indexOf('?'))))
}