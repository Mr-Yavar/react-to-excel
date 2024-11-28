import React, {forwardRef} from 'react';

// Define a type for the table data
interface TableData {
    id: number;
    name: string;
    age: number;
    email: string;
}

// Sample data for the table
const sampleData: TableData[] = [
    { id: 1, name: 'John Doe', age: 28, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', age: 29, email: 'alice.johnson@example.com' },
    { id: 4, name: 'Bob Brown', age: 42, email: 'bob.brown@example.com' },
];

const SampleTable: React.FC = forwardRef( (props, ref) => {
    return (
        <div ref={ref} className="table" id={"content"}>

            <h1>Sample Table</h1>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>ID</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Name</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Age</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Email</th>
                </tr>
                </thead>
                <tbody>
                {sampleData.map((data) => (
                    <tr key={data.id}>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{data.id}</td>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{data.name}</td>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{data.age}</td>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{data.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>


            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>ID</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Name</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Age</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Email</th>
                </tr>

                </thead>
                <tbody>
                {sampleData.map((data) => (
                    <tr key={data.id}>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{data.id}</td>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{data.name}</td>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{data.age}</td>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{data.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
});

export default SampleTable;