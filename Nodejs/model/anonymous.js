/**
 * Created by zhangpeng on 2015/11/30.
 */
function execute(someFunction, value) {
    someFunction(value);
}

execute(function(word){ console.log(word) }, "Hello");     //Hello