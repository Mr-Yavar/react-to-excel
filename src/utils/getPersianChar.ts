export function getPersianChar(str: string): string {
  let map1: any = {
    "(": "%popen%",
    ")": "(",
  };
  let map2: any = {
    "%popen%": ")",
  };

  for (let key in map1) str = str.replace(key, map1[key]);

  for (let key in map2) str = str.replace(key, map2[key]);

  return str;
}
