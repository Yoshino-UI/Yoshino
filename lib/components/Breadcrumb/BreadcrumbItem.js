"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **组件中文名称**-组件描述。
 */
var BreadcrumbItem = /** @class */ (function (_super) {
    tslib_1.__extends(BreadcrumbItem, _super);
    function BreadcrumbItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreadcrumbItem.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, otherProps = tslib_1.__rest(_a, ["className", "style"]);
        var preCls = 'yoshino-breadcrumb-item';
        var clsName = classNames(preCls, className);
        return (React.createElement("span", tslib_1.__assign({ className: clsName, style: style }, otherProps), this.props.children));
    };
    return BreadcrumbItem;
}(react_1.Component));
exports.BreadcrumbItem = BreadcrumbItem;
exports.default = BreadcrumbItem;
//# sourceMappingURL=BreadcrumbItem.js.map