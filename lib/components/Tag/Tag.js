"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
var Icon_1 = require("../Icon");
var customTransition_1 = require("../utils/customTransition");
var colorFormat_1 = require("../utils/colorFormat");
/**
 * **标签**-一般用于描述或者分类
 */
var Tag = /** @class */ (function (_super) {
    tslib_1.__extends(Tag, _super);
    function Tag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            show: true,
        };
        _this.closeTag = function () {
            _this.setState({
                show: false,
            });
        };
        _this.getGeekStyle = function () {
            var geekStyle = {};
            if (_this.props.color) {
                var rgb = tslib_1.__assign({}, colorFormat_1.getRGB(_this.props.color));
                var r = rgb.r;
                var g = rgb.g;
                var b = rgb.b;
                geekStyle = {
                    color: "rgb(" + r + ", " + g + ", " + b + ")",
                    background: "rgba(" + r + ", " + g + ", " + b + ", 0.3)",
                    borderColor: "rgba(" + r + ", " + g + ", " + b + ", 0.5)",
                };
            }
            return geekStyle;
        };
        return _this;
    }
    Tag.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children, closeable = _a.closeable, color = _a.color, onClose = _a.onClose, mode = _a.mode, otherProps = tslib_1.__rest(_a, ["className", "style", "children", "closeable", "color", "onClose", "mode"]);
        var show = this.state.show;
        var preCls = 'yoshino-tag';
        var clsName = classNames(preCls, (_b = {}, _b[preCls + "-color"] = !!color && mode !== 'geek', _b), className);
        var modeStyle = {
            custom: {
                backgroundColor: color,
            },
            geek: this.getGeekStyle(),
        };
        var tagStyle = color ? modeStyle[mode] : {};
        return (React.createElement(customTransition_1.default, { show: show, onClose: onClose },
            React.createElement("span", tslib_1.__assign({ className: clsName, style: tslib_1.__assign({}, tagStyle, style) }, otherProps),
                children,
                closeable ? (React.createElement(Icon_1.default, { type: 'close-round', className: preCls + "-close", onClick: this.closeTag })) : null)));
        var _b;
    };
    Tag.defaultProps = {
        mode: 'custom',
    };
    return Tag;
}(react_1.Component));
exports.Tag = Tag;
exports.default = Tag;
//# sourceMappingURL=Tag.js.map