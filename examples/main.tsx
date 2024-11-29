

import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import SampleTable from './tables/SampleTable';
import {useReactToExcel} from "../src"; // Adjust the path as needed

const App: React.FC = () => {
    const t = useRef(null);
    const excel1 = useReactToExcel({
        documentTitle : "file",
        contentRef : [t],
        sheetOptions :[{
            title :"report",
            isRTL:true
        }]
    });


    return (
        <div style={{background:"white"}}>
            <button type={"button"} onClick={()=>excel1()}>xlsx</button>
            <SampleTable ref={t} />


        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));