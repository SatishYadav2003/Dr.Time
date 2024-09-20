import Doctor from '../models/doctorForm.model.js';

export const createDoctor = async (req, res) => {
    try {
        const { body, files } = req;


        const doctorData = {
            ...body,
            profilePhoto: files?.profilePhoto ? files.profilePhoto[0].buffer : null,
            certificate: files?.certificate ? files.certificate[0].buffer : null,
        };


        const doctor = new Doctor(doctorData);


        await doctor.save();


        res.status(201).json({
            message: 'Doctor created successfully',
            doctor,
        });
    } catch (error) {

        res.status(400).json({
            message: 'Error creating doctor',
            error: error.message,
        });
    }
};
