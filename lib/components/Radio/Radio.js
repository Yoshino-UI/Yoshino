"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **单选按钮**-用于从多个条件中筛选单个选项
 */
var Radio = /** @class */ (function (_super) {
    tslib_1.__extends(Radio, _super);
    function Radio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (value) {
            var _a = _this.props, onChange = _a.onChange, disabled = _a.disabled;
            if (disabled) {
                return;
            }
            onChange(value);
        };
        return _this;
    }
    Radio.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, name = _a.name, value = _a.value, checked = _a.checked, disabled = _a.disabled, children = _a.children, onChange = _a.onChange, otherProps = tslib_1.__rest(_a, ["className", "style", "name", "value", "checked", "disabled", "children", "onChange"]);
        var preCls = 'yoshino-radio';
        var clsName = classNames(preCls, (_b = {}, _b[preCls + "-checked"] = checked, _b), className);
        var wrapperCls = classNames(preCls + "-wrapper", (_c = {}, _c[preCls + "-disabled"] = disabled, _c));
        return (React.createElement("span", { className: wrapperCls, onClick: this.onChange.bind(this, value) },
            React.createElement("span", { className: preCls + "-box" },
                React.createElement("span", tslib_1.__assign({ className: clsName, style: style }, otherProps)),
                React.createElement("input", tslib_1.__assign({ type: 'radio', className: preCls + "-input" }, { name: name, value: value, checked: checked }))),
            React.createElement("span", { className: preCls + "-text" }, children)));
        var _b, _c;
    };
    Radio.defaultProps = {
        disabled: false,
    };
    return Radio;
}(react_1.Component));
exports.Radio = Radio;
exports.default = Radio;
//# sourceMappingURL=Radio.js.map