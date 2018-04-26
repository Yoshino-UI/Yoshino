"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
var Transition_1 = require("react-transition-group/Transition");
var Icon_1 = require("../Icon");
/**
 * **警告提示**-警告提示，展现需要关注的信息。
 */
var Alert = /** @class */ (function (_super) {
    tslib_1.__extends(Alert, _super);
    function Alert() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            show: true,
        };
        _this.closeAlert = function () {
            _this.setState({
                show: false,
            });
        };
        return _this;
    }
    Alert.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, showIcon = _a.showIcon, type = _a.type, closable = _a.closable, icon = _a.icon, title = _a.title, otherProps = tslib_1.__rest(_a, ["className", "style", "showIcon", "type", "closable", "icon", "title"]);
        var show = this.state.show;
        var preCls = 'yoshino-alert';
        var transitionStyles = {
            exiting: { opacity: 0 },
            exited: { opacity: 0 },
        };
        var duration = 500;
        var defaultStyle = {
            transition: "opacity " + duration + "ms ease-in-out",
            opacity: 1,
        };
        var defaultIcon = {
            success: 'checkmark-circled',
            info: 'information-circled',
            warning: 'android-alert',
            error: 'close-circled',
        };
        var alertCls = (_b = {},
            _b[preCls + "-" + type] = true,
            _b[preCls + "-no-icon"] = !showIcon,
            _b[preCls + "-with-description"] = !!this.props.children,
            _b);
        var clsName = classNames(preCls, alertCls, className);
        return (React.createElement(Transition_1.default, { timeout: duration, in: show, unmountOnExit: true, onExited: function () {
                if (_this.props.onClose) {
                    // 延迟100ms是为了避免阻塞transition unmount
                    setTimeout(function () {
                        _this.props.onClose();
                    }, 100);
                }
            } }, function (state) { return (React.createElement("div", tslib_1.__assign({ className: clsName, style: tslib_1.__assign({}, style, defaultStyle, transitionStyles[state]) }, otherProps),
            React.createElement("span", { style: { display: showIcon ? 'inline-block' : 'none' }, className: preCls + "-icon" }, icon ? icon : (React.createElement(Icon_1.default, { type: defaultIcon[type] }))),
            React.createElement("p", { className: preCls + "-message" }, title),
            _this.props.children ? (React.createElement("p", { className: preCls + "-description" }, _this.props.children)) : null,
            closable ? (React.createElement("span", { className: preCls + "-close", onClick: _this.closeAlert },
                React.createElement(Icon_1.default, { type: 'close' }))) : null)); }));
        var _b;
    };
    Alert.defaultProps = {
        type: 'info',
        showIcon: false,
        closable: false,
    };
    return Alert;
}(react_1.Component));
exports.Alert = Alert;
exports.default = Alert;
//# sourceMappingURL=Alert.js.map