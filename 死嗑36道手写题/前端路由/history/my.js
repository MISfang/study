const app = document.getElementById('app');

const alist = document.querySelectorAll('.box > div');
const comList = {};
Array.from(alist).slice(0, -2).forEach(({ innerHTML }) => {
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
  let historyName = window.location.pathname.slice(-1);
  historyName = historyName === 'l' ? 'A' : historyName;
  let com = comList[historyName];
  if (!com) {
    com = comList['404'];
  }
  // 把上次路由组件销毁
  container.innerHTML = '';
  container.appendChild(com);
};

const linkList = document.querySelectorAll('.box > div');
linkList.forEach(item => {
  item.addEventListener('click', () => {
    const link = item.getAttribute('link');
    window.history.pushState(null, `page ${link}`, link);
    // 路由变化更新
    onStateChange();
  });
});

FRoute(app);
const onStateChange = () => FRoute(app);









// const FRoute = (container) => {
//   const routeName = window.location.hash.slice(1);
//   let com = comList[routeName || 'D'];
//   if (!com) {
//     com = comList['404'];
//   }
//   // 先把上一个组件去掉
//   container.innerHTML = '';
//   container.appendChild(com);
// };

// FRoute(app);
// window.addEventListener('hashchange', () => {
//   FRoute(app);
// });