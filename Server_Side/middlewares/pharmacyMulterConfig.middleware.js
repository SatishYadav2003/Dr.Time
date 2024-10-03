// import multer from 'multer';

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// export const uploadFields = upload.fields([
//   { name: 'profilePhoto', maxCount: 1 },
//   { name: 'certificate', maxCount: 1 },
// ]);

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from "multer";
import path from "path";
import fs from "fs";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Ensure that the upload folder exists
const uploadFolder = path.join(__dirname, '../uploads/pharmacy');
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

// Configure Multer storage to save the files to the 'uploads/pharmacy' folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder); // Destination folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname); // Save file with unique name
  },
});

const upload = multer({ storage });

export const uploadFields= upload.fields([
  { name: 'profilePhoto', maxCount: 1 },         // Matches with the pharmacy form
  { name: 'certificationDocument', maxCount: 1 }, // Changed from 'certificate' to 'certificationDocument'
]);