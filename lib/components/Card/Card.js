"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **卡片**-用于展示一些块状信息
 */
var Card = /** @class */ (function (_super) {
    tslib_1.__extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, title = _a.title, extra = _a.extra, border = _a.border, shadow = _a.shadow, otherProps = tslib_1.__rest(_a, ["className", "style", "title", "extra", "border", "shadow"]);
        var preCls = 'yoshino-card';
        var cardCls = (_b = {},
            _b[preCls + "-border"] = border,
            _b[preCls + "-shadow"] = shadow,
            _b);
        var clsName = classNames(preCls, cardCls, className);
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps),
            React.createElement("div", { className: preCls + "-head" },
                React.createElement("div", { className: preCls + "-title" }, title),
                React.createElement("div", { className: preCls + "-extra" }, extra)),
            React.createElement("div", { className: preCls + "-body" }, this.props.children)));
        var _b;
    };
    Card.defaultProps = {};
    return Card;
}(react_1.Component));
exports.Card = Card;
exports.default = Card;
//# sourceMappingURL=Card.js.map