const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const { initDatabase } = require('./schemas/db');

initDatabase();
app.use(cors());
app.use(express.json());

const { handleNotFound } = require('./controllers/error_controller');
const bedRouter = require('./routes/bed');
const dashboardRouter = require('./routes/dashboard');
const hospitalRouter = require('./routes/dashboardHospital');
const organRouter = require('./routes/organ');
const resourceRouter = require('./routes/resource');
const userRouter = require('./routes/user');
const doctorRouter = require('./routes/doctor');
const oxygenRouter = require('./routes/oxygen');
const bloodRouter = require('./routes/bloodadmin');

app.use('/api/dashboard', dashboardRouter);
app.use('/api/dashboard/hospital', hospitalRouter);
app.use('/api/blood', bloodRouter);

app.use('/api/search/beds', bedRouter);
app.use('/api/search/blood', bloodRouter);
app.use('/api/search/resource', resourceRouter);
app.use('/api/search/organ', organRouter);
app.use('/api/search/doctor', doctorRouter);
app.use('/api/search/oxygen', oxygenRouter);

app.use('/api/user',userRouter);

app.all('*', handleNotFound);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
