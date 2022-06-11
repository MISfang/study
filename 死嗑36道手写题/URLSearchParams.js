const test = 'https://baidu.com?name=方宇龙&age=20&sex=男'

const handleQuery = (URL) => {
  return Object.fromEntries(new URLSearchParams(URL.slice(URL.indexOf('?'))))
}

console.log('%c 🥑 handleQuery(test): ', 'font-size:20px;background-color: #93C0A4;color:#fff;',
  handleQuery(test).name, handleQuery(test).age
);
