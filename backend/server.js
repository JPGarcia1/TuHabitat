const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

const properties = [
    { name: 'Casa en la Playa', description: 'Hermosa casa frente al mar.', price: '$500,000' },
    { name: 'Apartamento en la Ciudad', description: 'Moderno apartamento en el centro.', price: '$300,000' },
    { name: 'Casa de Campo', description: 'Acogedora casa en el campo.', price: '$200,000' }
];

app.get('/properties', (req, res) => {
    res.json(properties);
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Nombre: ${name}, Email: ${email}, Mensaje: ${message}`);
    res.json({ message: 'Formulario recibido' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
