const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Resource = require('./models/resource');
const jsonData = require('./resources.json');

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
        await Resource.deleteMany();

        const mappedData = jsonData.records
            .map((record) => {
                const parseNumber = (value) => {
                    const number = parseInt(value, 10);
                    return isNaN(number) ? 0 : number;
                };

                if (!record[1] || !record[2] || !record[3] || !record[6]) {
                    console.warn(`Skipping record due to missing required fields:`, record);
                    return null;
                }

                return {
                    cityName: record[1],
                    zoneName: record[2],
                    wardName: record[3],
                    hospitalName: record[6],
                    facilityType: record[7],
                    classType: record[8],
                    level: record[9],
                    pharmacyAvailable: record[10],
                    totalBeds: parseNumber(record[12]),
                    availableBeds: parseNumber(record[11]),
                    ambulanceAvailable: record[17],
                    countOfAmbulance: parseNumber(record[18]),
                    averageMonthlyFootfall: parseNumber(record[16]),
                };
            })
            .filter((data) => data !== null);

        if (mappedData.length === 0) {
            console.log('No valid data to seed.');
            process.exit();
        }

        await Resource.insertMany(mappedData);
        console.log('Database seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error.message);
        process.exit(1);
    }
};

connectDB().then(seedResources);