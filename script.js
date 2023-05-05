const form = document.querySelector('form');
const table = document.querySelector('table');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  const factura = {};
  formData.forEach((value, key) => {
    factura[key] = value;
  });
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(factura)
  };
  
  fetch('/api/facturas', options)
    .then(response => response.json())
    .then(data => {
      const row = table.insertRow();
      const fechaCell = row.insertCell(0);
      const proveedorCell = row.insertCell(1);
      const descripcionCell = row.insertCell(2);
      const montoCell = row.insertCell(3);
      
      fechaCell.innerHTML = data.fecha;
      proveedorCell.innerHTML = data.proveedor;
      descripcionCell.innerHTML = data.descripcion;
      montoCell.innerHTML = data.monto;
      
      form.reset();
    })
    .catch(error => console.error(error));
});

