"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **进度条**-展示当前操作流程进度。
 */
var Progress = /** @class */ (function (_super) {
    tslib_1.__extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, percent = _a.percent, barColor = _a.barColor, bgColor = _a.bgColor, otherProps = tslib_1.__rest(_a, ["className", "style", "percent", "barColor", "bgColor"]);
        var preCls = 'yoshino-progress';
        var clsName = classNames(preCls, className);
        var bgColorStyle = bgColor ? { backgroundColor: bgColor } : {};
        var barColorStyle = barColor ? { backgroundColor: barColor } : {};
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: tslib_1.__assign({}, style, bgColorStyle) }, otherProps),
            React.createElement("div", { className: preCls + "-bar", style: tslib_1.__assign({ width: percent + "%" }, barColorStyle) })));
    };
    Progress.defaultProps = {
        percent: 0,
    };
    return Progress;
}(react_1.Component));
exports.Progress = Progress;
exports.default = Progress;
//# sourceMappingURL=Progress.js.map