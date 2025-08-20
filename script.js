// Datos estáticos de la empresa
const companyData = {
    name: "García Electronics Multiservice",
    address: "123 Main St, Los Angeles, CA",
    phone: "(555) 123-4567",
    license: "CA Contractor #123456"
};

// Inicializar contador para items
let itemCount = 0;

// Función para agregar filas a la tabla
document.getElementById('addItem').addEventListener('click', () => {
    itemCount++;
    const table = document.getElementById('itemsTable');
    const newRow = table.insertRow();
    
    newRow.innerHTML = `
        <td><input type="number" id="qty${itemCount}" min="1" value="1"></td>
        <td><input type="text" id="desc${itemCount}" placeholder="Descripción del servicio"></td>
        <td><input type="number" id="price${itemCount}" min="0" step="0.01" placeholder="0.00"></td>
        <td><span id="total${itemCount}">0.00</span></td>
    `;
});

// Generar PDF al hacer clic
document.getElementById('generatePDF').addEventListener('click', () => {
    const clientName = document.getElementById('clientName').value;
    const clientPhone = document.getElementById('clientPhone').value;
    
    // Usar jsPDF (ahora disponible globalmente)
    const doc = new jspdf.jsPDF();
    
    // Agregar contenido al PDF
    doc.setFontSize(18);
    doc.text(companyData.name, 10, 10);
    doc.setFontSize(12);
    doc.text(`Cliente: ${clientName}`, 10, 20);
    doc.text(`Teléfono: ${clientPhone}`, 10, 30);
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 10, 40);
    
    // Guardar el PDF
    doc.save(`factura_${clientName}_${Date.now()}.pdf`);
});