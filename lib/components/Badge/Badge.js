"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **徽标**-一般用于消息提醒
 */
var Badge = /** @class */ (function (_super) {
    tslib_1.__extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, count = _a.count, showZero = _a.showZero, dotted = _a.dotted, max = _a.max, children = _a.children, otherProps = tslib_1.__rest(_a, ["className", "style", "count", "showZero", "dotted", "max", "children"]);
        var preCls = 'yoshino-badge';
        var clsName = classNames((_b = {},
            _b[preCls + "-dot"] = !!dotted,
            _b[preCls + "-count"] = !dotted,
            _b[preCls + "-position"] = !!children,
            _b), className);
        return (React.createElement("div", { className: preCls },
            children,
            React.createElement("span", tslib_1.__assign({ className: clsName, style: style }, otherProps), !!dotted ? null : (count >= max ? max + "+" : count))));
        var _b;
    };
    Badge.defaultProps = {
        max: 99,
        showZero: false,
        dotted: false,
    };
    return Badge;
}(react_1.Component));
exports.Badge = Badge;
exports.default = Badge;
//# sourceMappingURL=Badge.js.map