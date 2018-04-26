"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var classNames = require("classnames");
var React = require("react");
var ReactDOM = require("react-dom");
var renderInRootDom_1 = require("../utils/renderInRootDom");
var react_transition_group_1 = require("react-transition-group");
/**
 * **组件中文名称**-组件描述。
 */
var Pop = /** @class */ (function (_super) {
    tslib_1.__extends(Pop, _super);
    function Pop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animateTimeHandle = []; // 动画timeout句柄
        _this.scale = 0.8;
        _this.popId = "pop_" + new Date().getTime() * Math.random(); // pop唯一id
        _this.state = {
            visible: _this.props.defaultVisible,
        };
        _this.renderPop = function () {
            var _a = _this.props, className = _a.className, children = _a.children, title = _a.title, style = _a.style, placement = _a.placement, overlayStyle = _a.overlayStyle, overlayClassName = _a.overlayClassName, mouseEnterDelay = _a.mouseEnterDelay, mouseLeaveDelay = _a.mouseLeaveDelay, mountOnEnter = _a.mountOnEnter, onChange = _a.onChange, content = _a.content, transitionCls = _a.transitionCls, otherProps = tslib_1.__rest(_a, ["className", "children", "title", "style", "placement", "overlayStyle", "overlayClassName", "mouseEnterDelay", "mouseLeaveDelay", "mountOnEnter", "onChange", "content", "transitionCls"]);
            var preCls = 'yoshino-pop';
            var visible = _this.getVisible();
            return (React.createElement(renderInRootDom_1.RenderInRootDom, { mount: !mountOnEnter },
                React.createElement(react_transition_group_1.CSSTransition, { timeout: 25, classNames: transitionCls, in: visible, onEnter: function () {
                        _this.resetPopPostion();
                    }, mountOnEnter: true, appear: true }, function () {
                    var clsName = classNames(preCls, _this.popId, preCls + "-" + placement, overlayClassName, className);
                    var child = React.Children.only(content);
                    return (React.createElement("div", tslib_1.__assign({ className: clsName, style: tslib_1.__assign({}, overlayStyle) }, otherProps, _this.getConentTriggerAction()), child));
                })));
        };
        _this.resetPopPostion = function () {
            var children = ReactDOM.findDOMNode(_this.refChildren);
            var _a = _this.props, placement = _a.placement, setPopRect = _a.setPopRect;
            var dom = document.getElementsByClassName(_this.popId)[0];
            var domRect = dom.getBoundingClientRect(); // Pop - content -  dom
            var rect = children.getBoundingClientRect(); // Pop - target - dom
            var pageY = window.pageYOffset; // 当前滚动条y轴偏移量
            var pageX = window.pageXOffset; // 当前滚动条x轴偏移量
            var childrenX = pageX + rect.left; // 子元素x
            var childrenY = pageY + rect.top; // 子元素y
            if (setPopRect) {
                var popRect = setPopRect(domRect);
                domRect.width = popRect.width;
                domRect.height = popRect.height;
            }
            // placement所对应的left top
            var config = {
                top: { left: childrenX + rect.width / 2 - domRect.width / 2, top: childrenY - domRect.height },
                left: { left: childrenX - domRect.width, top: childrenY + rect.height / 2 - domRect.height / 2 },
                bottom: { left: childrenX + rect.width / 2 - domRect.width / 2, top: childrenY + rect.height },
                right: { left: childrenX + rect.width, top: childrenY + rect.height / 2 - domRect.height / 2 },
                topLeft: { left: childrenX, top: childrenY - domRect.height },
                topRight: { left: childrenX + rect.width - domRect.width, top: childrenY - domRect.height },
                leftTop: { left: childrenX - domRect.width, top: childrenY },
                leftBottom: { left: childrenX - domRect.width, top: childrenY + rect.height - domRect.height },
                bottomLeft: { left: childrenX, top: childrenY + rect.height },
                bottomRight: { left: childrenX + rect.width - domRect.width, top: childrenY + rect.height },
                rightTop: { left: childrenX + rect.width, top: childrenY },
                rightBottom: { left: childrenX + rect.width, top: childrenY + rect.height - domRect.height },
            };
            dom.style.top = config[placement].top + 'px';
            dom.style.left = config[placement].left + 'px';
        };
        _this.getVisible = function () {
            var visible = _this.props.visible;
            return visible === undefined ? _this.state.visible : visible;
        };
        _this.onChangeTrigger = function (visible) {
            var _a = _this.props, onChange = _a.onChange, mouseEnterDelay = _a.mouseEnterDelay, mouseLeaveDelay = _a.mouseLeaveDelay;
            if (_this.timeoutHandle !== undefined) {
                clearTimeout(_this.timeoutHandle);
            }
            _this.timeoutHandle = window.setTimeout(function () {
                if (onChange) {
                    onChange(visible);
                }
                _this.setState({ visible: visible });
            }, visible ? mouseEnterDelay : mouseLeaveDelay);
        };
        // pop包裹对象trigger表现
        _this.getTargetTriggerAction = function () {
            var show = _this.onChangeTrigger.bind(_this, true);
            var hide = _this.onChangeTrigger.bind(_this, false);
            var action = {
                hover: {
                    onMouseOver: show,
                    onMouseOut: hide,
                },
                focus: {
                    onFocus: show,
                    onBlur: hide,
                },
                click: {
                    onClick: _this.getVisible() ? hide : show,
                },
            };
            return action[_this.props.trigger];
        };
        // pop - content triggert表现
        _this.getConentTriggerAction = function () {
            var show = _this.onChangeTrigger.bind(_this, true);
            var hide = _this.onChangeTrigger.bind(_this, false);
            var action = {
                hover: {
                    onMouseOver: show,
                    onMouseOut: hide,
                },
                focus: {},
                click: {},
            };
            return action[_this.props.trigger];
        };
        return _this;
    }
    Pop.prototype.render = function () {
        var _this = this;
        var children = this.props.children;
        // tslint:disable
        var child = React.Children.only(children);
        return React.cloneElement(child, tslib_1.__assign({ 
            // tslint:disable:no-any
            ref: function (v) { _this.refChildren = v; } }, this.getTargetTriggerAction()), child.props.children, this.renderPop());
    };
    Pop.defaultProps = {
        placement: 'top',
        mouseEnterDelay: 0,
        mouseLeaveDelay: 100,
        trigger: 'hover',
        overlayClassName: '',
        overlayStyle: {},
        defaultVisible: false,
        mountOnEnter: false,
    };
    return Pop;
}(react_1.Component));
exports.Pop = Pop;
exports.default = Pop;
//# sourceMappingURL=Pop.js.map