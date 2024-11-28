export function numberToOrderedStr(number: number): string {
  let result = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const base = alphabet.length;

  while (number > 0) {
    number--; // Adjusting number to start from 0

    const remainder = number % base;
    result = alphabet[remainder] + result;

    number = Math.floor(number / base);
  }

  return result;
}
