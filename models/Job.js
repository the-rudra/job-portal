import mongoose from 'mongoose';
import User from './User';

// const JobSchema = new mongoose.Schema({

//     user : {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//     },
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     salary: {
//         type: Number,
//         required: true,
//     },
//     company: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     job_category: {
//         type: String,
//         required: true,
//     },
//     job_type: {
//         type: String,
//         required: true,
//         trim : true,
//     },
//     job_experience: {
//         type: String,
//         required: true,
//     },
//     job_vacancy: {
//         type: Number,
//         required: true,
//     },
//     job_deadline: {
//         type: Date,
//         required: true,
//     },


// },{timestamps: true});

const JobSchema = new mongoose.Schema({
    job_url: { type: String, required: true },
    site: { type: String, required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    company_url: { type: String, required: false },
    location: { type: String, required: true },
    job_type: { type: String, required: true },
    date_posted: { type: Date, required: true },
    interval: { type: String, required: false },
    min_amount: { type: Number, required: false },
    max_amount: { type: Number, required: false },
    currency: { type: String, required: false },
    is_remote: { type: Boolean, required: false },
    num_urgent_words: { type: Number, required: false },
    benefits: { type: String, required: false },
    emails: { type: [String], required: false },
    description: { type: String, required: true }
});



const Job =  mongoose.models.Job || mongoose.model('Job', JobSchema);

export default Job;