import express from 'express';
import validateRequest from '../../midellwares/validateRequest';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';
import { SemesterRegistrationControllers } from './semesterRegistration.controllers';

const router = express.Router();

router.post(
  '/create-semester-registration',
  validateRequest(
    SemesterRegistrationValidation.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationControllers.createSemesterRegistrationIntoDB,
);

router.get(
  '/:id',
  SemesterRegistrationControllers.getSingleSemesterRegistration,
);

// router.patch(
//   '/:id',
//   validateRequest(
//     SemesterRegistrationValidations.upadateSemesterRegistrationValidationSchema,
//   ),
//   SemesterRegistrationController.updateSemesterRegistration,
// );

// router.get(
//   '/:id',
//   SemesterRegistrationController.getSingleSemesterRegistration,
// );

// router.delete(
//   '/:id',
//   SemesterRegistrationController.deleteSemesterRegistration,
// );

router.get('/', SemesterRegistrationControllers.getAllSemesterRegistrationsFromDB);

export const SemesterRegistrationRoutes = router;
