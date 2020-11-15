import express from 'express';
import { sendEmail } from '../controllers/email';

const router = express.Router();
console.log('emailRoute');
router.post('/send', sendEmail);

export default router;