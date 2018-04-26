"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **单选按钮**-用于从多个条件中筛选单个选项
 */
var CheckboxGroup = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxGroup, _super);
    function CheckboxGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.defaultValue,
        };
        _this.onChange = function (value) {
            _this.onChangeTrigger(value);
        };
        _this.onChangeTrigger = function (value) {
            var _a = _this.props, onChange = _a.onChange, valueProps = _a.value;
            var values = valueProps ? valueProps : _this.state.value;
            if (values.indexOf(value) !== -1) {
                values.splice(values.indexOf(value), 1);
            }
            else {
                values.push(value);
            }
            _this.setState({
                value: values,
            });
            if (onChange) {
                onChange(values);
            }
        };
        return _this;
    }
    CheckboxGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, name = _a.name, value = _a.value, defaultValue = _a.defaultValue, children = _a.children, onChange = _a.onChange, otherProps = tslib_1.__rest(_a, ["className", "style", "name", "value", "defaultValue", "children", "onChange"]);
        var preCls = 'yoshino-radio-group';
        var inValue = value ? value : this.state.value;
        var clsName = classNames(preCls, className);
        var childrens = React.Children.toArray(children).filter(function (item) { return item; });
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps), React.Children.map(childrens, function (ele) {
            return React.cloneElement(ele, {
                name: name,
                checked: inValue.indexOf(ele.props.value) !== -1,
                onChange: _this.onChange,
            });
        })));
    };
    CheckboxGroup.defaultProps = {};
    return CheckboxGroup;
}(react_1.Component));
exports.CheckboxGroup = CheckboxGroup;
exports.default = CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map