import mongoose from 'mongoose';
import dotenv from 'dotenv';
import IncidentModel from './Models/Incident.js';
import connectDB from './config/db.js';

dotenv.config();

const seedIncidents = [
    {
        title: 'Autonomous Car Malfunction',
        description: 'An AI-driven car failed to stop at a red light causing a minor accident.',
        severity: 'Medium',
    },
    {
        title: 'AI Misinformation Spread',
        description: 'A chatbot disseminated false information about public health.',
        severity: 'High',
    },
    {
        title: 'Facial Recognition Bias',
        description: 'An AI system showed bias against minority groups in facial recognition tests.',
        severity: 'High',
    }
];

const seedDatabase=async()=>{
    try {
        await connectDB();
        console.log('MongoDB Connected for Seeding');

        await IncidentModel.deleteMany();
        console.log('Old incidents deleted.');

        await IncidentModel.insertMany(seedIncidents);
        console.log('Sample incidents inserted successfully!');

        process.exit();
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};

seedDatabase();
