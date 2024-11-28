export function isPersianChar(char: string): boolean {
  char = char.slice(0, 1);
  var persianChars = /[-+،آپچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ]+$/;
  return persianChars.test(char);
}
