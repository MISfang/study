"use strict";
exports.__esModule = true;
exports.debounce = void 0;
var debounce = function (fn, delay, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timer = null;
    var isInvoke = false;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        timer && clearTimeout(timer);
        if (!isInvoke && immediate) {
            fn.apply(this, args);
            isInvoke = true;
        }
        else {
            timer = setTimeout(function () {
                fn.apply(_this, args);
                isInvoke = false;
            }, delay);
        }
    };
};
exports.debounce = debounce;
