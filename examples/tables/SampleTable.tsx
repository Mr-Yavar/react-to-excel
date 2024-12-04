import React, { forwardRef } from "react";

// Define a type for the table data

export const SampleTable: React.FC = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="table" id={"content"}>
      <div className="table" id={"content"}>
        <table border={1}>
          <thead>
            <tr>
              <th rowSpan={3}>Day</th>
              <th colSpan={3}>Seminar</th>
            </tr>
            <tr>
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
    </div>
  );
});

export default SampleTable;
