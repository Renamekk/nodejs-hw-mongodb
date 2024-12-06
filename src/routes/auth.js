import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginUserController,
  registerUserController,
  logoutUserController,
  refreshUserController,
} from '../controllers/auth.js';
import validateBody from '../utils/validateBody.js';
import { registerUserSchema, loginUserSchema } from '../validation/auth.js';

const authRouter = Router();

authRouter.post(
  '/auth/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

authRouter.post(
  '/auth/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

authRouter.post('/auth/logout', ctrlWrapper(logoutUserController));

authRouter.post('/auth/refresh', ctrlWrapper(refreshUserController));

export default authRouter;