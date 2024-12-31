const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Resource = require('./models/resource');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

const seedResources = async () => {
    try {
        await Resource.deleteMany(); // Clear existing data
        const dummyData = [
            {
                hospitalName: 'Sasoon Hospital',
                totalBeds: 200,
                availableBeds: 50,
                equipment: [
                    { name: 'Ventilator', quantity: 10 },
                    { name: 'Oxygen Cylinder', quantity: 100 },
                ],
            },
            {
                hospitalName: 'Ruby Hospital',
                totalBeds: 100,
                availableBeds: 20,
                equipment: [
                    { name: 'Defibrillator', quantity: 5 },
                    { name: 'X-Ray Machine', quantity: 2 },
                ],
            },
        ];

        await Resource.insertMany(dummyData);
        console.log('Database seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error.message);
        process.exit(1);
    }
};

connectDB().then(seedResources);