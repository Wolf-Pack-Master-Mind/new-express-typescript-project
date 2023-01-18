import { Router } from 'express';
import ctrl from '@src/controllers';
import jetValidator from 'jet-validator';

const validate = jetValidator();

export const AuthApiRouter = Router();

// Login user
AuthApiRouter.post('/login', validate('email', 'password'), ctrl.auth.login);

// Logout user
AuthApiRouter.get('/logout', ctrl.auth.logout);
