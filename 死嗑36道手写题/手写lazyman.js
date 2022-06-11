var LazyMan = /** @class */ (function () {
    function LazyMan(name) {
        var _this = this;
        this.cbs = [];
        this.name = name;
        queueMicrotask(function () {
            _this.next();
        });
    }
    LazyMan.prototype.next = function () {
        var task = this.cbs.shift();
        task && task();
    };
    LazyMan.prototype.eat = function (food) {
        var _this = this;
        var cb = function () {
            console.log('%c 🥓 `${this.name}吃了${food}`: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', "".concat(_this.name, "\u5403\u4E86").concat(food));
            _this.next();
        };
        this.cbs.push(cb);
        return this;
    };
    LazyMan.prototype.sleep = function (time) {
        var _this = this;
        var cb = function () {
            console.log('%c 🥓 `${this.name}吃了${food}`: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', "".concat(_this.name, "\u5F00\u59CB\u7761\u89C9\uFF0C").concat(time, "\u79D2"));
            setTimeout(function () {
                console.log('%c 🥓 `${this.name}吃了${food}`: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', "".concat(_this.name, "\u7761\u89C9\u7ED3\u675F"));
                _this.next();
            }, time * 1000);
        };
        this.cbs.push(cb);
        return this;
    };
    return LazyMan;
}());
var test = new LazyMan('方宇龙');
test.eat('666').eat('888').sleep(3).eat('999');
