"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **图标**-展示对应的矢量化图标。
 */
var Icon = /** @class */ (function (_super) {
    tslib_1.__extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, type = _a.type, otherProps = tslib_1.__rest(_a, ["className", "style", "type"]);
        var preCls = 'yoshino-icon';
        var clsName = classNames(preCls, preCls + "-" + type, className);
        return (React.createElement("i", tslib_1.__assign({ className: clsName, style: style }, otherProps)));
    };
    return Icon;
}(react_1.Component));
exports.Icon = Icon;
exports.default = Icon;
//# sourceMappingURL=Icon.js.map