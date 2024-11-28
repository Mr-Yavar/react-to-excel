export function rgbToARGB(rgb: string) {
  const alpha = "FF";

  const [red, green, blue]: any = rgb.match(/\d+/g);

  const redHex = parseInt(red).toString(16).toUpperCase().padStart(2, "0");
  const greenHex = parseInt(green).toString(16).toUpperCase().padStart(2, "0");
  const blueHex = parseInt(blue).toString(16).toUpperCase().padStart(2, "0");

  return `${alpha}${redHex}${greenHex}${blueHex}`;
}
