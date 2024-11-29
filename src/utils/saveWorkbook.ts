// Saves the workbook to a file
export async function saveWorkbook(workbook: any, fileName: string ) {
    try {
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });

        const a = document.createElement("a");
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = `${fileName}.xlsx`;
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Error generating XLSX:", error);
    }
}