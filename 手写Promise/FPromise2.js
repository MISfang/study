"use strict";
exports.__esModule = true;
// 先定义三个常量表示状态
var STATUS;
(function (STATUS) {
    STATUS["PENDING"] = "pending";
    STATUS["FULFILLED"] = "fulfilled";
    STATUS["REJECTED"] = "rejected";
})(STATUS || (STATUS = {}));
var FPromise2 = /** @class */ (function () {
    function FPromise2(executor) {
        var _this = this;
        // 内部使用的属性
        this.status = STATUS.PENDING;
        this.value = null;
        this.reason = null;
        // 如果异步、缓存一个一个then的方法，等待执行
        this.onFulfilledCbs = [];
        this.onRjectedCbs = [];
        this.resolve = function (value) {
            var PENDING = STATUS.PENDING, FULFILLED = STATUS.FULFILLED;
            if (_this.status === PENDING) {
                _this.status = FULFILLED;
                _this.value = value;
                while (_this.onFulfilledCbs.length) {
                    _this.onFulfilledCbs.shift()(value);
                }
            }
        };
        this.rejected = function (reason) {
            var PENDING = STATUS.PENDING, REJECTED = STATUS.REJECTED;
            if (_this.status === PENDING) {
                _this.status = REJECTED;
                _this.reason = reason;
                while (_this.onRjectedCbs.length) {
                    _this.onRjectedCbs.shift()(reason);
                }
            }
        };
        try {
            executor(this.resolve, this.rejected);
        }
        catch (error) {
            this.rejected(error);
        }
    }
    // 方法区
    FPromise2.prototype.then = function (onFulfilled, onRjected) {
        var _this = this;
        // 函数初始化
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (value) { return value; };
        onRjected = typeof onRjected === 'function' ? onRjected : function (error) { throw error; };
        var nextFPromise2 = new FPromise2(function (resolve, reject) {
            var PENDING = STATUS.PENDING, FULFILLED = STATUS.FULFILLED, REJECTED = STATUS.REJECTED;
            var _a = _this, status = _a.status, value = _a.value, reason = _a.reason, onFulfilledCbs = _a.onFulfilledCbs, onRjectedCbs = _a.onRjectedCbs, handleNextPromise = _a.handleNextPromise;
            if (status === PENDING) {
                onFulfilledCbs.push(function () {
                    queueMicrotask(function () {
                        try {
                            var x = onFulfilled(value);
                            handleNextPromise(nextFPromise2, x, resolve, reject);
                        }
                        catch (error) {
                            reject(error);
                        }
                    });
                });
                onRjectedCbs.push(function () {
                    try {
                        var x = onRjected(reason);
                        handleNextPromise(nextFPromise2, x, resolve, reject);
                    }
                    catch (error) {
                        reject(error);
                    }
                });
            }
            if (status === FULFILLED) {
                queueMicrotask(function () {
                    try {
                        var x = onFulfilled(value);
                        handleNextPromise(nextFPromise2, x, resolve, reject);
                    }
                    catch (error) {
                        reject(error);
                    }
                });
            }
            if (status === REJECTED) {
                queueMicrotask(function () {
                    try {
                        var x = onRjected(reason);
                        handleNextPromise(nextFPromise2, x, resolve, reject);
                    }
                    catch (error) {
                        reject(error);
                    }
                });
            }
        });
        return nextFPromise2;
    };
    FPromise2.prototype["catch"] = function (onRjected) {
        return this.then(undefined, onRjected);
    };
    FPromise2.prototype["finally"] = function (cb) {
        return this.then(function (value) { return FPromise2.resolve(cb()).then(function () { return value; }); }, function (reason) { return FPromise2.resolve(cb()).then(function () { throw reason; }); });
    };
    // 可直接调用的静态方法
    FPromise2.resolve = function (parameter) {
        if (parameter instanceof FPromise2) {
            return parameter;
        }
        return new FPromise2(function (resolve) {
            resolve(parameter);
        });
    };
    FPromise2.reject = function (reason) {
        return new FPromise2(function (resolve, reject) {
            reject(reason);
        });
    };
    // 特殊静态方法
    FPromise2.all = function (cbs) {
        var res = [];
        return new FPromise2(function (resolve, reject) {
            var _loop_1 = function (i) {
                FPromise2.resolve(cbs[i]).then(function (val) {
                    res[i] = val;
                    if (Object.keys(res).length === cbs.length) {
                        resolve(res);
                    }
                }, reject);
            };
            for (var i = 0; i < cbs.length; i++) {
                _loop_1(i);
            }
        });
    };
    FPromise2.any = function (cbs) {
        var res = [];
        return new FPromise2(function (resolve, reject) {
            var _loop_2 = function (i) {
                FPromise2.resolve(cbs[i]).then(resolve, function (reason) {
                    res[i] = {
                        status: 'rejected',
                        val: reason
                    };
                    if (Object.keys(res).length === cbs.length) {
                        reject({ message: '所有Promise都失败了！', reasons: res });
                    }
                });
            };
            for (var i = 0; i < cbs.length; i++) {
                _loop_2(i);
            }
        });
    };
    FPromise2.allSettled = function (cbs) {
        var res = [];
        return new FPromise2(function (resolve) {
            var _loop_3 = function (i) {
                FPromise2.resolve(cbs[i]).then(function (value) {
                    res[i] = { status: 'fulfilled', val: value };
                    if (Object.keys(res).length === cbs.length)
                        resolve(res);
                }, function (reason) {
                    res[i] = { status: 'rejected', reason: reason };
                    if (Object.keys(res).length === cbs.length)
                        resolve(res);
                });
            };
            for (var i = 0; i < cbs.length; i++) {
                _loop_3(i);
            }
        });
    };
    FPromise2.race = function (cbs) {
        return new FPromise2(function (resolve, reject) {
            for (var _i = 0, cbs_1 = cbs; _i < cbs_1.length; _i++) {
                var cb = cbs_1[_i];
                FPromise2.resolve(cb).then(resolve, reject);
            }
        });
    };
    // 工具方法
    FPromise2.prototype.handleNextPromise = function (nextPromise, x, resolve, reject) {
        if (nextPromise === x) {
            return reject(new TypeError('Promise发生循环引用!'));
        }
        if (x instanceof FPromise2) {
            x.then(resolve, reject);
        }
        else {
            resolve(x);
        }
    };
    return FPromise2;
}());

FPromise2.deferred = function () {
    var result = {};
    result.promise = new FPromise2(function (resolve, reject) {
        result.resolve = resolve;
        result.reject = reject;
    });
    return result;
};
module.exports = FPromise2;
