const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    experience: { type: String, required: true, trim: true },
    songLanguage: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ['Little Voices', 'Rising Stars', 'Open Mic'],
    },
    consent: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Registration', registrationSchema);
