export function identifyNumberFormat(number: string): string {
  let NumParts = number.split(".");

  if (NumParts.length == 1) {
    return "0".repeat(NumParts[0].length);
  } else {
    let format = "";
    if (NumParts[0].length >= 1) format += "0".repeat(NumParts[0].length);

    if (NumParts[1].length >= 1) format += "." + "0".repeat(NumParts[1].length);

    return format;
  }
}
