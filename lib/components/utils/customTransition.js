"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var Transition_1 = require("react-transition-group/Transition");
var CustomTransition = /** @class */ (function (_super) {
    tslib_1.__extends(CustomTransition, _super);
    function CustomTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomTransition.prototype.render = function () {
        var _a = this.props, onClose = _a.onClose, show = _a.show, children = _a.children;
        var transitionStyles = {
            exiting: { opacity: 0 },
            exited: { opacity: 0 },
        };
        var duration = 500;
        var defaultStyle = {
            transition: "opacity " + duration + "ms ease-in-out",
            opacity: 1,
        };
        // tslint:disable
        var child = React.Children.only(children);
        return (React.createElement(Transition_1.default, { timeout: duration, in: show, unmountOnExit: true, onExited: function () {
                if (onClose) {
                    // 延迟100ms是为了避免阻塞transition unmount
                    setTimeout(function () {
                        onClose();
                    }, 100);
                }
            } }, function (state) { return React.cloneElement(child, {
            style: tslib_1.__assign({}, child.props.style, defaultStyle, transitionStyles[state]),
        }); }));
    };
    return CustomTransition;
}(react_1.Component));
exports.CustomTransition = CustomTransition;
exports.default = CustomTransition;
//# sourceMappingURL=customTransition.js.map