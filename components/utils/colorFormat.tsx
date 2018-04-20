
export interface IRGB {
  r: number;
  g: number;
  b: number;
}

/**
 * 颜色rgb格式转16进制
 * @param color rgb  例如:rgb(12, 1, 1) -> #0d00ff;
 */
export function rgb2hex(color: string): string {
  const rgb = color.split(',');
  const r = parseInt(rgb[0].split('(')[1], 10);
  const g = parseInt(rgb[1], 10);
  const b = parseInt(rgb[2].split(')')[0], 10);
  // tslint:disable
  const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
}

/**
 * 颜色16进制格式转rgb
 * @param color hex 例如 #0d00ff  -> {r: 12, g: 1, b: 1};
 */
export function hex2rgb(color: string) : IRGB {
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);

  return {
    r, g, b,
  };
}

/**
 * 获取rgb
 * @param color rgb or hex
 */
export function getRGB(color: string) : IRGB {
  let rgbObj: IRGB;
  if (color.indexOf('#') !== -1) {
    rgbObj = hex2rgb(color);
  } else {
    const rgb = color.split(',');
    const r = parseInt(rgb[0].split('(')[1]);
    const g = parseInt(rgb[1]);
    const b = parseInt(rgb[2].split(')')[0]);
    rgbObj = {r, g, b};
  }
  return rgbObj;
}