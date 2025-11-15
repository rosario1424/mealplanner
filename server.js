const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

// connect to momgoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        // listening for incoming request ( start the server )
app.listen (3001, () => {
    console.log( `Server is running http://localhost:3001`);
});
    })
    .catch((err) => console.error('Could not connected to MongoDB', err));

