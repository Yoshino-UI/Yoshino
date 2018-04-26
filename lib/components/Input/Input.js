"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **输入框**-用于获取用书通过键盘输入的内容
 */
var Input = /** @class */ (function (_super) {
    tslib_1.__extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.value ? _this.props.value : '',
        };
        _this.onEnter = function (e) {
            var onEnter = _this.props.onEnter;
            if (e.keyCode === 13 && onEnter) {
                onEnter();
            }
        };
        return _this;
    }
    Input.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, size = _a.size, header = _a.header, footer = _a.footer, headerStyle = _a.headerStyle, footerStyle = _a.footerStyle, onEnter = _a.onEnter, otherProps = tslib_1.__rest(_a, ["className", "style", "size", "header", "footer", "headerStyle", "footerStyle", "onEnter"]);
        var preCls = 'yoshino-input';
        var clsName = classNames(preCls + "-wrapper", preCls + "-" + size, className);
        return (React.createElement("span", { className: clsName, style: style },
            header ? (React.createElement("span", { className: preCls + "-header", style: headerStyle }, header)) : null,
            React.createElement("input", tslib_1.__assign({ type: 'text', className: preCls }, otherProps, { onKeyDown: this.onEnter })),
            footer ? (React.createElement("span", { className: preCls + "-footer", style: footerStyle }, footer)) : null));
    };
    Input.defaultProps = {
        size: 'default',
    };
    return Input;
}(react_1.Component));
exports.Input = Input;
exports.default = Input;
//# sourceMappingURL=Input.js.map