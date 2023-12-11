const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const certificateRoutes = require('./routes/certificateRoutes');

app.use(express.json());

// CORS setup for development (adjust as necessary for production)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

// Certificate routes
app.use('/certificates', certificateRoutes);

// Home route for basic API check
app.get('/', (req, res) => {
    res.send('Certificate Management System API is running.');
});

// Handle 404 - Not Found
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

// Handle 500 - Any server error
app.use((error, req, res, next) => {
    res.status(500).send('Internal Server Error');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
