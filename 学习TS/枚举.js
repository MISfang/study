var Items;
(function (Items) {
    Items["Foo"] = "Foo";
    Items["Bar"] = "Bar";
    Items["Baz"] = "Baz";
})(Items || (Items = {}));
var demo = Items['Foo'];
console.log('%c 🍒 demo: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', demo);
