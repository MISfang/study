const app = document.getElementById('app');

const alist = document.querySelectorAll('a');
const comList = {};
Array.from(alist).forEach(({ innerHTML }) => {
  const com = document.createElement('div');
  com.innerHTML = `${innerHTML}组件`;
  com.className = 'component';
  comList[innerHTML] = com;
});

// 单独设置一个404页面
const Com404 = document.createElement('div');
Com404.innerHTML = '路径不存在！';
Com404.className = 'component404';
comList['404'] = Com404;


const FRoute = (container) => {
  const routeName = window.location.hash.slice(1);
  let com = comList[routeName || 'D'];
  if (!com) {
    com = comList['404'];
  }
  // 先把上一个组件去掉
  container.innerHTML = '';
  container.appendChild(com);
};

FRoute(app);
window.addEventListener('hashchange', () => {
  FRoute(app);
});