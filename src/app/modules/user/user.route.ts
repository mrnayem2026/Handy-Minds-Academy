import expresss from 'express';
import { userController } from './user.controller';
import validateRequest from '../../midellwares/validateRequest';
import StudentZodValidationSchema from '../student/student.validation.zod';

const router = expresss.Router();

router.post(
  '/create-student',
  validateRequest(StudentZodValidationSchema),
  userController.createStudent,
);

router.post('/create-faculty', userController.createFacultyIntoDB);
router.post('/create-admin', userController.createAdminIntorDb);

export const UserRoutes = router;
