"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
var Icon_1 = require("../Icon");
/**
 * **按钮**-用于点击操作。
 */
var Button = /** @class */ (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, disabled = _a.disabled, type = _a.type, shape = _a.shape, size = _a.size, icon = _a.icon, ghost = _a.ghost, children = _a.children, tail = _a.tail, loading = _a.loading, otherProps = tslib_1.__rest(_a, ["className", "style", "disabled", "type", "shape", "size", "icon", "ghost", "children", "tail", "loading"]);
        var preCls = 'yoshino-button';
        var btnCls = (_b = {},
            _b[preCls + "-" + type] = type && !disabled && !loading || type === 'dashed',
            _b[preCls + "-size-" + size] = size && !disabled && !loading,
            _b[preCls + "-ghost"] = ghost && !disabled && !loading,
            _b[preCls + "-shape-" + shape] = shape === 'circle',
            _b);
        var ban = loading || disabled;
        var iconDiv = icon ? (React.createElement("span", { className: preCls + "-icon", style: shape !== 'circle' ? tail ? { marginLeft: '5px' } : { marginRight: '5px' } : {} }, loading ? React.createElement(Icon_1.default, { className: preCls + "-load", type: 'load-c' }) :
            react_1.isValidElement(icon) ? icon : React.createElement(Icon_1.default, { type: icon }))) : null;
        var clsName = classNames(preCls, btnCls, className);
        return (React.createElement("button", tslib_1.__assign({ className: clsName, style: style, disabled: ban }, otherProps),
            tail ? null : iconDiv,
            children ? React.createElement("span", null, loading ? 'Loading..' : children) : null,
            tail ? iconDiv : null));
        var _b;
    };
    Button.defaultProps = {
        ghost: false,
        loading: false,
        tail: false,
    };
    return Button;
}(react_1.Component));
exports.Button = Button;
exports.default = Button;
//# sourceMappingURL=Button.js.map