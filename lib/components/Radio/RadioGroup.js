"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **单选按钮**-用于从多个条件中筛选单个选项
 */
var RadioGroup = /** @class */ (function (_super) {
    tslib_1.__extends(RadioGroup, _super);
    function RadioGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.defaultValue,
        };
        _this.onChange = function (value) {
            _this.onChangeTrigger(value);
        };
        _this.onChangeTrigger = function (value) {
            var onChange = _this.props.onChange;
            _this.setState({
                value: value,
            });
            if (onChange) {
                onChange(value);
            }
        };
        return _this;
    }
    RadioGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, name = _a.name, value = _a.value, defaultValue = _a.defaultValue, children = _a.children, onChange = _a.onChange, otherProps = tslib_1.__rest(_a, ["className", "style", "name", "value", "defaultValue", "children", "onChange"]);
        var preCls = 'yoshino-radio-group';
        var inValue = value !== undefined ? value : this.state.value;
        var clsName = classNames(preCls, className);
        var childrens = React.Children.toArray(children).filter(function (item) { return item; });
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps), React.Children.map(childrens, function (ele) {
            return React.cloneElement(ele, {
                name: name,
                checked: ele.props.value === inValue,
                onChange: _this.onChange,
            });
        })));
    };
    RadioGroup.defaultProps = {};
    return RadioGroup;
}(react_1.Component));
exports.RadioGroup = RadioGroup;
exports.default = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map