#! /usr/bin/env node
 // 为了方便测试
console.log("学你妈的前端，后悔了！");

const program = require("commander");

program.parse(process.argv);
program.name("fang").usage(`<command> [option]`).version("1.0.0");