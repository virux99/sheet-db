const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Webhook endpoint to receive POST requests
app.post('/webhook', (req, res) => {
    const webhookData = req.body;

    // Log the received data
    console.log('Webhook data received:', webhookData);

    // Respond back to the sender
    res.status(200).send('Webhook data logged successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});