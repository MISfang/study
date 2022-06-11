"use strict";
exports.__esModule = true;
// 先定义三个常量表示状态
var STATUS;
(function (STATUS) {
    STATUS["PENDING"] = "pending";
    STATUS["FULFILLED"] = "fulfilled";
    STATUS["REJECTED"] = "rejected";
})(STATUS || (STATUS = {}));
var FPromise = /** @class */ (function () {
    function FPromise(executor) {
        this.status = STATUS.PENDING;
        this.value = null;
        this.reason = null;
        this.onFulfilledFns = [];
        this.onRejectedFns = [];
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        }
        catch (error) {
            this.reject(error);
        }
    }
    FPromise.prototype.then = function (onFulfilled, onRejected) {
        var _this = this;
        // 参数默认化一下
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (value) { return value; };
        onRejected = typeof onRejected === 'function' ? onRejected : function (reason) { throw reason; };
        var nextFPromise = new FPromise(function (resolve, reject) {
            if (_this.status === STATUS.FULFILLED) {
                queueMicrotask(function () {
                    try {
                        var res = onFulfilled(_this.value);
                        _this.handleNextPromise(nextFPromise, res, resolve, reject);
                    }
                    catch (error) {
                        reject(error);
                    }
                });
            }
            else if (_this.status === STATUS.REJECTED) {
                queueMicrotask(function () {
                    try {
                        var res = onRejected(_this.reason);
                        _this.handleNextPromise(nextFPromise, res, resolve, reject);
                    }
                    catch (error) {
                        reject(error);
                    }
                });
            }
            else if (_this.status === STATUS.PENDING) {
                _this.onFulfilledFns.push(function () {
                    queueMicrotask(function () {
                        try {
                            var res = onFulfilled(_this.value);
                            _this.handleNextPromise(nextFPromise, res, resolve, reject);
                        }
                        catch (error) {
                            reject(error);
                        }
                    });
                });
                _this.onRejectedFns.push(function () {
                    queueMicrotask(function () {
                        try {
                            var res = onRejected(_this.reason);
                            _this.handleNextPromise(nextFPromise, res, resolve, reject);
                        }
                        catch (error) {
                            reject(error);
                        }
                    });
                });
            }
        });
        return nextFPromise;
    };
    FPromise.prototype["catch"] = function (onRejected) {
        return this.then(undefined, onRejected);
    };
    FPromise.prototype["finally"] = function (cb) {
        return this.then(function (value) { return FPromise.resolve(cb()).then(function () { return value; }); }, function (reason) { return FPromise.resolve(cb()).then(function () { throw reason; }); });
    };
    FPromise.prototype.resolve = function (value) {
        if (this.status === STATUS.PENDING) {
            this.status = STATUS.FULFILLED;
            this.value = value;
            while (this.onFulfilledFns.length) {
                this.onFulfilledFns.shift()(value);
            }
        }
    };
    FPromise.resolve = function (param) {
        if (param instanceof FPromise) {
            return param;
        }
        return new FPromise(function (resolve, reject) {
            resolve(param);
        });
    };
    FPromise.prototype.reject = function (reason) {
        if (this.status === STATUS.PENDING) {
            this.status = STATUS.REJECTED;
            this.reason = reason;
            while (this.onRejectedFns.length) {
                this.onRejectedFns.shift()(this.reason);
            }
        }
    };
    FPromise.reject = function (reason) {
        return new FPromise(function (resolve, reject) {
            reject(reason);
        });
    };
    // 特殊的方法
    FPromise.race = function (promises) {
        new FPromise(function (resolve, reject) {
            for (var _i = 0, promises_1 = promises; _i < promises_1.length; _i++) {
                var item = promises_1[_i];
                FPromise.resolve(item).then(resolve, reject);
            }
        });
    };
    FPromise.all = function (promises) {
        var res = [];
        return new FPromise(function (resolve, reject) {
            promises.forEach(function (item, i) {
                FPromise.resolve(item).then(function (val) {
                    res[i] = val;
                    if (Object.keys(res).length === promises.length) {
                        resolve(res);
                    }
                }, reject);
            });
        });
    };
    FPromise.any = function (promises) {
        var res = [];
        return new FPromise(function (resolve, reject) {
            promises.forEach(function (item, i) {
                FPromise.resolve(item).then(resolve, function (err) {
                    res[i] = { status: 'rejected', val: err };
                    if (Object.keys(res).length === promises.length) {
                        reject({ message: '所以Promise都失败了！', reason: res });
                    }
                });
            });
        });
    };
    FPromise.allSettled = function (promises) {
        var resArr = [];
        return new FPromise(function (resolve) {
            var handle = function (res, index, status) {
                resArr[index] = { status: status, val: res };
                if (Object.keys(resArr).length === promises.length)
                    resolve(resArr);
            };
            promises.forEach(function (item, i) {
                FPromise.resolve(item).then(function (res) {
                    handle(res, i, 'fulfilled');
                }, function (err) {
                    handle(err, i, 'rejected');
                });
            });
        });
    };
    FPromise.prototype.handleNextPromise = function (nextPromise, res, resolve, reject) {
        if (nextPromise === res) {
            return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
        }
        if (res instanceof FPromise) {
            res.then(resolve, reject);
        }
        else {
            resolve(res);
        }
    };
    return FPromise;
}());

module.exports = FPromise;