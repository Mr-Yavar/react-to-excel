export function convertTextAlign(textAlign: string) {
  switch (textAlign.toLowerCase()) {
    case "start":
    case "left":
      return "left";
    case "end":
    case "right":
      return "right";
    case "center":
      return "center";
    default:
      return "center";
  }
}
