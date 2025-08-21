import express from 'express';
import { login, logout, refereshToken, register } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/refresh', refereshToken);
router.post('/logout', logout);

export default router;