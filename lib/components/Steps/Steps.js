"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **步骤条**-流程状态
 */
var Steps = /** @class */ (function (_super) {
    tslib_1.__extends(Steps, _super);
    function Steps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Steps.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children, direction = _a.direction, size = _a.size, current = _a.current, otherProps = tslib_1.__rest(_a, ["className", "style", "children", "direction", "size", "current"]);
        var preCls = 'yoshino-steps';
        var clsName = classNames(preCls, preCls + "-" + direction, className);
        var childrens = React.Children.toArray(children).filter(function (item) { return item; });
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps), React.Children.map(childrens, function (ele, index) {
            return React.cloneElement(ele, {
                direction: direction,
                value: index,
                size: size,
                current: current,
            });
        })));
    };
    Steps.defaultProps = {
        direction: 'horizontal',
        size: 'default',
        current: 0,
    };
    return Steps;
}(react_1.Component));
exports.Steps = Steps;
exports.default = Steps;
//# sourceMappingURL=Steps.js.map