"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **折叠板**-可以放缩需要展示的内容区域。
 */
var Collapse = /** @class */ (function (_super) {
    tslib_1.__extends(Collapse, _super);
    function Collapse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeKey: _this.props.defaultActiveKey,
        };
        _this.getActiveKey = function () {
            var activeKey = _this.props.activeKey;
            return activeKey === undefined ? _this.state.activeKey : activeKey;
        };
        _this.onChange = function (key) {
            var activeKey = _this.getActiveKey();
            var accordion = _this.props.accordion;
            if (activeKey.indexOf(key) !== -1) {
                activeKey.splice(activeKey.indexOf(key), 1);
            }
            else {
                if (accordion) {
                    activeKey[0] = key;
                }
                else {
                    activeKey.push(key);
                }
            }
            _this.onChangeTrigger(activeKey);
        };
        _this.onChangeTrigger = function (activeKey) {
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(activeKey);
            }
            _this.setState({
                activeKey: activeKey,
            });
        };
        return _this;
    }
    Collapse.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children, onChange = _a.onChange, otherProps = tslib_1.__rest(_a, ["className", "style", "children", "onChange"]);
        var preCls = 'yoshino-collapse';
        var clsName = classNames(preCls, className);
        var childrens = React.Children.toArray(children);
        var activeKey = this.getActiveKey();
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps), React.Children.map(childrens, function (item, index) {
            return React.cloneElement(item, {
                active: activeKey.indexOf(item.props.keyid) !== -1,
                onChange: _this.onChange,
                key: index,
            });
        })));
    };
    Collapse.defaultProps = {
        defaultActiveKey: [],
        accordion: false,
    };
    return Collapse;
}(react_1.Component));
exports.Collapse = Collapse;
exports.default = Collapse;
//# sourceMappingURL=Collapse.js.map