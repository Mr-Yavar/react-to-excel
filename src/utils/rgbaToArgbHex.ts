export function rgbaToArgbHex(rgbaColor: string): string {
  // Extract RGBA components
  const rgbaComponents = rgbaColor.match(/(\d+(\.\d+)?)/g) ?? [];

  // Ensure valid RGBA color
  if (rgbaComponents.length !== 4) {
    return "";
  }

  // Convert decimal to hexadecimal for each component
  const red = Number(rgbaComponents[0]);
  const green = Number(rgbaComponents[1]);
  const blue = Number(rgbaComponents[2]);
  const alpha = Math.round(Number(rgbaComponents[3]) * 255);

  const redHex = red.toString(16).toUpperCase().padStart(2, "0");
  const greenHex = green.toString(16).toUpperCase().padStart(2, "0");
  const blueHex = blue.toString(16).toUpperCase().padStart(2, "0");
  const alphaHex = alpha.toString(16).toUpperCase().padStart(2, "0");
  // Convert components to hexadecimal strings
  return `${alphaHex}${redHex}${greenHex}${blueHex}`;
}
