import mongoose from 'mongoose';


const doctorSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    mobile: { type: String, required: true, minlength: 10, maxlength: 10 },
    specialization: { type: String, required: true },
    medLicenseNo: { type: String, required: true },
    medLicenseNoExpiry: { type: Date, required: true },
    profilePhoto: { type: Buffer },
    hospitalAffiliationName: { type: String, required: true },
    hospitalAffiliationAddress: { type: String, required: true },
    qualification: { type: String },
    experience: { type: Number },
    institution: { type: String },
    certificate: { type: Buffer },
    alternateAddress: { type: String },
    emergencyContact: { type: String, minlength: 10, maxlength: 10 },
    languagesSpoken: { type: String },
    websiteLinkedIn: { type: String },
    additionalNotes: { type: String },
    professionalBiography: { type: String },
});


const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
