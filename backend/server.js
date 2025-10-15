import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser'; 
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import taskRoutes from './routes/task.js';
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        const allowedOrigins = [
            'https://mern-user-system-frontend.vercel.app',
            'http://localhost:5173',
            'http://localhost:3000',
            'http://127.0.0.1:5173'
        ];
        
        if (allowedOrigins.includes(origin) || origin.startsWith('file://')) {
            return callback(null, true);
        }
        
        callback(new Error('Not allowed by CORS'));
    },
    credentials: true
}));

// Root route (no DB required)
app.get('/', (req, res) => {
  res.json({ 
    message: 'MERN User System API', 
    status: 'Server is running',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users', 
      tasks: '/api/tasks'
    }
  });
});

// Initialize database connection
try {
  connectDB();
} catch (error) {
  console.error('Database connection failed:', error);
}

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Export for Vercel
export default app;

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}