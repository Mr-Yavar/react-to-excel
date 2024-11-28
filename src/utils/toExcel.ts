﻿import * as Excel from "exceljs";
import { findParentWithDisplayNone } from "./findParentWithDisplayNone";
import { getBase64FromImage } from "./getBase64FromImage";
import { generateCellValue } from "./generateCellValue";
import { getExcelStyle } from "./getExcelStyle";
import { convertPixelsToPoints } from "./convertPixelToPoint";
import { identifyNumberFormat } from "./identifyNumberFormat";


//=========
//  V 0.1.0
//=========

export async function toExcel(
    doc: Document | null,
    contentIds: string | string[],
    fileName: string | string[],
    rtl = true,
    sheetNames = [],
    rightHand = false
) {
  if (!doc) return;

  const workbook = initializeWorkbook();
  contentIds = Array.isArray(contentIds) ? contentIds : [contentIds];

  for (let i = 0; i < contentIds.length; i++) {
    const sheet = workbook.addWorksheet(sheetNames[i] || `Sheet ${i + 1}`);
    sheet.views = [{ rightToLeft: rtl }];

   const tables =  doc.querySelectorAll(`#${contentIds[i]} > table`);

   for (let j = 0; j < tables.length; j++) {
     const table = tables[j];
     await processTable(table as HTMLElement, workbook,sheet, rightHand);

   }

  }

  await saveWorkbook(workbook, fileName);
}

// Initializes the Excel workbook with metadata
function initializeWorkbook() {
  const workbook = new Excel.Workbook();
  workbook.creator = "SanPad";
  workbook.lastModifiedBy = "SanPad";
  workbook.created = new Date();
  workbook.modified = new Date();
  workbook.lastPrinted = new Date();
  workbook.calcProperties.fullCalcOnLoad = true;
  return workbook;
}

// Processes the HTML table and populates the Excel sheet
async function processTable(table: HTMLElement | null,workbook:any, sheet: any, rightHand: boolean) {
  if (!table) return;
  console.log(table);
  const hiddenParent = findParentWithDisplayNone(table);
  if (hiddenParent) hiddenParent.style = "display:initial !important";

  await processHeader(table,workbook, sheet, rightHand);
  await processBody(table,workbook, sheet, rightHand);

  if (hiddenParent) hiddenParent.style = "";
}

// Processes the header of the table
async function processHeader(table: HTMLElement,workbook:any, sheet: any, rightHand: boolean) {
  const header = table.querySelector("thead");
  if (!header) return;

  let rowNumber = 1;
  for (const row of header.rows) {
    await processRow(row, workbook,sheet, rowNumber, rightHand);
    rowNumber++;
  }
}

// Processes the body of the table
async function processBody(table: HTMLElement,workbook:any, sheet: any, rightHand: boolean) {
  const body = table.querySelector("tbody");
  if (!body) return;

  let rowNumber = sheet.rowCount + 1; // Start after header
  for (const row of body.rows) {
    await processRow(row, workbook,sheet, rowNumber, rightHand);
    rowNumber++;
  }
}

// Processes a single row of the table
async function processRow(row: HTMLTableRowElement,workbook:any, sheet: any, rowNumber: number, rightHand: boolean) {
  let cellNumber = 1;

  const cells = rightHand ? [...row.cells].reverse() : [...row.cells];
  for (const cell of cells) {
    await processCell(cell, workbook,sheet, rowNumber, cellNumber,rightHand);
    cellNumber += getColSpan(cell);
  }
}

// Processes a single cell of the table
async function processCell(cell: HTMLTableCellElement,workbook:any, sheet: any, rowNumber: number, cellNumber: number,rightHand:boolean) {
  const tempCell = cell.cloneNode(true);
  tempCell.innerHTML = tempCell.innerHTML.replaceAll("<br>", "\n");

  if (cell.firstElementChild instanceof HTMLTableElement) {
    await processTable(cell.firstElementChild,workbook, sheet, rightHand);
  } else {
    await fillCell(workbook,sheet, rowNumber, cellNumber, tempCell, cell,rightHand);
  }
}

// Fills the Excel cell with the appropriate value and style
async function fillCell(workbook:any,sheet: any, rowNumber: number, cellNumber: number, tempCell: Node, cell: HTMLTableCellElement,rightHand:boolean) {
  const row = sheet.getRow(rowNumber);
  const cellValue = generateCellValue(tempCell);

  const style = getExcelStyle(cell, rightHand);

  row.getCell(cellNumber).value = cellValue;
  row.getCell(cellNumber).style = style;

  if (cell.querySelector("img")) {
    await handleImages(cell, workbook, sheet, rowNumber, cellNumber);
  }

  adjustRowHeight(sheet, rowNumber, cell, cellNumber);
  adjustColumnWidth(sheet, row, cell, cellNumber);
}

// Handles images within a cell
async function handleImages(cell: HTMLTableCellElement, workbook: any, sheet: any, rowNumber: number, cellNumber: number ) {
  const images = cell.querySelectorAll("img");
  for (const img of images) {
    const imageId = workbook.addImage({
      base64: getBase64FromImage(img),
      extension: "jpeg",
    });

    sheet.addImage(imageId, {
      tl: { col: cellNumber - 1, row: rowNumber - 1 },
      ext: { width: img.clientWidth, height: img.clientHeight },
    });
  }
}

// Adjusts the height of the row based on cell content
function adjustRowHeight(sheet: any, rowNumber: number, cell: HTMLTableCellElement, cellNumber: number) {
  const heightPerRow = convertPixelsToPoints(Number(cell.clientHeight));
  const row = sheet.getRow(rowNumber);
  row.height = Math.max(row.height || 0, heightPerRow);
}

// Adjusts the width of the column based on cell content
function adjustColumnWidth(sheet: any, row: any, cell: HTMLTableCellElement, cellNumber: number) {
  const maxLength = Math.max(...cell.innerText.split("\n").map(str => str.trim().length));
  const col = sheet.getColumn(cellNumber);
  col.width = Math.max(col.width || 0, (maxLength + 4) * 1.2);
}

// Saves the workbook to a file
async function saveWorkbook(workbook: any, fileName: string | string[]) {
  try {
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const a = document.createElement("a");
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = `${fileName}.xlsx`;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error generating XLSX:", error);
  }
}

// Returns the colspan of a cell
function getColSpan(cell: HTMLTableCellElement): number {
  return cell.colSpan ? Number(cell.colSpan) : 1;
}

// Returns the rowspan of a cell
function getRowSpan(cell: HTMLTableCellElement): number {
  return cell.rowSpan ? Number(cell.rowSpan) : 1;
}

// Merges cells based on rowspan and colspan
function mergeCells(sheet: any, rowNumber: number, cellNumber: number, rowspan: number, colspan: number) {
  sheet.mergeCells(rowNumber, cellNumber, rowNumber + rowspan - 1, cellNumber + colspan - 1);
}

// Identifies and applies number formatting to cells
function applyNumberFormatting(cell: HTMLTableCellElement, sheet: any, rowNumber: number, cellNumber: number,rightHand) {
  const value = cell.innerText.trim();
  if (isNaN(Number(value)) || value === "") return;

  const style = getExcelStyle(cell, rightHand);
  style.font.name = "Times New Roman";
  sheet.getRow(rowNumber).getCell(cellNumber).style = style;
  sheet.getRow(rowNumber).getCell(cellNumber).value = Number(value);
  sheet.getRow(rowNumber).getCell(cellNumber).numFmt = identifyNumberFormat(value);
}

// Checks if a cell contains a time format
function isTimeFormat(cell: HTMLTableCellElement): boolean {
  // Implement time format checking logic here
  return false;
}