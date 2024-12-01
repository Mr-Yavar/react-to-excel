import React, { useRef } from "react";
import ReactDOM from "react-dom";

import { useReactToExcel } from "../src"; // Adjust the path as needed
import SampleTable from "./tables/SampleTable";

const App: React.FC = () => {
  const componentRef = useRef(null);
  const handleExcelBtn = useReactToExcel({
    documentTitle: "Sample",
    sheetOptions: [
      {
        htmlContent: renderToString(<SampleTable />, {
          identifierPrefix: "212",
        }),
        title: "Samewrthple",
        isRTL: false,
      }
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
