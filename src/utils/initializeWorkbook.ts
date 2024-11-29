import * as Excel from "exceljs";


// Initializes the Excel workbook with metadata
export function initializeWorkbook() {
    const workbook = new Excel.Workbook();
    workbook.creator = "SanPad";
    workbook.lastModifiedBy = "SanPad";
    workbook.created = new Date();
    workbook.modified = new Date();
    workbook.lastPrinted = new Date();
    workbook.calcProperties.fullCalcOnLoad = true;
    return workbook;
}