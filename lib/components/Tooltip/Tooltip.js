"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var classNames = require("classnames");
var React = require("react");
var Pop_1 = require("../Pop");
/**
 * **组件中文名称**-组件描述。
 */
var Tooltip = /** @class */ (function (_super) {
    tslib_1.__extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sacle = 0.8;
        _this.state = {
            visible: _this.props.defaultVisible,
        };
        _this.setPopRect = function (rect) {
            var width = rect.width / _this.sacle;
            var height = rect.height / _this.sacle;
            return { width: width, height: height };
        };
        return _this;
    }
    Tooltip.prototype.render = function () {
        var _a = this.props, children = _a.children, title = _a.title, placement = _a.placement;
        // tslint:disable
        var child = React.Children.only(children);
        var preCls = 'yoshino-tooltip';
        var contentCls = classNames(preCls, preCls + "-" + placement);
        var transitionCls = {
            appear: preCls + "-appear",
            appearActive: preCls + "-active-appear",
            enter: preCls + "-enter",
            enterActive: preCls + "-active-enter",
            enterDone: preCls + "-done-enter",
            exit: preCls + "-exit",
            exitActive: preCls + "-active-exit",
            exitDone: preCls + "-done-exit",
        };
        var content = (React.createElement("div", { className: contentCls },
            React.createElement("div", { className: preCls + "-content" }, title),
            React.createElement("div", { className: preCls + "-arrow" })));
        return (React.createElement(Pop_1.default, tslib_1.__assign({}, this.props, { content: content, setPopRect: this.setPopRect, transitionCls: transitionCls }), child));
    };
    Tooltip.defaultProps = {
        placement: 'top',
        mouseEnterDelay: 0,
        mouseLeaveDelay: 100,
        trigger: 'hover',
        overlayClassName: '',
        overlayStyle: {},
        defaultVisible: false,
        mountOnEnter: false,
    };
    return Tooltip;
}(react_1.Component));
exports.Tooltip = Tooltip;
exports.default = Tooltip;
//# sourceMappingURL=Tooltip.js.map