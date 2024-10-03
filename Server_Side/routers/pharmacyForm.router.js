import express from "express";
import { uploadFields } from "../middlewares/pharmacyMulterConfig.middleware.js";
import { createPharmacy } from "../controllers/PharmacyForm.controller.js";

const router = express.Router();

// POST route for creating a pharmacy
router.post('/', uploadFields, createPharmacy);

export default router;
