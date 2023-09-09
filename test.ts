const testObj = {}
function doTwoWayObj() {
  testObj[testObj['name'] = 'fangyulong'] = 'name'
}
doTwoWayObj()
console.log("%c 🥟 testObj", "font-size:16px;color:#93c0a4", testObj);

enum testEnum {
  Name,
  Name2,
  Name3
}