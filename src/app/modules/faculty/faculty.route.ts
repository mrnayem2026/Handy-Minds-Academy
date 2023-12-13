import express from 'express';
import { FacultyControllers } from './faculty.controllers';
import { updateFacultyValidationSchema } from './faculty.validation.zod';
import validateRequest from '../../midellwares/validateRequest';

const router = express.Router();

router.get('/:id', FacultyControllers.getSingleFaculty);

router.patch(
  '/:id',
  validateRequest(updateFacultyValidationSchema),
  FacultyControllers.updateFaculty,
);

router.delete('/:id', FacultyControllers.deleteFaculty);

router.get('/', FacultyControllers.getAllFaculties);

export const FacultyRoutes = router;
