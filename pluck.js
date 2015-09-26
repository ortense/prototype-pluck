'use strict';
/**
 * @param {String} prop_name Property name
 * @param {Boolean} executable Run method
 * @param {*} args Arguments array of the executed function
 * @return {Array}
 */
Array.prototype.pluck = function (prop_name, executable) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
    }

    var hasWarn = console && console.warn;
    var result = [];
    if (executable) {
        args = args || [];
        this.forEach(function (item) {
            if (typeof item[prop_name] === 'function') {
                result.push(item[prop_name].apply(item, args));
            } else {
                hasWarn && console.warn('[prototype-pluck] ' + prop_name + ' is not a method of object', item);
                result.push(undefined);
            }
        });
    } else {
        this.forEach(function (item) {
            return result.push(item[prop_name]);
        });
    }
    return result;
};
//# sourceMappingURL=pluck.js.map