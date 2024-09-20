import express from 'express';
import { createDoctor } from '../controllers/doctorForm.controller.js';
import { uploadFields } from '../middlewares/multerConfig.middleware.js';

const router = express.Router();

router.post('/', uploadFields, createDoctor);

export default router;
