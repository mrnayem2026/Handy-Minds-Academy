import expresss from 'express';
import { userController } from './user.controller';

const router = expresss.Router();

router.post('/create-student', userController.createStudent)

export const UserRoutes =  router;