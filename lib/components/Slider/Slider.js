"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **滑动输入条**-用于拖动选取当前值
 */
var Slider = /** @class */ (function (_super) {
    tslib_1.__extends(Slider, _super);
    function Slider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moving = false; // 当前是否处于拖动状态
        _this.state = {
            value: _this.props.defaultValue,
        };
        _this.getValue = function () {
            return _this.props.value !== undefined ? _this.props.value : _this.state.value;
        };
        _this.getPercent = function () {
            var _a = _this.props, max = _a.max, min = _a.min;
            var value = _this.getValue();
            var range = max - min;
            var percent = (value - min) / range;
            return +percent.toFixed(4);
        };
        _this.onSliderClick = function (e) {
            var _a = _this.props, max = _a.max, min = _a.min;
            var slider = _this.refSlider;
            var sliderRect = slider.getBoundingClientRect();
            var sliderWidth = sliderRect.width; // 滑动条宽度
            var left = e.clientX - sliderRect.x; // 点击位置相对滑动条偏移量
            var percent = +(left / sliderWidth).toFixed(4);
            _this.onChangeTrigger(min + Math.round((max - min) * percent));
            _this.moving = false;
        };
        _this.onSliderMouseDown = function () {
            var _a = _this.props, max = _a.max, min = _a.min;
            var slider = _this.refSlider;
            var sliderRect = slider.getBoundingClientRect();
            var sliderWidth = sliderRect.width; // 滑动条宽度
            var bodyMouseMove = function (e) {
                var left = e.clientX - sliderRect.x; // 点击位置相对滑动条偏移量
                // 当前偏移量处于滑动条外 不进行value刷新
                if (left < 0 || left > sliderWidth) {
                    return;
                }
                var percent = +(left / sliderWidth).toFixed(4);
                _this.onChangeTrigger(min + Math.round((max - min) * percent));
            };
            var bodyMouseUp = function () {
                document.body.removeEventListener('mousemove', bodyMouseMove);
                document.body.removeEventListener('mouseup', bodyMouseUp);
            };
            document.body.addEventListener('mousemove', bodyMouseMove);
            document.body.addEventListener('mouseup', bodyMouseUp);
        };
        _this.onChangeTrigger = function (value) {
            // 节流 - 当value发生变化时才刷新
            if (value === _this.getValue()) {
                return;
            }
            var _a = _this.props, onChange = _a.onChange, disabled = _a.disabled;
            if (disabled) {
                return;
            }
            _this.setState({
                value: value,
            });
            if (onChange) {
                onChange(value);
            }
        };
        return _this;
    }
    Slider.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children, defaultValue = _a.defaultValue, disabled = _a.disabled, onChange = _a.onChange, otherProps = tslib_1.__rest(_a, ["className", "style", "children", "defaultValue", "disabled", "onChange"]);
        var preCls = 'yoshino-slider';
        var clsName = classNames(preCls, (_b = {}, _b[preCls + "-disabled"] = disabled, _b), className);
        var barStyle = { width: this.getPercent() * 100 + "%" };
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style, onClick: this.onSliderClick, onMouseDown: this.onSliderMouseDown }, otherProps, { ref: function (v) {
                if (v) {
                    _this.refSlider = v;
                }
            } }),
            React.createElement("div", { className: preCls + "-process" }),
            React.createElement("div", { className: preCls + "-bar", style: barStyle })));
        var _b;
    };
    Slider.defaultProps = {
        default: 0,
        max: 100,
        min: 0,
        disabled: false,
    };
    return Slider;
}(react_1.Component));
exports.Slider = Slider;
exports.default = Slider;
//# sourceMappingURL=Slider.js.map