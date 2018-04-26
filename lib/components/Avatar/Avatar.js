"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
var Icon_1 = require("../Icon");
/**
 * **头像**-用于表示用户头像信息
 */
var Avatar = /** @class */ (function (_super) {
    tslib_1.__extends(Avatar, _super);
    function Avatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Avatar.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, size = _a.size, shape = _a.shape, icon = _a.icon, src = _a.src, otherProps = tslib_1.__rest(_a, ["className", "style", "size", "shape", "icon", "src"]);
        var preCls = 'yoshino-avatar';
        var clsName = classNames(preCls, preCls + "-" + size, preCls + "-" + shape, className);
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps), !src ? (React.createElement(Icon_1.default, { type: icon })) : (React.createElement("img", { src: src }))));
    };
    Avatar.defaultProps = {
        size: 'default',
        shape: 'circle',
        icon: 'person',
    };
    return Avatar;
}(react_1.Component));
exports.Avatar = Avatar;
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map