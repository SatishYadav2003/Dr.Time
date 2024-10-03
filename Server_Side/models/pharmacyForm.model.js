import mongoose  from "mongoose";

// Define the pharmacy schema
const pharmacySchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true,maxlength: 10 },
    education: { type: String, required: true },
    license: { type: String, required: true },
    licenseExpiry: { type: Date, required: true },
    employer: { type: String, required: true },
    jobTitle: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    languageSkills: { type: String },
    researchInterests: { type: String },
    awards: { type: String },
    volunteerExperience: { type: String },
    additionalInfo: { type: String },
    profilePhoto: { type: String },
    certificationDocument: { type: String }
});

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);
export default Pharmacy;
