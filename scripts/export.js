function exportTableToCSV(filename = "course.csv") {
    const table = document.getElementById("knowledgeTable");
    const rows = Array.from(table.querySelectorAll("tr"));
    const csv = rows.map(row => {
        const cells = Array.from(row.querySelectorAll("th, td"));
        return cells.map(cell => `"${cell.innerText.replace(/"/g, '""')}"`).join(",");
    }).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}


async function exportTableToPDF(filename = "course.pdf") {
    const { jsPDF } = window.jspdf;
    const table = document.getElementById("knowledgeTable");

    // Use html2canvas to convert table to image
    const canvas = await html2canvas(table, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
        orientation: "landscape",
        unit: "pt",
        format: "a4"
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);
}


document.querySelector('#exportBtn + select').addEventListener('change', function() {
    const format = this.value;
    if (format === "csv") exportTableToCSV();
    else if (format === "pdf") exportTableToPDF();
    this.value = ""; // reset selection
});
