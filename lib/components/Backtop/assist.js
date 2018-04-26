"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backTop = function (durations, callback) {
    var dom;
    if (document.documentElement.scrollTop) {
        dom = document.documentElement;
    }
    else {
        dom = document.body;
    }
    var scrollTop = dom.scrollTop;
    // tslint:disable
    for (var i = 60; i >= 0; i--) {
        setTimeout((function (i) {
            return function () {
                dom.scrollTop = scrollTop * i / 60;
                if (i === 0 && typeof callback === 'function') {
                    callback();
                }
            };
        })(i), durations * (1 - i / 60));
    }
};
//# sourceMappingURL=assist.js.map