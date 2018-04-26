"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
var Icon_1 = require("../Icon");
/**
 * **组件中文名称**-组件描述。
 */
var StepsItem = /** @class */ (function (_super) {
    tslib_1.__extends(StepsItem, _super);
    function StepsItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepsItem.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, title = _a.title, direction = _a.direction, value = _a.value, size = _a.size, current = _a.current, status = _a.status, icon = _a.icon, children = _a.children, otherProps = tslib_1.__rest(_a, ["className", "style", "title", "direction", "value", "size", "current", "status", "icon", "children"]);
        var preCls = 'yoshino-steps-item';
        var clsName = classNames(preCls, preCls + "-" + size, (_b = {},
            _b[preCls + "-process"] = current === value,
            _b[preCls + "-wait"] = value > current,
            _b[preCls + "-error"] = status === 'error',
            _b), className);
        var stepIcon = {
            error: React.createElement(Icon_1.default, { type: 'close-round' }),
            finished: React.createElement(Icon_1.default, { type: 'checkmark-round' }),
        };
        var innerStatus = status ? status : value < current ? 'finished' : undefined;
        var text = value + 1;
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps),
            React.createElement("div", { className: preCls + "-icon" },
                direction === 'vertical' ? React.createElement("div", { className: preCls + "-line-vertical" }) : null,
                icon ? icon : innerStatus ? stepIcon[innerStatus] : text),
            React.createElement("div", { className: preCls + "-content" },
                React.createElement("span", { className: preCls + "-title" }, title),
                children ? (React.createElement("p", { className: preCls + "-description" }, children)) : null)));
        var _b;
    };
    StepsItem.defaultProps = {
        error: false,
    };
    return StepsItem;
}(react_1.Component));
exports.StepsItem = StepsItem;
exports.default = StepsItem;
//# sourceMappingURL=StepsItem.js.map