import { Font } from "../types/font";
import { useReactToExcelOptions } from "../types/UseReactToExcelOptions";
import { handlePrintWindowOnLoad, HandlePrintWindowOnLoadData } from "./handlePrintWindowOnLoad";

export function appendPrintWindow(
    /** The print iframe */
    printWindow: HTMLIFrameElement,
    markLoaded: (resource: Element | Font | FontFace, errorMessages?: unknown[]) => void,
    data: HandlePrintWindowOnLoadData,
    options: useReactToExcelOptions,
) {
  
      
    

        
    

    document.body.appendChild(printWindow);
    

    handlePrintWindowOnLoad(
        printWindow,
        markLoaded,
        data,
        options
    );
}
