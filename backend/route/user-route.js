import express from 'express';
import { getAllUser, logIn, signUp } from "../controller/user-controller";


const userRouter = express.Router();
userRouter.get('/', getAllUser);
userRouter.post('/signup', signUp);
userRouter.post('/login', logIn);

export default userRouter;