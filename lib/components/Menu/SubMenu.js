"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
var react_transition_group_1 = require("react-transition-group");
var Icon_1 = require("../Icon");
/**
 * **菜单**-提供导航功能
 */
var SubMenu = /** @class */ (function (_super) {
    tslib_1.__extends(SubMenu, _super);
    function SubMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listHeight = 0;
        _this.onOpenChange = function () {
            var _a = _this.props, onOpenChange = _a.onOpenChange, keyId = _a.keyId, disabled = _a.disabled;
            if (disabled) {
                return;
            }
            onOpenChange(keyId);
        };
        return _this;
    }
    SubMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children, title = _a.title, deep = _a.deep, activeKey = _a.activeKey, onSelect = _a.onSelect, onOpenChange = _a.onOpenChange, openKeys = _a.openKeys, keyId = _a.keyId, disabled = _a.disabled, otherProps = tslib_1.__rest(_a, ["className", "style", "children", "title", "deep", "activeKey", "onSelect", "onOpenChange", "openKeys", "keyId", "disabled"]);
        var preCls = 'yoshino-sub-menu';
        var show = openKeys.indexOf(keyId) !== -1;
        var clsName = classNames(preCls, className, (_b = {},
            _b[preCls + "-hidden"] = !show,
            _b[preCls + "-disabled"] = disabled,
            _b));
        var childrens = React.Children.toArray(children);
        var paddingLeft = deep * 24 + "px";
        return (React.createElement(React.Fragment, null,
            React.createElement("li", tslib_1.__assign({ className: clsName, style: style }, otherProps),
                React.createElement("div", { className: preCls + "-title", style: { paddingLeft: paddingLeft }, onClick: this.onOpenChange },
                    title,
                    React.createElement(Icon_1.default, { type: 'chevron-up', className: preCls + "-icon" })),
                React.createElement(react_transition_group_1.Transition, { in: show, timeout: 300, appear: true, mountOnEnter: true, onEnter: function () {
                        _this.refContainer.style.height = '0px';
                        _this.refContainer.style.display = 'none';
                    }, onEntering: function () {
                        _this.refContainer.style.display = '';
                        var height = _this.refList.clientHeight;
                        _this.refContainer.style.height = height + 1 + "px";
                    }, onEntered: function () {
                        _this.refContainer.style.height = '';
                    }, onExit: function () {
                        var height = _this.refList.clientHeight;
                        _this.refContainer.style.height = height + 1 + "px";
                    }, onExiting: function () {
                        // 可能是react-transition的一个bug，直接执行会导致onExit中的高度设置无效
                        setTimeout(function () {
                            _this.refContainer.style.height = '0px';
                        }, 0);
                    }, onExited: function () {
                        _this.refContainer.style.height = '';
                        _this.refContainer.style.display = 'none';
                    } }, function () {
                    return (React.createElement("div", { className: preCls + "-container", ref: function (v) { return _this.refContainer = v; } },
                        React.createElement("ul", { className: preCls + "-list", ref: function (v) { return _this.refList = v; } }, 
                        // tslint:disable
                        React.Children.map(childrens, function (children) {
                            return React.cloneElement(children, {
                                deep: deep + 1,
                                activeKey: activeKey,
                                openKeys: openKeys,
                                onSelect: onSelect,
                                onOpenChange: onOpenChange,
                            });
                        }))));
                }))));
        var _b;
    };
    SubMenu.defaultProps = {
        disabled: false,
    };
    return SubMenu;
}(react_1.Component));
exports.SubMenu = SubMenu;
exports.default = SubMenu;
//# sourceMappingURL=SubMenu.js.map