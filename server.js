const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configurar rutas
app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

// Configurar middleware para analizar solicitudes JSON
app.use(bodyParser.json());

// Manejar solicitudes POST a la ruta /api/facturas
app.post('/api/facturas', (req, res) => {
  const factura = req.body;
  console.log(factura);
  res.json(factura);
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor web iniciado en el puerto 3000');
});
