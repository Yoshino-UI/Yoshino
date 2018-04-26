"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **菜单**-提供导航功能
 */
var MenuItemGroup = /** @class */ (function (_super) {
    tslib_1.__extends(MenuItemGroup, _super);
    function MenuItemGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItemGroup.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children, deep = _a.deep, title = _a.title, activeKey = _a.activeKey, onSelect = _a.onSelect, onOpenChange = _a.onOpenChange, otherProps = tslib_1.__rest(_a, ["className", "style", "children", "deep", "title", "activeKey", "onSelect", "onOpenChange"]);
        var preCls = 'yoshino-menu-item-group';
        var clsName = classNames(preCls, className);
        var childrens = React.Children.toArray(children);
        var paddingLeft = deep * 24 + "px";
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps),
            React.createElement("div", { className: preCls + "-title", style: { paddingLeft: paddingLeft } }, title),
            React.createElement("ul", { className: preCls + "-list" }, 
            // tslint:disable
            React.Children.map(childrens, function (child) {
                return React.cloneElement(child, {
                    deep: deep + 1,
                    activeKey: activeKey,
                    onSelect: onSelect,
                });
            }))));
    };
    MenuItemGroup.defaultProps = {};
    return MenuItemGroup;
}(react_1.Component));
exports.MenuItemGroup = MenuItemGroup;
exports.default = MenuItemGroup;
//# sourceMappingURL=MenuItemGroup.js.map