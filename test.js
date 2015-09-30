/// <reference path="./typings/tsd.d.ts" />
var beautyLog = require('./index.js');
console.log('*** start test ***');
console.log('');
console.log('declarative function calls:');
beautyLog.log('beautylog.log(), with normal logText, without logType');
beautyLog.error('beautylog.error(), with normal logText, without logType');
beautyLog.success('beautylog.success(), with normal logText, without logType');
console.log('');
console.log('logType String:');
beautyLog.log('beautylog.log(), with normal logText, without logType');
beautyLog.log('beautylog.log(), with normal logText, with logType "error"', 'error');
beautyLog.log('beautylog.log(), with normal logText, with logType "success"', 'success');
console.log('');
console.log('*** end test ***');