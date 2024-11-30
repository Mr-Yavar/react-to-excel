import * as Excel from "exceljs";
import {useReactToExcelOptions} from "../types/UseReactToExcelOptions";


// Initializes the Excel workbook with metadata
export function initializeWorkbook(options:useReactToExcelOptions) {
    const workbook = new Excel.Workbook();
    workbook.creator = options.author ?? "-";
    workbook.lastModifiedBy =options.author?? "-";
    workbook.created = new Date();
    workbook.modified = new Date();
    workbook.lastPrinted = new Date();
    workbook.calcProperties.fullCalcOnLoad = true;
    return workbook;
}