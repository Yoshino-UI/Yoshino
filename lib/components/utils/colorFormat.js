"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 颜色rgb格式转16进制
 * @param color rgb  例如:rgb(12, 1, 1) -> #0d00ff;
 */
function rgb2hex(color) {
    var rgb = color.split(',');
    var r = parseInt(rgb[0].split('(')[1], 10);
    var g = parseInt(rgb[1], 10);
    var b = parseInt(rgb[2].split(')')[0], 10);
    // tslint:disable
    var hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return hex;
}
exports.rgb2hex = rgb2hex;
/**
 * 颜色16进制格式转rgb
 * @param color hex 例如 #0d00ff  -> {r: 12, g: 1, b: 1};
 */
function hex2rgb(color) {
    var r = parseInt(color.substr(1, 2), 16);
    var g = parseInt(color.substr(3, 2), 16);
    var b = parseInt(color.substr(5, 2), 16);
    return {
        r: r, g: g, b: b,
    };
}
exports.hex2rgb = hex2rgb;
/**
 * 获取rgb
 * @param color rgb or hex
 */
function getRGB(color) {
    var rgbObj;
    if (color.indexOf('#') !== -1) {
        rgbObj = hex2rgb(color);
    }
    else {
        var rgb = color.split(',');
        var r = parseInt(rgb[0].split('(')[1]);
        var g = parseInt(rgb[1]);
        var b = parseInt(rgb[2].split(')')[0]);
        rgbObj = { r: r, g: g, b: b };
    }
    return rgbObj;
}
exports.getRGB = getRGB;
//# sourceMappingURL=colorFormat.js.map