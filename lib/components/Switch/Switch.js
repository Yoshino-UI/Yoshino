"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **开关选择器**-切换开关状态。
 */
var Switch = /** @class */ (function (_super) {
    tslib_1.__extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            checked: _this.props.checked,
        };
        _this.onClick = function () {
            if (_this.props.disabled) {
                return -1;
            }
            var checked = !_this.state.checked;
            _this.setState({
                checked: checked,
            });
            if (_this.props.onChange) {
                _this.props.onChange(checked);
            }
        };
        return _this;
    }
    Switch.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, size = _a.size, disabled = _a.disabled;
        var checked = this.state.checked;
        var preCls = 'yoshino-switch';
        var switchCls = (_b = {},
            _b[preCls + "-checked"] = checked,
            _b[preCls + "-disabled"] = disabled,
            _b);
        var clsName = classNames(preCls, preCls + "-" + size, switchCls, className);
        return (React.createElement("div", { className: clsName, style: style, onClick: this.onClick }));
        var _b;
    };
    Switch.defaultProps = {
        size: 'default',
        checked: false,
        disabled: false,
    };
    return Switch;
}(react_1.Component));
exports.Switch = Switch;
exports.default = Switch;
//# sourceMappingURL=Switch.js.map