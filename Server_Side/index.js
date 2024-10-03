import connectDB from './config/connection.js';
import pharmacyRoutes from "./routers/pharmacyForm.router.js"
import bodyParser from "body-parser"
import cors from "cors"
import express from "express";


const app = express();


// Now you can use these imported modules as needed                      
const PORT = process.env.PORT || 5010;
app.use(bodyParser.json());
app.use(cors())

connectDB();





// app.use('/doctors_signup', doctorRoutes);
app.use('/api/pharmacies', pharmacyRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
