import { Router } from 'express';
import ctrl from '@src/controllers';
import jetValidator from 'jet-validator';
import User from '@src/models/User';

const validate = jetValidator();

export const UserApiRouter = Router();

// Get all users
UserApiRouter.get('/all', ctrl.users.getAll);

// Add one user
UserApiRouter.post('/add', validate(['user', User.instanceOf]), ctrl.users.add);

// Update one user
UserApiRouter.put(
  '/update',
  validate(['user', User.instanceOf]),
  ctrl.users.update
);

// Delete one user
UserApiRouter.delete(
  '/delete/:id',
  validate(['id', 'number', 'params']),
  ctrl.users.remove
);
