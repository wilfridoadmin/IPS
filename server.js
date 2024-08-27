const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { name, age, date, observations } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'wilfridocolina2021@gmail.com',
        subject: 'Nuevo Paciente Registrado',
        text: `Se ha registrado un nuevo paciente.\n\nNombre: ${name}\nEdad: ${age}\nFecha de Atención: ${date}\nObservaciones: ${observations}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

// Aquí se implementa el envío de SMS similarmente

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
