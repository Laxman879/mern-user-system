import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser'; 
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true
}))
 connectDB();
app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`);
})
app.use(cookieParser());
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)