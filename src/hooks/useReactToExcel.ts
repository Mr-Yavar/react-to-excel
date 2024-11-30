import { useCallback } from "react";




import { useReactToExcelOptions } from "../types/UseReactToExcelOptions";
import { useReactToExcelFn } from "../types/UseReactToExcelFn";
import {initializeWorkbook} from "../utils/initializeWorkbook.ts";
import {saveWorkbook} from "../utils/saveWorkbook.ts";
import {toExcel} from "../utils/toExcel.ts";

export function useReactToExcel(
  options: useReactToExcelOptions
): useReactToExcelFn {


  const handleExcel = useCallback(
    async  () => {

          

        const workbook = await initializeWorkbook(options);


          await toExcel(workbook,options);



        await saveWorkbook(workbook,(options.documentTitle ?? window.document.title));

    },
    [options]
  );

  return handleExcel;
}
