import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const uploadFields = upload.fields([
  { name: 'profilePhoto', maxCount: 1 },
  { name: 'certificate', maxCount: 1 },
]);
