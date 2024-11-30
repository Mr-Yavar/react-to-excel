

import React, {useRef} from 'react';
import ReactDOM from 'react-dom';

import {useReactToExcel} from "../src"; // Adjust the path as needed

const App: React.FC = () => {
    const componentRef = useRef(null);
    const handleExcelBtn = useReactToExcel({
        documentTitle : "Sample",
        sheetOptions :[{
            contentRef : componentRef,
            title :"Sample",
            isRTL:false
        }]
    });


    return (
        <div style={{background:"white"}}>
            <button type={"button"} onClick={()=>handleExcelBtn()}>xlsx</button>
            <SampleTable/>


        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));