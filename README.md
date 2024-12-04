# React to Excel

## Overview
`react-to-excel` is a simple library that allows you to export React components and HTML tables to Excel files seamlessly. Built on top of `exceljs`, this library provides an easy way to generate Excel spreadsheets directly from your React applications.

## Features
- Convert React components or HTML tables to Excel format (.xlsx)
- Support for custom styling and formatting
- Easy integration with existing React applications
- Support for various options, including document title, author, and sheet options

## Installation

To install the package, use npm or yarn:


```bash
npm install react-to-excel
```

```bash
yarn add react-to-excel
```
### How to use :
```js
const SampleTable: React.FC = () => {
    const contentRef = useRef(null);

    const handleExcelBtn = useReactToExcel({
        documentTitle : "MyExcel",
        sheetOptions :[{
            contentRef : contentRef,
            title :"Sample",
            isRTL:false
        }]
    });

    return (
        <>
            <button type={"button"} onClick={()=>handleExcelBtn()}>to .xlsx</button>
            <div ref={contentRef} className="table" id={"content"}>

                <table border={1}>
                    <thead>
                        <tr>
                            <th rowSpan={3}>Day</th>
                            <th colSpan={3}>Seminar</th>
                        </tr>
                        <tr >
                            <th colSpan={2}>Schedule</th>
                            <th rowSpan={2}>Topic</th>
                        </tr>
                        <tr>
                            <th>Begin</th>
                            <th>End</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>Monday</td>
                            <td rowSpan={2}>8:00 a.m</td>
                            <td rowSpan={2}>5:00 p.m</td>
                            <td>Introduction to XML</td>
                        </tr>
                        <tr>
                            <td>Validity: DTD and Relax NG</td>
                        </tr>
                        <tr>
                            <td rowSpan={4}>Tuesday</td>
                            <td>8:00 a.m</td>
                            <td>11:00 a.m</td>
                            <td rowSpan={2}>XPath</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>11:00 a.m</td>
                            <td rowSpan={2}>2:00 p.m</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>XSL transformation</td>
                        </tr>
                        <tr>
                            <td>2:00 p.m</td>
                            <td>5:00 p.m</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>8:00 a.m</td>
                            <td>12:00 p.m</td>
                            <td>XLS Formatting Objects</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
```

### useReactToExcel Parameters

The `useReactToExcel` hook accepts an options object with the following parameters:


| Parameter | Type | Description |
| --- | --- | --- |
| `documentTitle` | `string` | The title of the document to be generated. This will be the name of the Excel file when downloaded. |
| `sheetOptions` | `Array<SheetOption>` | An array of objects that define the content and options for each sheet in the Excel file. Each object can contain: |
|     |     | *   `contentRef`: A reference to the React component or HTML element to be exported.<br>*   `htmlContent`: HTML content to be exported as a string.<br>*   `title`: The title of the sheet in the Excel file.<br>*   `isRTL`: A boolean indicating if the content is right-to-left (useful for languages like Persian or Arabic ..).<br>* `reverse` : A boolean indicating if content should be written from right to left (mirror mode) | `pageStyle` | `string` | **`Note`:** only works when `htmlContent` is used.<br> you can use it to set the page style of the excel file.
| `author` | `string` | The name of the author of the document. This can be included in the metadata of the Excel file. | 



### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### Based on: 
+ [react-to-print](https://github.com/MatthewHerbst/react-to-print)

### Powered by:
+ [exceljs](https://github.com/exceljs/exceljs.git)
