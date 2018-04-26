"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **面包屑导航**-显示当前页面路径
 */
var Breadcrumb = /** @class */ (function (_super) {
    tslib_1.__extends(Breadcrumb, _super);
    function Breadcrumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Breadcrumb.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, _b = _a.separator, separator = _b === void 0 ? '/' : _b, otherProps = tslib_1.__rest(_a, ["className", "style", "separator"]);
        var preCls = 'yoshino-breadcrumb';
        var clsName = classNames(preCls, className);
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps), React.Children.map(this.props.children, function (child) {
            return (React.createElement("span", null,
                child,
                React.createElement("span", { className: classNames(preCls + "-separator") }, separator)));
        })));
    };
    Breadcrumb.defaultProps = {
        separator: '/',
    };
    return Breadcrumb;
}(react_1.Component));
exports.Breadcrumb = Breadcrumb;
exports.default = Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map