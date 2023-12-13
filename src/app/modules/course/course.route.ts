import { Router } from 'express';
import validateRequest from '../../midellwares/validateRequest';
import { CourseValidations } from './course.validation';
import { CourseControllers } from './course.controllers';

const router = Router();

router.post(
  '/create-course',
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourseIntoDB,
);
router.delete('/:id', CourseControllers.deleteCourseFromDB);
router.get('/:id', CourseControllers.getSingleCourseFromDB);
router.patch(
  '/:id',
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourseIntoDB,
);
router.get('/', CourseControllers.getAllCoursesFromDB);

export const CourcesRouter = router;
