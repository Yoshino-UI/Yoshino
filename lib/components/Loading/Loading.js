"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
var Icon_1 = require("../Icon");
/**
 * **加载**-表示当前处于加载状态中。
 */
var Loading = /** @class */ (function (_super) {
    tslib_1.__extends(Loading, _super);
    function Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loading.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children, type = _a.type, size = _a.size, text = _a.text, otherProps = tslib_1.__rest(_a, ["className", "style", "children", "type", "size", "text"]);
        var preCls = 'yoshino-loading';
        var iconType = "load-" + type;
        var loadSize = preCls + "-" + size;
        var clsName = classNames(preCls, loadSize, className);
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps),
            React.createElement("span", { className: preCls + "-icon" }, children ? children : React.createElement(Icon_1.default, { type: iconType })),
            text ? (React.createElement("p", { className: preCls + "-text" }, typeof text === 'string' ? text : '加载中')) : null));
    };
    Loading.defaultProps = {
        type: 'a',
        size: 'default',
        text: false,
    };
    return Loading;
}(react_1.Component));
exports.Loading = Loading;
exports.default = Loading;
//# sourceMappingURL=Loading.js.map