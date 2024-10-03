import Pharmacy from "../models/pharmacyForm.model.js";
import path from "path";
import fs from "fs"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const createPharmacy = async (req, res) => {
    try {
        const { body, files } = req;

        // Paths for saving the uploaded files
        let profilePhotoPath = '';
        let certificationDocPath = '';

        console.log(body)
        console.log(files)


        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const uploadDir = path.join(__dirname, '../uploads/pharmacy'); // Use __dirname to get the correct path

        // Ensure that the upload directory exists
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
    console.log("first")


        // Check if files are present
        if (files?.profilePhoto) {
            const profilePhotoFileName = Date.now() + '-' + files.profilePhoto[0].originalname;
            // console.log(profilePhotoFileName)
            profilePhotoPath = path.join(uploadDir, profilePhotoFileName.toString());
            // console.log(profilePhotoPath)
            // console.log(files.profilePhoto[0].buffer)

            // Save the profile photo to the designated folder
           console.log("profile store location in mongodb: "+profilePhotoPath)
        }

        console.log("second")

        if (files?.certificationDocument) {
            const certDocFileName = Date.now() + '-' + files.certificationDocument[0].originalname;
           certificationDocPath = path.join(uploadDir, certDocFileName);

            // Save the certification document to the designated folder
            console.log("certificate store location in mongodb: "+certificationDocPath)
        }

        console.log("third")

        // Prepare pharmacy data
        const pharmacyData = {
            ...body,
            profilePhoto: profilePhotoPath || null,
            certificationDocument: certificationDocPath || null,
        };

        // Create new Pharmacy instance and save to the database
        const pharmacy = new Pharmacy(pharmacyData);

        console.log(pharmacy)
        await pharmacy.save();

        // Respond with success message
        res.status(201).json({
            message: 'Pharmacy created successfully',
            pharmacy,
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: 'Error creating pharmacy',
            error: error.message,
        });
    }
};


