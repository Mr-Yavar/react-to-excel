import { logMessages } from "./logMessage";
import { ContentNode } from "../types/ContentNode";
import { useReactToExcelHookContent } from "../types/UseReactToExcelHookContent";
import { RefObject } from "react";

interface GetContentNodesArgs {
  content?: string;

  suppressErrors?: boolean;
}

export function getContentNode({
  content,
  
  suppressErrors,
}: GetContentNodesArgs): ContentNode {


  if (content) {
    const parser = new DOMParser();
    const dom = parser.parseFromString(content, "text/html");
    return dom.body.children[0];
  }

  logMessages({
    messages: [
      '"react-to-print" did not receive a `contentRef` option or a optional-content param pass to its callback.',
    ],
    suppressErrors,
  });
  return;
}
