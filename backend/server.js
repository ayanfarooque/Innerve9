const express = require('express');
const app = express();
const PORT = 3000;
const dotenv = require('dotenv');
const connectDB = require('./db.js');

dotenv.config();

connectDB();
app.use(express.json());

// Import routes
const generalRoutes = require('./routes/general');
const bloodRoutes = require('./routes/blood');
const docRoutes = require('./routes/doc');
const { handleNotFound } = require('./controllers/error_controller');

app.use('/general', generalRoutes);
app.use('/blood', bloodRoutes);
app.use('/doc', docRoutes);
app.all('*', handleNotFound);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});