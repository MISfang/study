const test = {};
const name = '方宇龙';
Object.defineProperty(test, 'name', {
  get: function () {
    console.log('get');
  },
  set: function (newvalue) {
    console.log('set');
    name = newvalue;
  }
});