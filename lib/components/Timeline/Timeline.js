"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
/**
 * **时间轴**-用于展示不同时间节点上的信息。
 */
var Timeline = /** @class */ (function (_super) {
    tslib_1.__extends(Timeline, _super);
    function Timeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Timeline.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children, iconColor = _a.iconColor, iconLine = _a.iconLine, iconType = _a.iconType, lineColor = _a.lineColor, lineType = _a.lineType, iconWidth = _a.iconWidth, lineWidth = _a.lineWidth, otherProps = tslib_1.__rest(_a, ["className", "style", "children", "iconColor", "iconLine", "iconType", "lineColor", "lineType", "iconWidth", "lineWidth"]);
        var preCls = 'yoshino-timeline';
        var childrens = React.Children.toArray(children).filter(function (item) { return item; });
        var clsName = classNames(preCls, className);
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps), React.Children.map(childrens, function (ele) {
            return React.cloneElement(ele, {
                parentIcon: {
                    width: iconWidth,
                    color: iconColor,
                    line: iconLine,
                    type: iconType,
                },
                parentLine: {
                    color: lineColor,
                    width: lineWidth,
                    type: lineType,
                },
            });
        })));
    };
    Timeline.defaultProps = {
        iconColor: '#f63',
        iconLine: 2,
        iconType: 'solid',
        lineColor: '#e8e8e8',
        lineType: 'solid',
        iconWidth: 15,
        lineWidth: 2,
    };
    return Timeline;
}(react_1.Component));
exports.Timeline = Timeline;
exports.default = Timeline;
//# sourceMappingURL=Timeline.js.map