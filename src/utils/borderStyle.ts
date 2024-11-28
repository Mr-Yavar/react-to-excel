export function borderStyle(
  computedStyles: CSSStyleDeclaration,
  side: any
): string {
  let size = Number(
    computedStyles.getPropertyValue(`border-${side}-width`).replace("px", "")
  );
  if (size == 0) return "";

  if (
    computedStyles.getPropertyValue(`border-${side}-style`).toLowerCase() ==
    "solid"
  ) {
    if (size > 0 && size <= 2) {
      return "thin";
    } else {
      return "medium";
    }
  } else if (
    computedStyles.getPropertyValue(`border-${side}-style`).toLowerCase() ==
    "solid"
  ) {
    if (size > 0 && size <= 2) {
      return "dotted";
    } else {
      return "mediumdotted";
    }
  } else if (
    computedStyles.getPropertyValue(`border-${side}-style`).toLowerCase() ==
    "dashed"
  ) {
    if (size > 0 && size <= 2) {
      return "Dashed";
    } else {
      return "mediumDashed";
    }
  }

  return "";
}
