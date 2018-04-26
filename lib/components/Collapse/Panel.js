"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
var Icon_1 = require("../Icon");
var Transition_1 = require("react-transition-group/Transition");
/**
 * **面板**-折叠版的子项
 */
var Panel = /** @class */ (function (_super) {
    tslib_1.__extends(Panel, _super);
    function Panel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function () {
            var _a = _this.props, onChange = _a.onChange, disabled = _a.disabled, keyid = _a.keyid;
            if (disabled) {
                return;
            }
            onChange(keyid);
        };
        return _this;
    }
    Panel.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, onChange = _a.onChange, title = _a.title, active = _a.active, children = _a.children, disabled = _a.disabled, otherProps = tslib_1.__rest(_a, ["className", "style", "onChange", "title", "active", "children", "disabled"]);
        var preCls = 'yoshino-panel';
        var clsName = classNames(preCls, (_b = {},
            _b[preCls + "-active"] = active,
            _b[preCls + "-disabled"] = disabled,
            _b), className);
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps, { onClick: this.onChange }),
            React.createElement("div", { className: preCls + "-title" },
                React.createElement(Icon_1.default, { type: 'ios-arrow-right', className: preCls + "-icon" }),
                title),
            React.createElement(Transition_1.default, { timeout: 300, in: active, mountOnEnter: true, onEnter: function () {
                    _this.refContainer.style.height = '0px';
                    _this.refContainer.style.display = 'none';
                }, onEntering: function () {
                    _this.refContainer.style.display = 'block';
                    var height = _this.refInner.clientHeight;
                    _this.refContainer.style.height = height + 1 + "px";
                }, onEntered: function () {
                    var height = _this.refInner.clientHeight;
                    _this.refContainer.style.height = height + 1 + "px";
                }, onExiting: function () {
                    _this.refContainer.style.height = '0px';
                }, onExited: function () {
                    _this.refContainer.style.height = '0px';
                    _this.refContainer.style.display = 'none';
                } }, function (state) {
                var contentCls = classNames(preCls + "-content", (_a = {}, _a[preCls + "-content-close"] = state === 'exited', _a));
                return (React.createElement("div", { className: contentCls, ref: function (v) {
                        if (v) {
                            _this.refContainer = v;
                        }
                    } },
                    React.createElement("div", { className: preCls + "-inner", ref: function (v) {
                            if (v) {
                                _this.refInner = v;
                            }
                        } }, children)));
                var _a;
            })));
        var _b;
    };
    Panel.defaultProps = {
        disabled: false,
    };
    return Panel;
}(react_1.Component));
exports.Panel = Panel;
exports.default = Panel;
//# sourceMappingURL=Panel.js.map