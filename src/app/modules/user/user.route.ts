import expresss from 'express';
import { userController } from './user.controller';
import validateRequest from '../../midellwares/validateRequest';
import StudentZodValidationSchema from '../student/student.validation.zod';
// import facultyValidationSchema from '../faculty/faculty.validation.zod';

const router = expresss.Router();

router.post(
  '/create-student',
  validateRequest(StudentZodValidationSchema),
  userController.createStudent,
);

router.post('/create-faculty',userController.createFacultyIntoDB)

export const UserRoutes = router;
