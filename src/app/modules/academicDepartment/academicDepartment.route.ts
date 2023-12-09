import { Router } from 'express';
import validateRequest from '../../midellwares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentController } from './academicDepartment.controllers';

const router = Router();

router.post(
  '/create-academic-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.createAcademicDepartmentIntoDB,
);
router.patch(
  '/:academicDepartmentId',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentController.updateAcademicDepartmentIntoDB,
);
router.get(
  '/:academicDepartmentId',
  AcademicDepartmentController.getSingleAcademicDepartmentFromDB,
);
router.get('/', AcademicDepartmentController.getAllAcademicDepartmentsFromDB);

export const AcademicDepartmentRouter = router;
