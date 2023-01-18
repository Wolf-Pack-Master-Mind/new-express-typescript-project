import { Router } from 'express';
import adminMw from './shared/adminMw';
import { AuthApiRouter } from './auth-api';
import { UserApiRouter } from './user-api';

export const ApiRouter = Router();

ApiRouter.use('/users', adminMw, UserApiRouter);
ApiRouter.use('/auth', AuthApiRouter);
