import { useReactToExcelOptions } from "../types/UseReactToExcelOptions";

export function removePrintIframe(
  preserveAfterPrint: useReactToExcelOptions["preserveAfterPrint"],
  force?: boolean
) {
  if (force || !preserveAfterPrint) {
    const documentPrintWindow = document.getElementById("printWindow");

    if (documentPrintWindow) {
      document.body.removeChild(documentPrintWindow);
    }
  }
}
