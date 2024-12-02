import { useCallback } from "react";

import { useReactToExcelOptions } from "../types/UseReactToExcelOptions";
import { useReactToExcelFn } from "../types/UseReactToExcelFn";
import { initializeWorkbook } from "../utils/initializeWorkbook.ts";
import { saveWorkbook } from "../utils/saveWorkbook.ts";
import { toExcel } from "../utils/toExcel.ts";
import { removePrintIframe } from "../utils/removePrintIframe.ts";
import { getContentNode } from "../utils/getContentNode.ts";
import { generatePrintWindow } from "../utils/generatePrintWindow.ts";
import { Font } from "../types/font";

import { HandlePrintWindowOnLoadData } from "../utils/handlePrintWindowOnLoad.ts";
import { appendPrintWindow } from "../utils/appendPrintWindow.ts";

export function useReactToExcel(
  options: useReactToExcelOptions,
): useReactToExcelFn {
  const handleExcel = useCallback(async () => {
    const workbook = await initializeWorkbook(options);

    for (let i = 0; i < options.sheetOptions.length; i++) {
      const sheetOption = options.sheetOptions[i];
      const sheetName = sheetOption?.title || `Sheet ${i + 1}`;
      const reverseMode = sheetOption.reverse ?? false;
      if (sheetOption.htmlContent) {
        // Ensure we remove any pre-existing print windows before adding a new one
        removePrintIframe(options.preserveAfterPrint, true);

        const contentNode = getContentNode({
          content: sheetOption.htmlContent,
          suppressErrors: options.suppressErrors,
        });

        if (!contentNode) {
          return;
        }
        // NOTE: `canvas` elements do not have their painted images copied
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
        const clonedContentNode = contentNode.cloneNode(true);

        const globalLinkNodes = document.querySelectorAll(
          "link[rel~='stylesheet'], link[as='style']",
        );
        const clonedImgNodes = (clonedContentNode as Element).querySelectorAll(
          "img",
        );
        const clonedVideoNodes = (
          clonedContentNode as Element
        ).querySelectorAll("video");

        const numResourcesToLoad =
          (options.ignoreGlobalStyles ? 0 : globalLinkNodes.length) +
          clonedImgNodes.length +
          clonedVideoNodes.length;

        const resourcesLoaded: (Element | Font | FontFace)[] = [];
        const resourcesErrored: (Element | Font | FontFace)[] = [];

        const printWindow = generatePrintWindow();

        /**
         * Keeps track of loaded resources, kicking off the actual print function once all
         * resources have been marked (loaded or failed)
         */
        const markLoaded = (resource: Element | Font | FontFace) => {
          if (resourcesLoaded.includes(resource)) {
            return;
          }

          // We may have errors, but attempt to print anyways - maybe they are trivial and the
          // user will be ok ignoring them
          const numResourcesManaged =
            resourcesLoaded.length + resourcesErrored.length;

          if (numResourcesManaged === numResourcesToLoad) {
            toExcel(
              workbook,
              printWindow,
              sheetOption.isRTL,
              sheetName,
              reverseMode,
            );
          }
        };
        const data: HandlePrintWindowOnLoadData = {
          contentNode,
          clonedContentNode,
          clonedImgNodes,
          clonedVideoNodes,
          numResourcesToLoad,
          originalCanvasNodes: (contentNode as Element).querySelectorAll(
            "canvas",
          ),
          toExcelFn: (printWindow: HTMLIFrameElement) =>
            toExcel(
              workbook,
              printWindow,
              sheetOption.isRTL,
              sheetName,
              reverseMode,
            ),
        };

        // Ensure we run `onBeforePrint` before appending the print window, which kicks off loading
        // needed resources once mounted
        if (options.onBeforePrint) {
          appendPrintWindow(printWindow, markLoaded, data, options);
        } else {
          appendPrintWindow(printWindow, markLoaded, data, options);
        }
      } else {
        if (sheetOption.contentRef)
          toExcel(
            workbook,
            sheetOption.contentRef.current as HTMLElement,
            sheetOption.isRTL,
            sheetName,
            reverseMode,
          );
      }
      //console.log("===============");
    }

    saveWorkbook(workbook, options.documentTitle ?? window.document.title);
  }, [options]);
  return handleExcel;
}
