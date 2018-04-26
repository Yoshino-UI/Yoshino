"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **组件中文名称**-组件描述。
 */
var TimelineItem = /** @class */ (function (_super) {
    tslib_1.__extends(TimelineItem, _super);
    function TimelineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimelineItem.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, time = _a.time, iconColor = _a.iconColor, iconLine = _a.iconLine, iconType = _a.iconType, lineColor = _a.lineColor, lineType = _a.lineType, icon = _a.icon, parentIcon = _a.parentIcon, parentLine = _a.parentLine, children = _a.children, otherProps = tslib_1.__rest(_a, ["className", "style", "time", "iconColor", "iconLine", "iconType", "lineColor", "lineType", "icon", "parentIcon", "parentLine", "children"]);
        var preCls = 'yoshino-timeline-item';
        var lineStyle = {
            borderLeft: "\n      " + (lineType ? lineType : parentLine.type) + "\n      " + parentLine.width + "px\n      " + (lineColor ? lineColor : parentLine.color),
            left: parentIcon.width / 2 - parentLine.width / 2 + "px",
        };
        var iconStyle = {
            border: "\n      " + (iconType ? iconType : parentIcon.type) + "\n      " + (iconLine ? iconLine : parentIcon.line) + "px\n      " + (iconColor ? iconColor : parentIcon.color),
            width: parentIcon.width + "px",
            height: parentIcon.width + "px",
            borderRadius: '50%',
        };
        var contentStyle = {
            left: parentIcon.width * 2 + "px",
        };
        var clsName = classNames(preCls, className);
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps),
            React.createElement("div", { className: preCls + "-line", style: lineStyle }),
            React.createElement("div", { className: preCls + "-icon" }, icon ? icon : React.createElement("div", { style: iconStyle })),
            React.createElement("div", { className: preCls + "-content", style: contentStyle },
                time ? React.createElement("div", { className: preCls + "-time" }, time) : null,
                children ? React.createElement("div", { className: preCls + "-des" }, children) : null)));
    };
    return TimelineItem;
}(react_1.Component));
exports.TimelineItem = TimelineItem;
exports.default = TimelineItem;
//# sourceMappingURL=TimelineItem.js.map