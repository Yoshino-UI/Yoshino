"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
var Icon_1 = require("../Icon");
/**
 * **评分**-对目标进行评分操作。
 */
var Rate = /** @class */ (function (_super) {
    tslib_1.__extends(Rate, _super);
    function Rate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            tempValue: _this.props.value,
            value: _this.props.value,
        };
        _this.showCharater = function (count) {
            var arr = [];
            var preCls = 'yoshino-rate';
            for (var index = 0; index < count; index++) {
                var first = index + 1;
                var last = index + (_this.props.half ? 0.5 : 1);
                var value = _this.state.tempValue;
                var hoverCls = preCls + "-hover";
                var firstCls = classNames(preCls + "-first-child", first <= value ? hoverCls : '');
                var lastCls = classNames(preCls + "-last-child", last <= value ? hoverCls : '');
                arr.push((React.createElement("div", { className: preCls + "-item", key: index },
                    React.createElement("div", { className: firstCls, onMouseOver: _this.onMouseOver.bind(_this, first), onClick: _this.onClick.bind(_this, first) },
                        React.createElement("span", null, _this.props.character)),
                    React.createElement("div", { className: lastCls, onMouseOver: _this.onMouseOver.bind(_this, last), onClick: _this.onClick.bind(_this, last) },
                        React.createElement("span", null, _this.props.character)))));
            }
            return arr;
        };
        _this.onMouseOver = function (tempValue) {
            _this.setState({
                tempValue: tempValue,
            });
        };
        _this.onMouseOut = function () {
            var value = _this.state.value;
            _this.setState({
                tempValue: value,
            });
        };
        _this.onClick = function (value) {
            var clear = _this.props.clear && value === _this.state.value;
            var newValue = clear ? 0 : value;
            _this.setState({ value: newValue, tempValue: newValue });
            if (_this.props.onChange) {
                _this.props.onChange(newValue);
            }
        };
        return _this;
    }
    Rate.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, count = _a.count;
        var preCls = 'yoshino-rate';
        var clsName = classNames(preCls, className);
        return (React.createElement("div", { className: clsName, style: style, onMouseOut: this.onMouseOut }, this.showCharater(count)));
    };
    Rate.defaultProps = {
        count: 5,
        value: 0,
        half: false,
        clear: false,
        character: React.createElement(Icon_1.default, { type: 'ios-star' }),
    };
    return Rate;
}(react_1.Component));
exports.Rate = Rate;
exports.default = Rate;
//# sourceMappingURL=Rate.js.map