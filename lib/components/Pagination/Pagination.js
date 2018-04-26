"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var React = require("react");
var classNames = require("classnames");
var Icon_1 = require("../Icon");
/**
 * **分页**-用于分割多页内容。
 */
var Pagination = /** @class */ (function (_super) {
    tslib_1.__extends(Pagination, _super);
    function Pagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            current: _this.props.defaultCurrent,
        };
        _this.itemClick = function (current) {
            _this.onChangeTrigger(current);
        };
        _this.onPrevious = function () {
            var current = _this.props.current ? _this.props.current : _this.state.current;
            if (current === 1) {
                return;
            }
            current = current - 1;
            _this.onChangeTrigger(current);
        };
        _this.onNext = function () {
            var current = _this.props.current ? _this.props.current : _this.state.current;
            var page = _this.getPageSum();
            if (current === page) {
                return;
            }
            current = current + 1;
            _this.onChangeTrigger(current);
        };
        _this.onChangeTrigger = function (current) {
            var _a = _this.props, onChange = _a.onChange, pageSize = _a.pageSize;
            if (!_this.props.current) {
                _this.setState({
                    current: current,
                });
            }
            if (onChange) {
                onChange(current, pageSize);
            }
        };
        _this.onNextMore = function () {
            var current = _this.props.current ? _this.props.current : _this.state.current;
            var pageSum = _this.getPageSum();
            var max = _this.props.max;
            var pageNo = current + max - 2;
            var jump = pageNo < pageSum ? pageNo : pageSum;
            if (!_this.props.current) {
                _this.setState({
                    current: jump,
                });
            }
            _this.onChangeTrigger(jump);
        };
        _this.onPreviousMore = function () {
            var current = _this.props.current ? _this.props.current : _this.state.current;
            var max = _this.props.max;
            var pageNo = current - max - 2;
            var jump = pageNo >= 1 ? pageNo : 1;
            if (!_this.props.current) {
                _this.setState({
                    current: jump,
                });
            }
            _this.onChangeTrigger(jump);
        };
        _this.getPageSum = function () {
            var _a = _this.props, total = _a.total, pageSize = _a.pageSize;
            return Math.ceil(total / pageSize);
        };
        return _this;
    }
    Pagination.prototype.renderPageList = function () {
        var _this = this;
        var preCls = 'yoshino-pagination';
        var _a = this.props, current = _a.current, max = _a.max;
        var currentPage = current ? current : this.state.current;
        var page = this.getPageSum();
        var list = [];
        var key = 0;
        var paginationItem = function (className, pageNo) {
            return (React.createElement("div", { className: className, onClick: _this.itemClick.bind(_this, pageNo), key: key++ },
                React.createElement("span", null, pageNo)));
        };
        // itemClsName  -  主要用于判断item-active
        var clsName = function (counter) {
            return classNames(preCls + "-item", (_a = {},
                _a[preCls + "-item-active"] = currentPage === counter,
                _a));
            var _a;
        };
        if (page <= max + 2) {
            for (var counter = 1; counter <= page; counter++) {
                list.push(paginationItem(clsName(counter), counter));
            }
        }
        else {
            var counter = 0; // 计数器  记录已渲染的item数
            var header = [];
            var footer = [];
            if (currentPage >= max - 1) {
                header.push(paginationItem(clsName(1), 1));
                counter++;
                header.push(React.createElement("div", { className: preCls + "-item " + preCls + "-item-more", onClick: this.onPreviousMore, key: key++ },
                    React.createElement("span", null,
                        React.createElement(Icon_1.default, { type: 'more' }))));
            }
            if (currentPage < page - max + 2) {
                footer.push(React.createElement("div", { className: preCls + "-item " + preCls + "-item-more", onClick: this.onNextMore, key: key++ },
                    React.createElement("span", null,
                        React.createElement(Icon_1.default, { type: 'more' }))));
                footer.push(paginationItem(clsName(page), page));
                counter++;
            }
            if (currentPage < max - 1) {
                for (var i = 1; i <= max - 1; i++) {
                    list.push(paginationItem(clsName(i), i));
                }
            }
            else if (currentPage >= page - max + 2) {
                for (var i = page - max + 2; i <= page; i++) {
                    list.push(paginationItem(clsName(i), i));
                }
            }
            else {
                var half = Math.floor((max - counter) / 2);
                for (var i = currentPage - half; i <= currentPage + half; i++) {
                    list.push(paginationItem(clsName(i), i));
                }
            }
            list = header.concat(list, footer);
        }
        return list;
    };
    Pagination.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, onChange = _a.onChange, total = _a.total, pageSize = _a.pageSize, next = _a.next, previous = _a.previous, otherProps = tslib_1.__rest(_a, ["className", "style", "onChange", "total", "pageSize", "next", "previous"]);
        var page = this.getPageSum();
        var current = this.props.current ? this.props.current : this.state.current;
        var preCls = 'yoshino-pagination';
        var clsName = classNames(preCls, className);
        return (React.createElement("div", tslib_1.__assign({ className: clsName, style: style }, otherProps),
            React.createElement("div", { className: preCls + "-header " + preCls + "-item", onClick: this.onPrevious, style: current > 1 ? {} : { cursor: 'not-allowed' } },
                React.createElement("span", null, previous ? previous : React.createElement(Icon_1.default, { type: 'ios-arrow-back' }))),
            this.renderPageList(),
            React.createElement("div", { className: preCls + "-footer " + preCls + "-item", onClick: this.onNext, style: current < page ? {} : { cursor: 'not-allowed' } },
                React.createElement("span", null, next ? next : React.createElement(Icon_1.default, { type: 'ios-arrow-forward' })))));
    };
    Pagination.defaultProps = {
        defaultCurrent: 1,
        pageSize: 10,
        max: 5,
    };
    return Pagination;
}(react_1.Component));
exports.Pagination = Pagination;
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map