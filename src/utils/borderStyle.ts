export function borderStyle(
  computedStyles: CSSStyleDeclaration,
  side: any
): string {
  let size = Number(
    computedStyles.getPropertyValue(`border-${side}-width`).replaceAll("px", "")
  );
  if (size == 0) return "";

  let SideborderStyle = computedStyles
    .getPropertyValue(`border-${side}-style`)
    .toLowerCase();

  if (SideborderStyle == "solid") {
    if (size > 0 && size <= 2) {
      return "thin";
    } else {
      return "medium";
    }
  } else if (SideborderStyle == "dotted") {
    if (size > 0 && size <= 2) {
      return "dotted";
    } else {
      return "mediumdotted";
    }
  } else if (SideborderStyle == "dashed") {
    if (size > 0 && size <= 2) {
      return "Dashed";
    } else {
      return "mediumDashed";
    }
  }

  return "";
}
