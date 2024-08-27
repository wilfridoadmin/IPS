document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '221099') {
        window.location.href = 'dashboard.html';
    } else if (username === 'michell' && password === '2210') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const patientId = document.getElementById('patientId').value;
    const patientName = document.getElementById('patientName').value;
    const patientAge = document.getElementById('patientAge').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const observations = document.getElementById('observations').value;
    const documents = document.getElementById('documents').files[0];
    
    const patientsTable = document.getElementById('patientsTable').getElementsByTagName('tbody')[0];
    const newRow = patientsTable.insertRow();
    
    newRow.innerHTML = `
        <td>${patientId}</td>
        <td>${patientName}</td>
        <td>${patientAge}</td>
        <td>${appointmentDate}</td>
        <td>${observations}</td>
        <td>${documents ? documents.name : ''}</td>
        <td><button onclick="editPatient(this)">Editar</button><button onclick="deletePatient(this)">Eliminar</button></td>
    `;

    sendEmailNotification(patientName, patientAge, appointmentDate, observations);
    sendSMSNotification(patientName, patientAge, appointmentDate, observations);
});

function editPatient(button) {
    // Función para editar paciente
}

function deletePatient(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function sendEmailNotification(name, age, date, observations) {
    // Aquí implementas el envío de correo usando un servicio como Nodemailer
}

function sendSMSNotification(name, age, date, observations) {
    // Aquí implementas el envío de SMS usando una API como Twilio
}
