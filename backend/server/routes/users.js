import express from 'express';

import { registerUser, addUser } from '../controllers/users';

const router = express.Router();

// Create a new user (register)
router.post('/', registerUser, addUser);

export default router;