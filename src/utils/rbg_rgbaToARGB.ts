import { rgbaToArgbHex } from "./rgbaToArgbHex";
import { rgbToARGB } from "./rgbToARGB";

export function rbg_rgbaToARGB(colorString: string): string {
  const isRGB = /^rgb\(/i.test(colorString);
  const isRGBA = /^rgba\(/i.test(colorString);

  if (isRGB) {
    return rgbToARGB(colorString);
  } else if (isRGBA) {
    return rgbaToArgbHex(colorString);
  } else {
    return "000000000";
  }
}
