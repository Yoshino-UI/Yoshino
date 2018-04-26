"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **菜单**-提供导航功能
 */
var MenuItem = /** @class */ (function (_super) {
    tslib_1.__extends(MenuItem, _super);
    function MenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSelect = function () {
            var _a = _this.props, onSelect = _a.onSelect, keyId = _a.keyId, disabled = _a.disabled;
            if (disabled) {
                return;
            }
            onSelect(keyId);
        };
        return _this;
    }
    MenuItem.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children, deep = _a.deep, activeKey = _a.activeKey, keyId = _a.keyId, onSelect = _a.onSelect, disabled = _a.disabled, otherProps = tslib_1.__rest(_a, ["className", "style", "children", "deep", "activeKey", "keyId", "onSelect", "disabled"]);
        var preCls = 'yoshino-menu-item';
        var clsName = classNames(preCls, className, (_b = {},
            _b[preCls + "-active"] = activeKey === keyId,
            _b[preCls + "-disabled"] = disabled,
            _b));
        var paddingLeft = deep * 24 + "px";
        return (React.createElement("li", tslib_1.__assign({ className: clsName, style: tslib_1.__assign({ paddingLeft: paddingLeft }, style), onClick: this.onSelect }, otherProps), children));
        var _b;
    };
    MenuItem.defaultProps = {
        active: false,
        disabled: false,
    };
    return MenuItem;
}(react_1.Component));
exports.MenuItem = MenuItem;
exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map