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
    printWindow.onload = () => {
        //console.log(111)
        handlePrintWindowOnLoad(
            printWindow,
            markLoaded,
            data,
            options
        );
        //console.log(222)

        
    };

    document.body.appendChild(printWindow);
}
