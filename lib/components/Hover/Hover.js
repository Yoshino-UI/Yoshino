"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **悬浮特效**-包裹子代添加hover特效
 */
var Hover = /** @class */ (function (_super) {
    tslib_1.__extends(Hover, _super);
    function Hover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hover.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, name = _a.name, otherProps = tslib_1.__rest(_a, ["className", "style", "name"]);
        var preCls = 'yoshino-hover';
        var clsName = classNames(preCls, "yoshino-hvr-" + name, className);
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps), this.props.children));
    };
    Hover.defaultProps = {
        name: 'rectangle-out',
    };
    return Hover;
}(react_1.Component));
exports.Hover = Hover;
exports.default = Hover;
//# sourceMappingURL=Hover.js.map