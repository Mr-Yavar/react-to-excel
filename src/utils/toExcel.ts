import * as Excel from "exceljs";
import { findParentWithDisplayNone } from "./findParentWithDisplayNone";
import { getBase64FromImage } from "./getBase64FromImage";
import { generateCellValue } from "./generateCellValue";
import { getExcelStyle } from "./getExcelStyle";
import { convertPixelsToPoints } from "./convertPixelToPoint";
import { identifyNumberFormat } from "./identifyNumberFormat";

//=========
//  V 0.1.0
//=========

export function toExcel(
  workbook: Excel.Workbook,
  content: HTMLIFrameElement | Element,
  isRTL: boolean,
  SheetName: string,
  rightHand = false,
) {
  const sheet = workbook.addWorksheet(SheetName);
  sheet.views = [{ rightToLeft: isRTL }];

  let tables: NodeListOf<Element>;

  if (content instanceof HTMLIFrameElement) {
    content.focus();
    tables = content!.contentDocument!.querySelectorAll(`* > table`);
  } else {
    tables = content.querySelectorAll(`* > table`);
  }

  let RowNumber = 1; // Initialize RowNumber for each table
  for (let j = 0; j < tables.length; j++) {
    const table = tables[j];
    RowNumber = TableReader(
      table as HTMLTableElement,
      sheet,
      workbook,
      RowNumber,
      rightHand,
    );
  }
}

function TableReader(
  Table: HTMLTableElement | null,
  sheet: Excel.Worksheet,
  workbook: Excel.Workbook,
  initialRowNumber: number,
  rightHand: boolean,
): number {
  if (Table == null) return initialRowNumber;

  let tableEl: HTMLTableElement | null = Table;

  const hiddenParent = findParentWithDisplayNone(Table);
  if (hiddenParent != null) {
    hiddenParent.style.display = "initial !important"; // Corrected to use display property
  }
  const header: HTMLTableSectionElement | null = tableEl.querySelector(`thead`);
  const body: HTMLTableSectionElement | null = tableEl.querySelector(`tbody`);

  let RowNumber = initialRowNumber; // Initialize RowNumber for each table

  if (header) {
    for (let rIndex = 0; rIndex < header.rows.length; rIndex++) {
      let CellNumber = 1;

      const tr = header.rows.item(rIndex);
      const row = sheet.getRow(RowNumber);
      const cells = Array.from(tr?.cells ?? []);

      if (rightHand) {
        cells.reverse();
      }

      for (let cIndex = 0; cIndex < cells.length; cIndex++) {
        const th = cells[cIndex];
        if (th.firstElementChild instanceof HTMLTableElement) {
          const TempRow = RowNumber;
          TableReader(
            th.firstElementChild,
            sheet,
            workbook,
            RowNumber,
            rightHand,
          );
          RowNumber = TempRow; // Restore RowNumber after processing child table
        } else {
          const temp = th.cloneNode(true) as HTMLElement;
          temp.innerHTML = temp.innerHTML.replace("<br>", "\n");

          // Find an empty cell to fill
          while (
            row.getCell(CellNumber).isMerged ||
            !!row.getCell(CellNumber).value
          ) {
            //console.log(row.getCell(CellNumber));
            CellNumber++;
          }

          // Handle images
          if (th.querySelector("img")) {
            th.querySelectorAll("img").forEach(
              (img: HTMLImageElement, imgIndex: number) => {
                const imageId = workbook.addImage({
                  base64: getBase64FromImage(img),
                  extension: "jpeg",
                });

                sheet.addImage(imageId, {
                  tl: {
                    col: CellNumber + imgIndex - 1,
                    row: RowNumber - 1,
                  },
                  ext: { width: img.clientWidth, height: img.clientHeight },
                });
              },
            );
          } else {
            row.getCell(CellNumber).value = generateCellValue(temp);
          }

          row.getCell(CellNumber).style = getExcelStyle(th, rightHand);

          // Handle rowspan and colspan
          const colspan = th.colSpan ? Number(th.colSpan) : 1;
          const rowspan = th.rowSpan ? Number(th.rowSpan) : 1;

          if (rowspan > 1 || colspan > 1) {
            sheet.mergeCells(
              RowNumber,
              CellNumber,
              RowNumber + rowspan - 1,
              CellNumber + colspan - 1,
            );
          }

          // Adjust row height
          const heightPerRow = convertPixelsToPoints(
            Number(th.clientHeight) / (rowspan || 1),
          );
          for (
            let rnumber = RowNumber;
            rnumber < RowNumber + (rowspan || 1);
            rnumber++
          ) {
            const row = sheet.getRow(rnumber);
            row.height = row.height
              ? Math.max(row.height, heightPerRow)
              : heightPerRow;
          }

          // Adjust column width
          const maxlength = Math.max(
            ...temp.innerText.split("\n").map((str) => str.trim().length),
          );
          const widthPerColumn = maxlength / (colspan || 1);

          for (
            let cnumber = CellNumber;
            cnumber < CellNumber + (colspan || 1);
            cnumber++
          ) {
            const col = sheet.getColumn(cnumber);
            col.width = col.width
              ? Math.max(col.width, (widthPerColumn + 4) * 1.2)
              : (widthPerColumn + 4) * 1.2;
          }

          CellNumber += colspan; // Move to the next cell position
        }
      }
      RowNumber++;
    }
  }
  if (body) {
    for (let rIndex = 0; rIndex < body.rows.length; rIndex++) {
      let CellNumber = 1;

      const tr = body.rows.item(rIndex);
      const row = sheet.getRow(RowNumber);
      const cells = Array.from(tr?.cells ?? []);

      if (rightHand) {
        cells.reverse();
      }

      for (let cIndex = 0; cIndex < cells.length; cIndex++) {
        const th = cells[cIndex];
        if (th.firstElementChild instanceof HTMLTableElement) {
          const TempRow = RowNumber;
          TableReader(
            th.firstElementChild,
            sheet,
            workbook,
            RowNumber,
            rightHand,
          );
          RowNumber = TempRow;
        } else {
          const temp = th.cloneNode(true) as HTMLElement;
          temp.innerHTML = temp.innerHTML.replace("<br>", "\n");

          while (
            row.getCell(CellNumber).isMerged ||
            !!row.getCell(CellNumber).value
          ) {
            CellNumber++;
          }

          if (isNaN(Number(temp.innerText)) || th.innerText === "") {
            row.getCell(CellNumber).value = generateCellValue(temp);
            row.getCell(CellNumber).style = getExcelStyle(th, rightHand);
          } else {
            row.getCell(CellNumber).value = Number(th.innerText);
            row.getCell(CellNumber).numFmt = identifyNumberFormat(
              th.innerText.trim(),
            );
            row.getCell(CellNumber).style = getExcelStyle(th, rightHand);
          }

          const colspan = th.colSpan ? Number(th.colSpan) : 1;
          const rowspan = th.rowSpan ? Number(th.rowSpan) : 1;

          if (rowspan > 1 || colspan > 1) {
            sheet.mergeCells(
              RowNumber,
              CellNumber,
              RowNumber + rowspan - 1,
              CellNumber + colspan - 1,
            );
          }

          const heightPerRow = convertPixelsToPoints(
            Number(th.clientHeight) / (rowspan || 1),
          );
          for (
            let rnumber = RowNumber;
            rnumber < RowNumber + (rowspan || 1);
            rnumber++
          ) {
            const row = sheet.getRow(rnumber);
            row.height = row.height
              ? Math.max(row.height, heightPerRow)
              : heightPerRow;
          }

          const maxlength = Math.max(
            ...temp.innerText.split("\n").map((str) => str.trim().length),
          );
          const widthPerColumn = maxlength / (colspan || 1);

          for (
            let cnumber = CellNumber;
            cnumber < CellNumber + (colspan || 1);
            cnumber++
          ) {
            const col = sheet.getColumn(cnumber);
            col.width = col.width
              ? Math.max(col.width, (widthPerColumn + 4) * 1.2)
              : (widthPerColumn + 4) * 1.2;
          }

          CellNumber += colspan; // Move to the next cell position
        }
      }
      RowNumber++;
    }
  }

  if (hiddenParent) {
    hiddenParent.style.display = ""; // Reset display style
  }

  return RowNumber;
}
