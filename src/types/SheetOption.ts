import {RefObject} from "react";

export interface SheetOption {
    contentRef?:  RefObject<Element>;
    htmlContent?:string;
    title : string;
    isRTL:boolean;
}