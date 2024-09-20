import express from 'express';
import connectDB from './config/connection.js';
import doctorRoutes from './routers/doctorForm.router.js';
import bodyParser from 'body-parser';
import cors from "cors"


const app = express();
const PORT = process.env.PORT || 5173;


app.use(bodyParser.json());
app.use(cors())

connectDB();



app.use('/doctors_signup', doctorRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
