export interface IRGB {
    r: number;
    g: number;
    b: number;
}
/**
 * 颜色rgb格式转16进制
 * @param color rgb  例如:rgb(12, 1, 1) -> #0d00ff;
 */
export declare function rgb2hex(color: string): string;
/**
 * 颜色16进制格式转rgb
 * @param color hex 例如 #0d00ff  -> {r: 12, g: 1, b: 1};
 */
export declare function hex2rgb(color: string): IRGB;
/**
 * 获取rgb
 * @param color rgb or hex
 */
export declare function getRGB(color: string): IRGB;
