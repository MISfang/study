"use strict";
exports.__esModule = true;
var throttle = function (fn, interval) {
    var lastTime = 0;
    var _throttle = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var nowTime = new Date().getTime();
        var remainTime = interval - (nowTime - lastTime);
        if (remainTime <= 0) {
            fn.apply(this, args);
            lastTime = nowTime;
        }
    };
    return _throttle;
};
exports["default"] = throttle;
