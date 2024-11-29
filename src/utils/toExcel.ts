import * as Excel from "exceljs";
import { findParentWithDisplayNone } from "./findParentWithDisplayNone";
import { getBase64FromImage } from "./getBase64FromImage";
import { generateCellValue } from "./generateCellValue";
import { getExcelStyle } from "./getExcelStyle";
import { convertPixelsToPoints } from "./convertPixelToPoint";
import { identifyNumberFormat } from "./identifyNumberFormat";
import { useReactToExcelOptions } from "../types/UseReactToExcelOptions";

//=========
//  V 0.1.0
//=========

export async function toExcel(
  workbook: Excel.Workbook,
  options: useReactToExcelOptions,
  rightHand = false
) {
  const { sheetOptions, contentRef } = options;

  for (let i = 0; i < contentRef.length; i++) {
    const content = contentRef[i].current;

    if (!content) continue;

    const sheet = workbook.addWorksheet(
      sheetOptions[i]?.title || `Sheet ${i + 1}`
    );
    sheet.views = [{ rightToLeft: sheetOptions[i].isRTL }];

    const tables = content.querySelectorAll(`* > table`);

    for (let j = 0; j < tables.length; j++) {
      const table = tables[j];
      await TableReader(table as HTMLTableElement, sheet, workbook, rightHand);
    }
  }
}

async function TableReader(
  Table: HTMLTableElement | null,
  sheet: Excel.Worksheet,
  workbook: Excel.Workbook,
  rightHand: boolean
) {
  if (Table == null) return;

  let tableEl: HTMLTableElement | null = Table;

  const hiddenParent = findParentWithDisplayNone(Table);
  if (hiddenParent != null) {
    hiddenParent.style.display = "initial !important"; // Corrected to use display property
  }
  const header: HTMLTableSectionElement | null = tableEl.querySelector(`thead`);
  const body: HTMLTableSectionElement | null = tableEl.querySelector(`tbody`);

  let RowNumber = 1; // Initialize RowNumber for each table

  if (header) {
    for (let rIndex = 0; rIndex < header.rows.length; rIndex++) {
      let CellNumber = 1;

      const tr = header.rows.item(rIndex);
      const row = sheet.getRow(RowNumber);
      const cells = Array.from(tr?.cells ?? []) ;

      if (rightHand) {
        cells.reverse();
      }

      for (let cIndex = 0; cIndex < cells.length; cIndex++) {
        const th = cells[cIndex];
        if (th.firstElementChild instanceof HTMLTableElement) {
          const TempRow = RowNumber;
          await TableReader(th.firstElementChild, sheet, workbook, rightHand);
          RowNumber = TempRow; // Restore RowNumber after processing child table
        } else {
          const temp = th.cloneNode(true) as HTMLElement;
          temp.innerHTML = temp.innerHTML.replace("<br>", "\n");

          // Find an empty cell to fill
          while (
            row.getCell(CellNumber).isMerged ||
            !!row.getCell(CellNumber).value
          ) {
            console.log(row.getCell(CellNumber));
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
              }
            );
          } else {
            row.getCell(CellNumber).value = generateCellValue(temp);
          }

          const style = getExcelStyle(th, rightHand);
          style.font.name = "B Titr";
          row.getCell(CellNumber).style = style;

          // Handle rowspan and colspan
          const colspan = th.colSpan ? Number(th.colSpan) : 1;
          const rowspan = th.rowSpan ? Number(th.rowSpan) : 1;

          if (rowspan > 1 || colspan > 1) {
            sheet.mergeCells(
              RowNumber,
              CellNumber,
              RowNumber + rowspan - 1,
              CellNumber + colspan - 1
            );
          }

          // Adjust row height
          const heightPerRow = convertPixelsToPoints(
            Number(th.clientHeight) / (rowspan || 1)
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
            ...temp.innerText.split("\n").map((str) => str.trim().length)
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
  console.log(RowNumber);
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
          await TableReader(th.firstElementChild, sheet, workbook, rightHand);
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
              th.innerText.trim()
            );
            row.getCell(CellNumber).style = {
              font: { name: "Times New Roman" },
            };
          }

          const colspan = th.colSpan ? Number(th.colSpan) : 1;
          const rowspan = th.rowSpan ? Number(th.rowSpan) : 1;

          if (rowspan > 1 || colspan > 1) {
            sheet.mergeCells(
              RowNumber,
              CellNumber,
              RowNumber + rowspan - 1,
              CellNumber + colspan - 1
            );
          }

          const heightPerRow = convertPixelsToPoints(
            Number(th.clientHeight) / (rowspan || 1)
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
            ...temp.innerText.split("\n").map((str) => str.trim().length)
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
}
