"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
// 根节点渲染HOC
var RenderInRootDom = /** @class */ (function (_super) {
    tslib_1.__extends(RenderInRootDom, _super);
    function RenderInRootDom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderFlag = false; // 判断是否已经渲染过
        _this.renderChild = function () {
            var boxClass = _this.props.boxClass;
            _this.box = document.createElement("div");
            if (boxClass) {
                _this.box.setAttribute('class', boxClass);
            }
            document.body.appendChild(_this.box);
            _this._renderLayer();
        };
        return _this;
    }
    // 在根节点下渲染children
    RenderInRootDom.prototype.componentDidMount = function () {
        var mount = this.props.mount;
        if (mount) {
            this.renderFlag = true;
            this.renderChild();
        }
    };
    // 节点更新
    RenderInRootDom.prototype.componentDidUpdate = function () {
        var mount = this.props.mount;
        if (mount && !this.renderFlag) {
            this.renderFlag = true;
            this.renderChild();
        }
        else {
            this._renderLayer();
        }
    };
    // 组件卸载时移除渲染节点
    RenderInRootDom.prototype.componentWillUnmount = function () {
        if (this.renderFlag) {
            react_dom_1.unmountComponentAtNode(this.box);
            document.body.removeChild(this.box);
        }
    };
    // 渲染方法
    RenderInRootDom.prototype._renderLayer = function () {
        if (this.renderFlag) {
            react_dom_1.render(this.props.children, this.box, this.props.callBack);
        }
    };
    RenderInRootDom.prototype.render = function () {
        return null;
    };
    RenderInRootDom.defaultProps = {
        mount: true,
    };
    return RenderInRootDom;
}(react_1.Component));
exports.RenderInRootDom = RenderInRootDom;
//# sourceMappingURL=renderInRootDom.js.map