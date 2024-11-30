import { getExcelStyle } from "./getExcelStyle";
import { isPersianChar } from "./isPersianChar";
import { separatePersianChars } from "./separatePersianChars";

export function generateCellValue(Node: any) {
  let cellFonts = getExcelStyle(Node, true).font;
  let DOM = new DOMParser();
  let Nodes: any = DOM.parseFromString(Node.innerHTML, "text/html");

  let cellValue = {
    richText: [],
  };
  ////console.log(Nodes.body.childNodes);
  for (let item of Nodes.body.childNodes) {
    if (item.nodeType == document.TEXT_NODE) {
      let tmpRichs: any = separatePersianChars(item.data).reduce(function (
        prev: any,
        curr: any
      ) {
        prev.push({
          text: curr,
          font: {
            name: isPersianChar(curr) ? "B Nazanin" : "Times New Roman",
            bold: cellFonts.bold,
            color: cellFonts.color,
            italic: cellFonts.italic,
            size: cellFonts.size,
          },
        });
        return prev;
      },
      []);

      cellValue.richText.push(...(tmpRichs as never[]));
    } else if (item.nodeType == document.ELEMENT_NODE) {
      let tmpObj: any = { text: item.innerText };
      if (item.tagName.toLowerCase() == "sub") {
        tmpObj.font = { vertAlign: "subscript" };
      } else if (item.tagName.toLowerCase() == "sup") {
        tmpObj.font = { vertAlign: "superscript" };
      }

      cellValue.richText.push(tmpObj as never);
    }
  }

  if (cellValue.richText.length == 0) {
    return Node.innerText;
  } else {
    return cellValue;
  }
}
