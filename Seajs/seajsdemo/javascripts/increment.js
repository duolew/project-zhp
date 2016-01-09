define(function  (require, exports, module) {
    var add = require('math').sum;
    exports.increment = function  (val) {
        return add(val, 1)
    }
})