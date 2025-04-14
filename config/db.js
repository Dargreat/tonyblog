const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Updated connection without deprecated options
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
