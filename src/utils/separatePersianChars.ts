import { getPersianChar } from "./getPersianChar";
import { isNeutralChar } from "./isNaturalChar";
import { isPersianChar } from "./isPersianChar";

export function separatePersianChars(text: string): string[] {
  let list = [];
  let part = "";

  for (let char of text.split("")) {
    if (isPersianChar(char)) char = getPersianChar(char);

    if (isNeutralChar(char)) {
      part += char;

      continue;
    }

    if (part.length <= 0) {
      part += char;

      continue;
    }

    if (
      (isPersianChar(part.slice(0, 1)) && isPersianChar(char)) ||
      (!isPersianChar(part.slice(0, 1)) && !isPersianChar(char))
    ) {
      part += char;

      continue;
    }

    list.push(part);
    part = char;
  }
  list.push(part);

  return list;
}
