var testObj = {};

function doTwoWayObj() {
    testObj[testObj['name'] = 'fangyulong'] = 'name';
}
doTwoWayObj();
console.log("%c 🥟 testObj", "font-size:16px;color:#93c0a4", testObj);

var testEnum;
(function(testEnum) {
    testEnum[testEnum["Name"] = 0] = "Name";
    testEnum[testEnum["Name2"] = 1] = "Name2";
    testEnum[testEnum["Name3"] = 2] = "Name3";
})(testEnum || (testEnum = {}));
console.log("%c 🍕 testEnum", "font-size:16px;color:#6ec1c2", testEnum);
