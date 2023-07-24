const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el paquete cors
const { uploadMessage } = require('./firebase/firestore')

const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario

// Parsear el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
    response.send(
      "Hola mundo"
    );
  });

app.get('/webhook', (req, res) => {
    res.send('Webhook funcionando correctamente.');
});

app.post('/webhook', async (req, res) => {
  const eventData = req.body;
  console.log('Evento recibido:', eventData);
  await uploadMessage(eventData, eventData.id)
  res.status(200).json({message: 'Webhook recibido correctamente: ', data: eventData});
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});