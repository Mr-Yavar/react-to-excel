import { borderStyle } from "./borderStyle";
import { convertFontSize } from "./convertFontSize";
import { convertTextAlign } from "./convertTextAlign";
import { rbg_rgbaToARGB } from "./rbg_rgbaToARGB";

export function getExcelStyle(tdElement: any, rightHand: boolean) {
  // Get computed styles of the td element
  const computedStyles = window.getComputedStyle(tdElement);

  // Create an empty style object
  const style: any = {};

  let fontName = computedStyles
    .getPropertyValue("font-family")
    .replace('"', "")
    .replace("'", "");


  // Extract relevant properties from computed styles
  style.font = {
    bold:
      computedStyles.fontWeight === "bold" ||
      Number(computedStyles.fontWeight) > 400,
    italic: computedStyles.fontStyle === "italic",
    underline: computedStyles.textDecoration === "underline",
    strikethrough: computedStyles.textDecoration === "line-through",
    size: convertFontSize(computedStyles.fontSize),
    color: { argb: rbg_rgbaToARGB(computedStyles.color) },
    name: fontName,
  };

  style.alignment = {
    readingOrder: tdElement.dir == "" ? "rtl" : tdElement.dir,
    horizontal: convertTextAlign(computedStyles.getPropertyValue("text-align")),
    vertical: computedStyles.getPropertyValue("vertical-align"),
    wrapText: ["pre-wrap", "pre"].includes(
      computedStyles.getPropertyValue("white-space").toLowerCase()
    ),
    //indent: parseInt(computedStyles.getPropertyValue('padding-left'), 10),
  };

  if (tdElement.querySelector(".rotate") != null) {
    style.alignment.textRotation = 90;
  }

  let element = tdElement;
  let bgcolor = rbg_rgbaToARGB(computedStyles.backgroundColor);
  console.log(bgcolor);
  while (bgcolor[0] == "0" && bgcolor[1] == "0") {
    element = element.parentElement;
    if (element == null) break;
    bgcolor = rbg_rgbaToARGB(getComputedStyle(element).backgroundColor);
    if (element.tagName.toLowerCase() == "body") break;
  }

  if (tdElement.classList.contains("cross-background")) {
    style.fill = {
      type: "pattern",
      pattern: "darkTrellis",
      fgColor: { argb: "FF949494" },
      bgColor: { argb: bgcolor },
    };
  } else {
    style.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: bgcolor },
    };
  }

  if (rightHand) {
    style.border = {
      right: {
        style: borderStyle(computedStyles, "right"),
        color: {
          argb: rbg_rgbaToARGB(
            computedStyles.getPropertyValue("border-right-color")
          ),
        },
      },
      left: {
        style: borderStyle(computedStyles, "left"),
        color: {
          argb: rbg_rgbaToARGB(
            computedStyles.getPropertyValue("border-left-color")
          ),
        },
      },
      top: {
        style: borderStyle(computedStyles, "top"),
        color: {
          argb: rbg_rgbaToARGB(
            computedStyles.getPropertyValue("border-top-color")
          ),
        },
      },
      bottom: {
        style: borderStyle(computedStyles, "bottom"),
        color: {
          argb: rbg_rgbaToARGB(
            computedStyles.getPropertyValue("border-bottom-color")
          ),
        },
      },
    };
  } else {
    style.border = {
      right: {
        style: borderStyle(computedStyles, "left"),
        color: {
          argb: rbg_rgbaToARGB(
            computedStyles.getPropertyValue("border-left-color")
          ),
        },
      },
      left: {
        style: borderStyle(computedStyles, "right"),
        color: {
          argb: rbg_rgbaToARGB(
            computedStyles.getPropertyValue("border-right-color")
          ),
        },
      },
      top: {
        style: borderStyle(computedStyles, "top"),
        color: {
          argb: rbg_rgbaToARGB(
            computedStyles.getPropertyValue("border-top-color")
          ),
        },
      },
      bottom: {
        style: borderStyle(computedStyles, "bottom"),
        color: {
          argb: rbg_rgbaToARGB(
            computedStyles.getPropertyValue("border-bottom-color")
          ),
        },
      },
    };
  }
  return style;
}
