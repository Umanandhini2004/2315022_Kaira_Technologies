require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Registration = require('./models/Registration');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || 'https://2315022-kaira-technologies.vercel.app' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

app.post('/api/registrations', async (req, res) => {
  try {
    const registration = await Registration.create(req.body);
    res.status(201).json({ message: 'Registration received', id: registration._id });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Please check the registration details.', errors: error.errors });
    }
    res.status(500).json({ message: 'Unable to save registration right now.' });
  }
});

async function startServer() {
  if (!process.env.MONGO_URI) throw new Error('MONGO_URI is missing. Add it to server/.env');
  await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
  app.listen(port, () => console.log(`Voice State API running on https://two315022-kaira-technologies-1.onrender.com`));
}

startServer().catch((error) => {
  console.error('Server startup failed:', error.message);
  process.exit(1);
});
