// Importar las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Crear una instancia de Express
const app = express();

// Middleware para parsear datos del cuerpo de las peticiones
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware para permitir solicitudes CORS (puedes ajustar las opciones según tus necesidades)
app.use(cors());

// Rutas de API
// Aquí es donde definirás las rutas para tu servidor y la lógica para manejar las solicitudes

// Ejemplo de ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: '¡API funcionando correctamente!' });
});

// Ruta para manejar los datos de ingresos y gastos (puedes ajustar los nombres y métodos según tu implementación)
app.post('/api/ingrsos', (req, res) => {
  // Aquí puedes procesar los datos enviados desde la aplicación React
  const incomeData = req.body;
  // Realizar las operaciones necesarias con la base de datos o cualquier otra acción requerida
  // Por ejemplo, guardar los datos en la base de datos o realizar cálculos financieros
  // Luego, enviar una respuesta con el resultado o mensaje de éxito
  res.json({ message: 'Datos de ingreso recibidos correctamente' });
});

app.post('/api/gastos', (req, res) => {
  // Aquí puedes procesar los datos enviados desde la aplicación React
  const expenseData = req.body;
  // Realizar las operaciones necesarias con la base de datos o cualquier otra acción requerida
  // Por ejemplo, guardar los datos en la base de datos o realizar cálculos financieros
  // Luego, enviar una respuesta con el resultado o mensaje de éxito
  res.json({ message: 'Datos de gasto recibidos correctamente' });
});

// Configuración para servir la aplicación React desde el servidor en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Puerto en el que escuchará el servidor (puedes ajustar el puerto según tus necesidades)
const PORT = process.env.PORT || 3001;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
