"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **菜单**-提供导航功能
 */
var Menu = /** @class */ (function (_super) {
    tslib_1.__extends(Menu, _super);
    function Menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeKey: _this.props.defaultActiveKey,
            openKeys: _this.props.defaultOpenKeys,
        };
        _this.getActiveKey = function () {
            var activeKey = _this.props.activeKey;
            return activeKey === undefined ? _this.state.activeKey : activeKey;
        };
        _this.onSelect = function (key) {
            _this.onSelectTrigger(key);
        };
        _this.onSelectTrigger = function (activeKey) {
            var onSelect = _this.props.onSelect;
            if (onSelect) {
                onSelect(activeKey);
            }
            _this.setState({
                activeKey: activeKey,
            });
        };
        _this.getOpenKeys = function () {
            var openKeys = _this.props.openKeys;
            return openKeys === undefined ? _this.state.openKeys : openKeys;
        };
        _this.onOpenChange = function (openKey) {
            var openKeys = _this.getOpenKeys();
            if (openKeys.indexOf(openKey) !== -1) {
                openKeys.splice(openKeys.indexOf(openKey), 1);
            }
            else {
                openKeys.push(openKey);
            }
            _this.onOpenChangeTrigger(openKeys);
        };
        _this.onOpenChangeTrigger = function (openKeys) {
            var onOpenChange = _this.props.onOpenChange;
            if (onOpenChange) {
                onOpenChange(openKeys);
            }
            _this.setState({
                openKeys: openKeys,
            });
        };
        return _this;
    }
    Menu.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children, onSelect = _a.onSelect, otherProps = tslib_1.__rest(_a, ["className", "style", "children", "onSelect"]);
        var preCls = 'yoshino-menu';
        var clsName = classNames(preCls, className);
        var childrens = React.Children.toArray(children);
        var activeKey = this.getActiveKey();
        var openKeys = this.getOpenKeys();
        return (React.createElement("ul", tslib_1.__assign({ className: clsName, style: style }, otherProps), 
        // tslint:disable
        React.Children.map(childrens, function (child) {
            return React.cloneElement(child, {
                deep: 1,
                activeKey: activeKey,
                openKeys: openKeys,
                onSelect: _this.onSelect,
                onOpenChange: _this.onOpenChange,
            });
        })));
    };
    Menu.defaultProps = {
        defaultActiveKey: '',
        defaultOpenKeys: [],
        accordion: false,
    };
    return Menu;
}(react_1.Component));
exports.Menu = Menu;
exports.default = Menu;
//# sourceMappingURL=Menu.js.map