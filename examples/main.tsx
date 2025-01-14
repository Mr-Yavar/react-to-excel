import React, { useRef } from "react";


import { useReactToExcel } from "../src"; // Adjust the path as needed
import SampleTable from "./tables/SampleTable";

const App: React.FC = () => {
  const componentRef = useRef(null);
  const handleExcelBtn = useReactToExcel({
    documentTitle: "Sample",
    pageStyle:"*{background:red; border:2px dotted black;}",
    sheetOptions: [
      {
        contentRef:componentRef,
        title: "Samewrthple",
        isRTL: false,
        reverse: true,
      },
    ],
  });

  return (
    <div style={{ background: "white" }}>
      <button type={"button"} onClick={() => handleExcelBtn()}>
        xlsx
      </button>
      <SampleTable ref={componentRef} />
    </div>
  );
};

import { createRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
