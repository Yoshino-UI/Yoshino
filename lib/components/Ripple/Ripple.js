"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
var rippleJs_1 = require("./rippleJs");
/**
 * **波纹特效**-为子代添加点击水波扩散的特效。
 */
var Ripple = /** @class */ (function (_super) {
    tslib_1.__extends(Ripple, _super);
    function Ripple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ripple.prototype.componentDidMount = function () {
        var _a = this.props, color = _a.color, opacity = _a.opacity, diameter = _a.diameter;
        if (this.targetRipple !== null) {
            this.rippleHandle = rippleJs_1.default({ dom: this.targetRipple, color: color, opacity: opacity, diameter: diameter });
        }
    };
    Ripple.prototype.componentWillUnmount = function () {
        // ripple事件销毁
        this.rippleHandle();
    };
    Ripple.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children, otherProps = tslib_1.__rest(_a, ["className", "style", "children"]);
        var preCls = 'yoshino-ripple';
        var clsName = classNames(preCls, className);
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps, { ref: function (dom) { return _this.targetRipple = dom; } }), this.props.children));
    };
    Ripple.defaultProps = {
        color: '#4285f4',
        opacity: 0.3,
        diameter: 10,
    };
    return Ripple;
}(react_1.Component));
exports.Ripple = Ripple;
exports.default = Ripple;
//# sourceMappingURL=Ripple.js.map