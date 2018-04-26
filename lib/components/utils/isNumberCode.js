"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNumberCode = function (code) {
    // 判断数字键盘keycode
    if (code >= 96 && code <= 105) {
        return true;
    }
    // 判断主键盘keycode
    if (code >= 48 && code <= 57) {
        return true;
    }
    return false;
};
exports.default = isNumberCode;
//# sourceMappingURL=isNumberCode.js.map