/**
 * Created by duole on 2015/11/10.
 */
var client = function () {
    var engine = {
        //呈现引擎
        ie: 0,
        gecko: 0,
        webkit: 0,
        khtml: 0,
        opera: 0,
        //具体版本号
        ver: null
    };
    return {                     //因为这是在function(){}内，而不是一个对象{}内，所以必须return出去才能取到
        engine: engine
    };
}();
var EventUtil = {
    getEvent: function (event) {
        return event ? event : window.event;
    },
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    getWheelDelta: function (event) {
        if (event.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    }
};
(function(){
    function handleMouseWheel(event) {
        event = EventUtil.getEvent(event);
        var delta = EventUtil.getWheelDelta(event);
        alert(delta);
    }
    EventUtil.addHandler(document, "mousewheel", handleMouseWheel);
    EventUtil.addHandler(document, "DOMMouseScroll", handleMouseWheel);
})();