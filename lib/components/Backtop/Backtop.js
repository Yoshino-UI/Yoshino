"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
var Icon_1 = require("../Icon");
var renderInRootDom_1 = require("../utils/renderInRootDom");
var assist_1 = require("./assist");
/**
 * **返回顶部**-返回页面顶部的操作按钮。
 */
var Backtop = /** @class */ (function (_super) {
    tslib_1.__extends(Backtop, _super);
    function Backtop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            show: false,
        };
        _this.scrollListener = function () {
            var height = _this.props.height ? _this.props.height : 800;
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            var show = top >= height;
            _this.setState({
                show: show,
            });
        };
        return _this;
    }
    Backtop.prototype.componentDidMount = function () {
        window.addEventListener('scroll', this.scrollListener, false);
        window.addEventListener('resize', this.scrollListener, false);
    };
    Backtop.prototype.componentWillUnMount = function () {
        window.removeEventListener('scroll', this.scrollListener, false);
        window.removeEventListener('resize', this.scrollListener, false);
    };
    Backtop.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children, bottom = _a.bottom, right = _a.right, duration = _a.duration, onBackTop = _a.onBackTop, otherProps = tslib_1.__rest(_a, ["className", "style", "children", "bottom", "right", "duration", "onBackTop"]);
        var preCls = 'yoshino-backtop';
        var clsName = classNames(preCls, className);
        var backtopStyle = {
            right: right + "px",
            bottom: bottom + "px",
        };
        return (React.createElement(renderInRootDom_1.RenderInRootDom, { boxClass: 'backtop' },
            React.createElement("div", tslib_1.__assign({ className: clsName, style: tslib_1.__assign({}, style, backtopStyle) }, otherProps, { onClick: assist_1.backTop.bind(this, duration, onBackTop) }), this.state.show ? children ? children : (React.createElement("div", { className: preCls + "-default" },
                React.createElement(Icon_1.default, { type: 'chevron-up' }))) : null)));
    };
    Backtop.defaultProps = {
        height: 800,
        bottom: 50,
        right: 50,
        duration: 500,
    };
    return Backtop;
}(react_1.Component));
exports.default = Backtop;
//# sourceMappingURL=Backtop.js.map