import express from 'express';
import { CREATE_ACCOUNT } from '../Controllers/AuthController.js';
const AuthRouter = express.Router()
AuthRouter.post('/register', CREATE_ACCOUNT);

export default AuthRouter;