'use strict';
/**
 * @param {String} prop_name Property name
 * @param {Boolean} executable Run method
 * @param {*} args Arguments array of the executed function
 * @return {Array}
 */
Array.prototype.pluck = function (prop_name, executable, ...args) {
    let hasWarn = console && console.warn;
    let result = [];
    if (executable) {
        args = args || [];
        this.forEach(item => {
            if (typeof item[prop_name] === 'function') {
                result.push(item[prop_name].apply(item, args));
            }
            else {
                hasWarn && console.warn(`[prototype-pluck] ${prop_name} is not a method of object`, item);
                result.push(undefined);
            }
        });
    }
    else {
        this.forEach(item => result.push(item[prop_name]));
    }
    return result;
};
