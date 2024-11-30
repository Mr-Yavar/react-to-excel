import {RefObject} from "react";

export interface SheetOption {
    contentRef:  RefObject<Element>;
    title : string;
    isRTL:boolean;
}