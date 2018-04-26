"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **分割线**-一般用于分割段落或者内容划分
 */
var Divider = /** @class */ (function (_super) {
    tslib_1.__extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, dashed = _a.dashed, children = _a.children, textAlign = _a.textAlign, otherProps = tslib_1.__rest(_a, ["className", "style", "dashed", "children", "textAlign"]);
        var preCls = 'yoshino-divider';
        var textCls = preCls + "-" + textAlign;
        var dashedCls = (_b = {}, _b[preCls + "-dashed"] = dashed, _b);
        var clsName = classNames(preCls, textCls, dashedCls, className);
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: tslib_1.__assign({}, style) }, otherProps), children ? (React.createElement("p", { className: preCls + "-text" }, children)) : null));
        var _b;
    };
    Divider.defaultProps = {
        dashed: false,
        textAlign: 'center',
    };
    return Divider;
}(react_1.Component));
exports.Divider = Divider;
exports.default = Divider;
//# sourceMappingURL=Divider.js.map