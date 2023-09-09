"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test = /** @class */ (function () {
    function test() {
    }
    test.fuck = function () {
        console.log("%c Line:3 🍫 name", "font-size:16px;color:#e41a6a", 'name');
    };
    test.prototype.fuck2 = function () {
        console.log("%c Line:3 🍫 name", "font-size:16px;color:#e41a6a", 'name');
    };
    return test;
}());
var demo = new test();
test.name;
