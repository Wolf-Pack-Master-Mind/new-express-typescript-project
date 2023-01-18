import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes';

import userService from '@src/services/user-service';
import { IUser } from '@src/models/User';
import { IReq, IRes } from '../routes/shared/types';

/**
 * Get all users.
 */
export async function getAll(_: IReq, res: IRes) {
  const users = await userService.getAll();
  return res.status(HttpStatusCodes.OK).json({ users });
}

/**
 * Add one user.
 */
export async function add(req: IReq<{ user: IUser }>, res: IRes) {
  const { user } = req.body;
  await userService.addOne(user);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
export async function update(req: IReq<{ user: IUser }>, res: IRes) {
  const { user } = req.body;
  await userService.updateOne(user);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
export async function remove(req: IReq, res: IRes) {
  const id = +req.params.id;
  await userService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}
