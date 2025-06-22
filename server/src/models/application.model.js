const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the User who owns the application
    ref: 'User',
    required: true,
  },
  job_title: {
    type: String,
    required: [true, "Job title is required."],
  },
  company_name: {
    type: String,
    required: [true, "Company name is required."],
  },
  job_description: {
    type: String,
    default: null, // Optional job description
  },
  application_url: {
    type: String,
    default: null, // Optional link to job application
  },
  status: {
    type: String,
    enum: ['Applied', 'Interview Scheduled', 'Rejected', 'Offer Received', 'In Progress', 'Not Applied'],
    default: 'Applied', // Default status
  },
  applied_date: {
    type: Date,
    default: Date.now, // Automatically set to the current date
  },
  follow_up_date: {
    type: Date,
    default: null, // Optional follow-up date
  },
  notes: {
    type: String,
    default: null, 
  },
  tags: {
    type: [String],
    default: [],
  },
  attachments: [
    {
      file_name: String,
      file_url: String,
    },
  ], 
});

const applicationModel = mongoose.model('Application', applicationSchema);

export default applicationModel
