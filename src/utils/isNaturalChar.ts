export function isNeutralChar(char: string): boolean {
  char = char.slice(0, 1);
  var neutralChars = /[\s\. ]+$/;
  return neutralChars.test(char) || /[()]+$/.test(char);
  //|| /[0-9]/.test(char);
}
