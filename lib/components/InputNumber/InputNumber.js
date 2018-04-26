"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
var Icon_1 = require("../Icon");
/**
 * **数字输入框**-仅用于数字输入。该组件为了保证输入值为纯数字，state放在内部维护，value只是一个初始值，要获得最新值请通过onChange，在外部改变value不会影响视图刷新。
 */
var InputNumber = /** @class */ (function (_super) {
    tslib_1.__extends(InputNumber, _super);
    function InputNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.value,
        };
        _this.onChange = function (e) {
            var _a = _this.props, onChange = _a.onChange, max = _a.max, min = _a.min;
            var value = e.target.value;
            if (value === '' || value === '-') {
                _this.setState({
                    value: min,
                });
                if (onChange) {
                    onChange(min);
                }
            }
            if (!!/\d/.exec(value) && +value <= max && +value >= min) {
                _this.setState({
                    value: +value,
                });
                if (onChange) {
                    onChange(+e.target.value);
                }
            }
        };
        _this.onPlus = function () {
            var _a = _this.props, onChange = _a.onChange, max = _a.max;
            var value = _this.state.value + _this.props.step;
            if (value <= max) {
                _this.setState({
                    value: value,
                });
                if (onChange) {
                    onChange(value);
                }
            }
        };
        _this.onMinus = function () {
            var _a = _this.props, onChange = _a.onChange, min = _a.min;
            var value = _this.state.value - _this.props.step;
            if (value >= min) {
                _this.setState({
                    value: value,
                });
                if (onChange) {
                    onChange(value);
                }
            }
        };
        return _this;
    }
    InputNumber.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, size = _a.size, onChange = _a.onChange, value = _a.value, otherProps = tslib_1.__rest(_a, ["className", "style", "size", "onChange", "value"]);
        var preCls = 'yoshino-input-number';
        var clsName = classNames(preCls, preCls + "-" + size, className);
        return (React.createElement("div", { className: preCls + "-wrapper" },
            React.createElement("input", tslib_1.__assign({ className: clsName, style: style, value: this.state.value, onChange: this.onChange }, otherProps)),
            React.createElement("div", { className: preCls + "-control" },
                React.createElement("div", { onClick: this.onPlus },
                    React.createElement(Icon_1.default, { type: 'plus', style: { fontSize: '12px' } })),
                React.createElement("div", { onClick: this.onMinus },
                    React.createElement(Icon_1.default, { type: 'minus', style: { fontSize: '12px' } })))));
    };
    InputNumber.defaultProps = {
        size: 'default',
        min: 0,
        max: 10,
        value: 0,
        step: 1,
    };
    return InputNumber;
}(react_1.Component));
exports.InputNumber = InputNumber;
exports.default = InputNumber;
//# sourceMappingURL=InputNumber.js.map