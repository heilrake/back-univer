import Router from 'express';

import { getMe, registration, login } from '../controllers/authController.js';
import { registrationValidation } from '../validators/registrationValidation.js';

const router = new Router();

router.post('/registration', registrationValidation, registration);
router.post('/login', login);
// router.get('/users', roleMiddleware(['USER']), getUsers);

export default router;
