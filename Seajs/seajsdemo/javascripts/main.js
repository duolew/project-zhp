seajs.config({
    // 只定base目录，类似java中的src目录
    base: './javascripts/',
    // 目录长的可以声明别名, 这点十分人性化
    alias: {
    },
    // 下面配置自己理解
    charset: 'utf-8',
    timeout: 20000,
    debug: 0
});


define(function(require, exports, module) {
    // 如果没有配置base, 需要用 require('./javascripts/increment')
    var inc = require('increment').increment;
    
    var a = 1;
    console.log(inc(a));
})